import React, { useState, useEffect, useRef } from 'react';
import styles from './ChatWidget.module.css';

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [selectedText, setSelectedText] = useState('');
    const messagesEndRef = useRef(null);

    // API endpoint - update this with your deployed backend URL
    const API_URL = 'http://localhost:8000';

    // Capture text selection
    useEffect(() => {
        const handleSelection = () => {
            const selection = window.getSelection().toString().trim();
            if (selection && selection.length > 0 && selection.length < 500) {
                setSelectedText(selection);
            }
        };

        document.addEventListener('mouseup', handleSelection);
        return () => document.removeEventListener('mouseup', handleSelection);
    }, []);

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setLoading(true);
        setInput('');

        try {
            const response = await fetch(`${API_URL}/api/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    query: input,
                    selected_text: selectedText || null
                })
            });

            if (!response.ok) {
                throw new Error('Failed to get response');
            }

            const data = await response.json();
            const assistantMessage = {
                role: 'assistant',
                content: data.response,
                sources: data.sources
            };

            setMessages(prev => [...prev, assistantMessage]);
            setSelectedText(''); // Clear selection after use
        } catch (error) {
            console.error('Chat error:', error);
            const errorMessage = {
                role: 'assistant',
                content: '❌ Sorry, I encountered an error. Please make sure the backend is running.'
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            {/* Chat Toggle Button */}
            <button
                className={styles.chatToggle}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle chat"
            >
                {isOpen ? '✕' : '💬'}
            </button>

            {/* Chat Widget */}
            {isOpen && (
                <div className={styles.chatWidget}>
                    {/* Header */}
                    <div className={styles.chatHeader}>
                        <h3>🤖 AI Assistant</h3>
                        <p>Ask me anything about the book!</p>
                    </div>

                    {/* Selected Text Indicator */}
                    {selectedText && (
                        <div className={styles.selectedTextBanner}>
                            📝 Selected: "{selectedText.substring(0, 50)}..."
                        </div>
                    )}

                    {/* Messages */}
                    <div className={styles.chatMessages}>
                        {messages.length === 0 && (
                            <div className={styles.welcomeMessage}>
                                <p>👋 Hi! I'm your AI assistant for the Physical AI & Humanoid Robotics book.</p>
                                <p>You can:</p>
                                <ul>
                                    <li>Ask questions about any topic</li>
                                    <li>Select text and ask for clarification</li>
                                    <li>Request examples or explanations</li>
                                </ul>
                            </div>
                        )}

                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`${styles.message} ${msg.role === 'user' ? styles.userMessage : styles.assistantMessage
                                    }`}
                            >
                                <div className={styles.messageContent}>
                                    {msg.content}
                                </div>
                                {msg.sources && msg.sources.length > 0 && (
                                    <div className={styles.sources}>
                                        <small>📚 Sources: {msg.sources.map(s => s.module).join(', ')}</small>
                                    </div>
                                )}
                            </div>
                        ))}

                        {loading && (
                            <div className={`${styles.message} ${styles.assistantMessage}`}>
                                <div className={styles.messageContent}>
                                    <div className={styles.typingIndicator}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className={styles.chatInput}>
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask a question..."
                            rows={2}
                            disabled={loading}
                        />
                        <button
                            onClick={sendMessage}
                            disabled={loading || !input.trim()}
                            className={styles.sendButton}
                        >
                            {loading ? '⏳' : '➤'}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
