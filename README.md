# recruitment-pipeline

A full-stack application with a React frontend and a Spring Boot backend. The project is containerized using Docker and uses Supabase as the backend service for authentication or data storage.

## 📁 Project Structure

├── backend/ # Spring Boot API server

├── candidate-board/ # React frontend (TypeScript)

├── .gitignore

├── API Prototyping.postman_collection.json # postman collection for test backend endpoints

└── README.md

### 🚀 Backend (Spring Boot)

#### Run locally

```bash
cd backend
./mvnw spring-boot:run
```

- you can use Postman collection file to test end points

### 🚀 Frontend (ReactJS)

#### Run locally

```bash
cd candidate-board
npm install
npm run dev
```

## Assumptions & Decisions

- The backend is located in /backend
- The frontend is located in /candidate-board
- Supabase is used as a backend-as-a-service; keys and URLs stored in .env files.
