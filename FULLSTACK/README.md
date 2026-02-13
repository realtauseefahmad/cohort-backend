# FULLSTACK 

This project is a fullstack notes application with a React frontend and a Node.js/Express backend, using MongoDB for data storage. Below you will find details about the technologies, packages, methods, and how the frontend connects to the backend.

---

## Table of Contents
- [Backend](#backend)
  - [Packages Used](#backend-packages)
  - [Key Methods & Endpoints](#backend-methods)
- [Frontend](#frontend)
  - [Packages Used](#frontend-packages)
  - [Key Methods](#frontend-methods)
- [Connecting Frontend & Backend](#connecting-frontend-backend)

---

---

## Backend

### Packages Used
- **express**: Web framework for Node.js
- **mongoose**: MongoDB object modeling
- **cors**: Enable Cross-Origin Resource Sharing
- **dotenv**: Load environment variables

### Key Methods & Endpoints
- **POST /api/notes**: Create a new note
- **GET /api/notes**: Fetch all notes
- **DELETE /api/notes/:id**: Delete a note by ID
- **connectToDB()**: Connects to MongoDB using Mongoose

#### Example: Creating a Note
```js
app.post("/api/notes", async (req, res) => {
  const { title, description } = req.body;
  const note = await noteModel.create({ title, description });
  res.status(201).json({ message: "Note created successfully", note });
});
```

---

## Frontend

### Packages Used
- **react**: UI library
- **react-dom**: DOM bindings for React
- **axios**: HTTP client for API requests
- **vite**: Build tool

### Key Methods
- **fetchNotes()**: Fetches notes from backend
- **handleSubmit()**: Submits new note to backend
- **handleDeleteNote(noteId)**: Deletes note by ID

#### Example: Fetching Notes
```js
axios.get('http://localhost:3000/api/notes')
  .then(res => setNotes(res.data.notes));
```

---

## Connecting Frontend & Backend
- The frontend uses **axios** to make HTTP requests to the backend API endpoints (`/api/notes`).
- CORS is enabled in the backend to allow requests from the frontend.
- Update the API URLs in the frontend (e.g., `App.jsx`) to match your backend server address (e.g., `https://cohort-backend-4-iof5.onrender.com/api/notes`).

---


## Notes
- You can change the backend API URL in the frontend code if deploying to production.
- All CRUD operations for notes are handled via REST API endpoints.

---

Feel free to contribute or modify as needed!
