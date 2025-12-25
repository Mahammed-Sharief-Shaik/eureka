
# 🌟 Eureka — AI-Powered DSA Intuition Coach

Eureka is an **AI-powered learning platform** designed to help users **build intuition for Data Structures & Algorithms**, rather than memorizing solutions.

Unlike typical coding assistants that immediately provide full code, Eureka behaves like a **human mentor** — encouraging critical thinking, giving progressive hints, and revealing solutions only when necessary.

---

## 🚀 Key Features

- 🧠 **Intuition-first DSA learning**
- 💬 Chat-based AI mentoring experience
- 🔐 JWT-based authentication
- 🗂 Conversation & message persistence
- 🧩 Context-aware AI responses (last-N message window)
- ✍️ Markdown + syntax-highlighted responses
- 🎯 Clean, responsive chat UI
- ⚡ Fast inference using Groq (LLama-3.3-70B)

---

## 🏗️ Monorepo Architecture

```

eureka/
├── frontend/              # React + TypeScript client
│   ├── src/
│   │   ├── components/    # UI components (Chat, Sidebar, MarkdownRenderer)
│   │   ├── hooks/         # Custom hooks (auth, chat, AI calls)
│   │   ├── store/         # Zustand global state
│   │   ├── routes/        # Protected routes
│   │   ├── utils/         # Auth & helper utilities
│   │   └── main.tsx
│   └── package.json
│
├── backend/               # Node.js + Express API
│   ├── src/
│   │   ├── controllers/  # Auth, chat, AI controllers
│   │   ├── middlewares/  # JWT verification
│   │   ├── services/     # AI + DB services
│   │   ├── routes/       # API routes
│   │   ├── prisma/       # Prisma schema & migrations
│   │   └── index.ts
│   ├── prisma.config.ts
│   └── package.json
│
├── .gitignore
└── README.md

```

---

## 🧠 High-Level System Design

```

Frontend (React + TS)
↓ REST APIs (JWT protected)
Backend (Node + Express + TS)
↓ Prisma ORM
PostgreSQL
↓
Groq AI (LLama-3.3-70B)

```

---

## 🛠️ Tech Stack

### Frontend
- **React + Vite**
- **TypeScript**
- **Zustand** – global state management
- **Tailwind CSS**
- **shadcn/ui + Radix** – accessible UI components
- **React Router DOM**
- **Sonner** – toast notifications
- **React Markdown + Prism** – AI response rendering

### Backend
- **Node.js**
- **Express**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**
- **JWT Authentication**
- **Groq SDK (LLama-3.3-70B)**

---

## 🔐 Authentication & Security

- Password hashing
- JWT-based authentication (`6h` expiry)
- Protected frontend routes
- Backend authorization via middleware
- Token expiry handled both backend & frontend (UX)

---

## 🗄️ Database Schema (Prisma)

### User
```

id          Int (PK)
name        String
email       String (unique)
password    String (hashed)
createdAt   DateTime

```

### Conversation
```

id          Int (PK)
userId      Int (FK → User)
title       String
updatedAt   DateTime

```

### Message
```

id              Int (PK)
conversationId  Int (FK → Conversation)
role            "user" | "assistant"
content         String
createdAt       DateTime

````

**Indexes**
- `(conversationId, createdAt)` → fast chat history retrieval

---

## 🤖 AI Integration Strategy

### Model
- **LLama-3.3-70B** via **Groq**

### Prompt Design
- Single **system prompt** defining mentor behavior
- Injects **last N messages** for context
- Appends current user query
- Avoids token waste & repeated instructions

```ts
messages = [
  { role: "system", content: SYSTEM_PROMPT },
  ...last5Messages,
  { role: "user", content: msg }
]
````

### Philosophy

* Encourage thinking before coding
* Ask guiding questions
* Provide hints progressively
* Reveal full solutions only when necessary

---

## 🔄 Conversation Flow

1. User logs in
2. User sends first message
3. Backend generates a short chat title
4. Conversation is created
5. User message is saved
6. Last N messages are fetched
7. AI generates response
8. AI response is saved
9. Frontend updates chat view

---

## ⚙️ Local Development Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/eureka.git
cd eureka
```

---

### 2️⃣ Backend setup

```bash
cd backend
npm install
```

Create `.env`:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/eureka
JWT_SECRET=your_jwt_secret
SYSTEM_PROMPT="Your system prompt here"
GROQ_API_KEY=your_groq_key
```

Run migrations & start server:

```bash
npx prisma migrate dev
npm run dev
```

---

### 3️⃣ Frontend setup

```bash
cd ../frontend
npm install
npm run dev
```

---

## 🧪 Scripts

### Backend

```bash
npm run dev        # Start backend in dev mode
npx prisma studio # DB GUI
```

### Frontend

```bash
npm run dev        # Start frontend
npm run build      # Production build
```

---

## 📌 Future Enhancements

* Streaming AI responses
* Refresh token strategy
* Conversation search
* Chat analytics dashboard
* AI response personalization
* Mobile-first optimizations

---

## 🎯 Why Eureka?

Eureka is **not a CRUD clone**.

It demonstrates:

* Full-stack TypeScript
* Real-world authentication
* Relational database design
* AI system integration
* Thoughtful UX decisions
* Educational product thinking

