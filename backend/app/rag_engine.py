from openai import OpenAI
from app.vector_store import VectorStore
from app.config import settings
from typing import List, Dict, Optional


class RAGEngine:
    """Retrieval-Augmented Generation engine"""
    
    def __init__(self):
        self.client = OpenAI(api_key=settings.OPENAI_API_KEY)
        self.vector_store = VectorStore()
    
    def generate_embedding(self, text: str) -> List[float]:
        """Generate embedding for text using OpenAI"""
        response = self.client.embeddings.create(
            model=settings.EMBEDDING_MODEL,
            input=text
        )
        return response.data[0].embedding
    
    def retrieve_context(
        self, 
        query: str, 
        selected_text: Optional[str] = None,
        module: Optional[str] = None,
        chapter: Optional[str] = None,
        limit: int = None
    ) -> tuple[str, List[Dict]]:
        """Retrieve relevant context from vector store"""
        if limit is None:
            limit = settings.TOP_K_RESULTS
        
        # If user selected text, prioritize it in the query
        search_query = query
        if selected_text:
            search_query = f"Selected text: {selected_text}\n\nQuestion: {query}"
        
        # Generate embedding for query
        query_vector = self.generate_embedding(search_query)
        
        # Search vector store with optional filters
        results = self.vector_store.search(
            query_vector=query_vector,
            limit=limit,
            module_filter=module,
            chapter_filter=chapter
        )
        
        # Extract context and sources
        context_chunks = []
        sources = []
        
        for result in results:
            context_chunks.append(result.payload["text"])
            sources.append({
                "text": result.payload["text"][:200] + "...",  # Preview
                "module": result.payload.get("module", ""),
                "chapter": result.payload.get("chapter", ""),
                "score": result.score
            })
        
        context = "\n\n---\n\n".join(context_chunks)
        return context, sources
    
    def generate_response(
        self, 
        query: str, 
        context: str,
        selected_text: Optional[str] = None
    ) -> str:
        """Generate response using OpenAI Chat"""
        
        # Build system message
        system_message = """You are an expert assistant for the Physical AI & Humanoid Robotics textbook. 
Your role is to help students understand complex robotics concepts.

Guidelines:
- Answer questions based on the provided context from the book
- Be clear, concise, and educational
- If the answer isn't in the context, say so politely
- Use examples when helpful
- Reference specific modules or chapters when relevant"""
        
        # Build user message
        user_message = f"Context from the book:\n\n{context}\n\n"
        
        if selected_text:
            user_message += f"User selected this text: \"{selected_text}\"\n\n"
        
        user_message += f"Question: {query}"
        
        # Generate response
        response = self.client.chat.completions.create(
            model=settings.CHAT_MODEL,
            messages=[
                {"role": "system", "content": system_message},
                {"role": "user", "content": user_message}
            ],
            temperature=settings.TEMPERATURE,
            max_tokens=settings.MAX_TOKENS
        )
        
        return response.choices[0].message.content
    
    def chat(
        self, 
        query: str, 
        selected_text: Optional[str] = None,
        module: Optional[str] = None,
        chapter: Optional[str] = None
    ) -> Dict:
        """Main RAG chat function"""
        
        # Retrieve relevant context
        context, sources = self.retrieve_context(
            query=query,
            selected_text=selected_text,
            module=module,
            chapter=chapter
        )
        
        # Generate response
        response = self.generate_response(
            query=query,
            context=context,
            selected_text=selected_text
        )
        
        return {
            "response": response,
            "context": context,
            "sources": sources
        }
