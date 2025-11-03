# Basic MERN Stack Application

A minimal MERN (MongoDB, Express, React, Node.js) application that allows users to add and view notes.  
This project demonstrates the basic structure of a MERN stack app with models, controllers, routes, and a simple frontend.

---

## 🚀 Features
- **Backend with Express & MongoDB**
  - Note model and schema
  - REST API with CRUD routes
  - Modular structure (controllers, routes, models)
- **Frontend with React**
  - Add new notes
  - Display notes from the backend

---

## ⚙️ Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/basic-mern-app.git
cd basic-mern-app
````

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run backend:

```bash
npm start
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm start
```

---

## 🖥️ Usage

1. Open your browser at `http://localhost:3000`
2. Add a note using the form
3. See the list of notes fetched from the backend

---

## 🔧 Tech Stack

* **Frontend:** React, Fetch API
* **Backend:** Node.js, Express.js, MongoDB, Mongoose
* **Database:** MongoDB Atlas or local MongoDB

---
