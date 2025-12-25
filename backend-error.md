# Backend Error Analysis - Chatbot Not Working

## Summary of Issues

The chatbot is not working due to multiple configuration and integration errors in the backend and frontend components. The main issue is a build-time error that prevents the entire website from rendering properly.

## Primary Error: "rag is not defined"

**Location:** Server-side rendering during Docusaurus build process
**File:** ChatWidget component (compiled in server.bundle.js:1216:15)
**Error:** `ReferenceError: rag is not defined`

### Root Cause
The ChatWidget component is being used in `src/theme/Root.js`, which renders on every page during static site generation. During server-side rendering, the component is processed without access to browser APIs and potentially has undefined variables. The error indicates there's a reference to a variable named "rag" that is not properly defined in the server rendering context.

## Secondary Issues

### 1. API Endpoint Configuration
- **Issue:** Hardcoded `API_URL = 'http://localhost:8000'` in ChatWidget.js
- **Problem:** Only works when backend is running locally on port 8000
- **Impact:** Chatbot fails when deployed to production or when backend runs on different port

### 2. Server-Side Rendering (SSR) Compatibility
- **Issue:** ChatWidget uses browser-specific APIs during SSR
- **Specific Problem:** `window.getSelection()` is called during static site generation
- **Impact:** Breaks the build process since `window` object doesn't exist on server

### 3. Backend Service Dependencies
- **Issue:** Backend requires external services that may not be configured
- **Missing Configs:** Gemini API key, Qdrant URL and API key, Neon Postgres connection
- **Impact:** Even if frontend worked, backend would fail without these services

### 4. Content Ingestion
- **Issue:** Book content needs to be ingested into Qdrant vector database
- **Missing Step:** Content ingestion script may not have been run
- **Impact:** No content to retrieve, making RAG functionality useless

## How to Fix the Issues

### 1. Fix the "rag is not defined" Error
- **Immediate Fix:** Check if there's an undefined variable named "rag" in the ChatWidget component
- **Solution:** The issue is likely related to the component being rendered during server-side generation where browser APIs aren't available

### 2. Make ChatWidget SSR-Compatible
- **Wrap browser-specific code:** Use `typeof window !== 'undefined'` checks before using browser APIs
- **Conditional rendering:** Only render ChatWidget on client-side using React's useEffect or Next.js equivalent
- **Alternative approach:** Use dynamic imports with `ssr: false` flag

### 3. Fix API URL Configuration
- **Replace hardcoded URL:** Use environment variables or dynamic configuration
- **Example:** Set API_URL based on environment (localhost for dev, production URL for prod)

### 4. Configure Backend Services
- **Set up environment variables:**
  - `GEMINI_API_KEY`: Your Gemini API key
  - `QDRANT_URL`: Your Qdrant cluster URL
  - `QDRANT_API_KEY`: Your Qdrant API key
  - `DATABASE_URL`: Your Neon Postgres connection string
- **Run initialization scripts:**
  - `python scripts/init_db.py` to set up the database
  - `python scripts/ingest_content.py` to load book content into Qdrant

### 5. Verify Backend Service Status
- **Check if backend is running:** Ensure the FastAPI server is running on the expected port
- **Test backend endpoints:** Verify `/health` and `/api/chat` endpoints are accessible
- **Check service dependencies:** Ensure Qdrant and Neon Postgres are accessible

## Quick Fix Steps

1. **Temporarily disable ChatWidget during build:**
   - Modify the component to only render client-side
   - Add conditional checks before using browser APIs

2. **Set up backend environment:**
   - Copy `.env.example` to `.env` in the backend directory
   - Fill in all required API keys and connection strings

3. **Initialize backend services:**
   - Run database initialization: `cd backend && python scripts/init_db.py`
   - Run content ingestion: `cd backend && python scripts/ingest_content.py`

4. **Start backend server:**
   - Run: `cd backend && uvicorn app.main:app --reload`

5. **Update frontend to use correct backend URL:**
   - Change API_URL in ChatWidget.js to match your backend deployment

## Expected Outcome

After implementing these fixes, the website should build successfully and the chatbot should connect to the backend API to provide RAG functionality using the book content stored in Qdrant.