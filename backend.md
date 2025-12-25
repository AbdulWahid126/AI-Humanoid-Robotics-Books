# Backend Architecture Overview

This document provides a comprehensive overview of the backend architecture for the Physical AI & Humanoid Robotics - RAG Backend.

## 📁 Folder Structure

```
backend/
├── app/                    # Main application code
│   ├── __init__.py         # Package initialization
│   ├── main.py            # FastAPI application entry point
│   ├── config.py          # Application settings and configuration
│   ├── models.py          # Pydantic data models
│   ├── database.py        # Database models and operations (Neon Postgres)
│   ├── vector_store.py    # Qdrant vector database integration
│   ├── rag_engine.py      # RAG (Retrieval-Augmented Generation) logic
│   ├── routers/           # API route handlers
│   │   ├── __init__.py    # Routers package initialization
│   │   ├── chat.py        # Chat API endpoints
│   │   └── health.py      # Health check endpoints
│   └── utils/             # Utility functions
│       ├── __init__.py    # Utils package initialization
│       └── chunking.py    # Text processing and chunking utilities
├── scripts/               # Standalone scripts
│   ├── ingest_content.py  # Content ingestion script for Qdrant
│   └── init_db.py         # Database initialization script
├── requirements.txt       # Python dependencies
├── .env.example          # Environment variables template
├── .env                  # Environment variables (git-ignored)
└── README.md             # Project documentation
```

## 🏗️ Component Breakdown

### `app/` Directory
The main application directory contains all core backend functionality:

#### `main.py` - Application Entry Point
- Creates the FastAPI application instance
- Configures CORS (Cross-Origin Resource Sharing) middleware
- Registers API routers for different endpoints
- Defines the root endpoint (`/`) with basic API information
- Includes automatic API documentation (Swagger UI at `/docs`, ReDoc at `/redoc`)

#### `config.py` - Configuration Management
- Defines the `Settings` class using Pydantic Settings
- Manages environment variables for:
  - **Gemini API**: API key, base URL, models (embedding and chat)
  - **Qdrant**: URL, API key, collection name
  - **Database**: Connection URL for Neon Postgres
  - **Application**: Host, port, CORS origins, environment
  - **RAG**: Chunk size, overlap, number of results
- Provides utility to convert comma-separated CORS origins to a list

#### `models.py` - Data Models
- Defines Pydantic models for API request/response validation:
  - `ChatRequest`: Input for chat endpoint (query, selected text, module, chapter)
  - `ChatResponse`: Output from chat endpoint (response, conversation ID, sources)
  - `HealthResponse`: Health check response structure

#### `database.py` - Database Operations
- SQLAlchemy models and operations for Neon Postgres:
  - `Conversation` model: Stores chat history with query, response, context, metadata
  - Database initialization function (`init_db`)
  - Session management with `get_db` dependency
  - Conversation saving function with metadata support

#### `vector_store.py` - Qdrant Integration
- Qdrant vector database client wrapper:
  - Collection management (create, info)
  - Text chunk storage with embeddings
  - Search functionality with optional filters (module, chapter)
  - Vector operations for similarity search

#### `rag_engine.py` - RAG Logic
- Core RAG (Retrieval-Augmented Generation) engine:
  - Embedding generation using Gemini API
  - Context retrieval from Qdrant with optional filtering
  - Response generation using Gemini chat models
  - Main chat function orchestrating the RAG process

### `routers/` Directory
API route handlers organized by functionality:

#### `chat.py` - Chat Endpoints
- Main chat endpoint (`POST /api/chat`) with full RAG functionality
- Test endpoint (`GET /api/chat/test`) for verifying functionality
- Integration with RAG engine and database logging
- Error handling for chat operations

#### `health.py` - Health Check Endpoints
- Health check endpoint (`GET /health`) for monitoring
- Returns application status and environment information

### `utils/` Directory
Utility functions for common operations:

#### `chunking.py` - Text Processing
- `chunk_markdown()`: Splits markdown content into chunks while preserving headers
- `clean_text()`: Cleans text by removing extra whitespace and code blocks
- Handles chunk overlap to maintain context

### `scripts/` Directory
Standalone scripts for setup and maintenance:

#### `ingest_content.py` - Content Ingestion
- Reads all MDX files from the `../docs/` directory
- Extracts metadata from file paths (module, chapter)
- Chunks content using the chunking utilities
- Generates embeddings using Gemini API
- Uploads chunks and embeddings to Qdrant
- Creates Qdrant collection if it doesn't exist

#### `init_db.py` - Database Initialization
- Creates database tables based on SQLAlchemy models
- Specifically creates the `conversations` table for storing chat history

## 🚀 Entry Point and Configuration

### Application Startup
The backend uses FastAPI as the web framework with uvicorn as the ASGI server:

```bash
# Development mode
uvicorn app.main:app --reload

# Production mode
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

### Required Environment Variables
All configuration is managed through environment variables defined in `.env`:

- `GEMINI_API_KEY`: Gemini API key for embeddings and chat
- `QDRANT_URL`: Qdrant vector database URL
- `QDRANT_API_KEY`: Qdrant API key
- `DATABASE_URL`: Neon Postgres connection string

### API Endpoints
- `GET /health`: Health check endpoint
- `POST /api/chat`: Main RAG chat endpoint
- `GET /api/chat/test`: Chat functionality test endpoint
- `GET /docs`: Swagger UI API documentation
- `GET /redoc`: ReDoc API documentation

## 🛠️ Technology Stack

- **FastAPI**: Modern Python web framework with automatic API documentation
- **Gemini API**: Used for embeddings and chat completions (configured through OpenAI SDK)
- **Qdrant**: Vector database for similarity search (free tier)
- **Neon Postgres**: Database for conversation storage (free tier)
- **SQLAlchemy**: Database ORM for Postgres operations
- **Pydantic**: Data validation and settings management

## 📋 Setup Process

1. Install dependencies: `pip install -r requirements.txt`
2. Configure environment: Copy `.env.example` to `.env` and fill in API keys
3. Initialize database: `python scripts/init_db.py`
4. Ingest content: `python scripts/ingest_content.py`
5. Run the API: `uvicorn app.main:app --reload`

## 🧠 RAG Workflow

The backend implements a Retrieval-Augmented Generation workflow:

1. **Query Processing**: User query is received via the chat endpoint
2. **Embedding Generation**: Query is converted to vector representation using Gemini embeddings
3. **Vector Search**: Qdrant performs similarity search to find relevant content chunks
4. **Context Retrieval**: Relevant content is retrieved with optional filters (module/chapter)
5. **Response Generation**: Gemini chat model generates response based on retrieved context
6. **Conversation Logging**: Query and response are saved to Neon Postgres for history
7. **Response Return**: Response with sources is returned to the user