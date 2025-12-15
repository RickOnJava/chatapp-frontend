# 💬 Synchronous Blue – Real-Time Chat Application

A modern **real-time chat application** built using the **MERN stack** that allows users to communicate instantly with a clean UI and secure backend. Designed with scalability, performance, and simplicity in mind.

🔗 **Live Demo:** [https://synchronous-blue.vercel.app](https://synchronous-blue.vercel.app)

---

## ✨ Features

* 🔐 User Authentication (Login / Register)
* 💬 Real-time one-to-one messaging
* 👥 Create & manage chats
* 🔄 Instant message updates
* 🟢 Online user status (Socket-based)
* 🧠 Clean and intuitive UI
* 📱 Responsive design (mobile & desktop)

---

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript (ES6+)
* Context API for state management
* Axios for API calls
* CSS / Modern UI styling

### Backend

* Node.js
* Express.js
* MongoDB with Mongoose
* Socket.IO (real-time communication)
* JWT Authentication
* bcrypt for password hashing

### Deployment

* Frontend: **Vercel**
* Backend: **Node server**
* Database: **MongoDB Atlas**

---

## 📂 Project Structure

### Frontend

```
chatapp-frontend/
├── public/
├── src/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   ├── App.js
│   └── index.js
└── package.json
```

### Backend

```
chatapp-server/
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
├── socket/
├── server.js
└── package.json
```

---

## 🧠 Database Models (Overview)

### User Model

* name
* email
* password (hashed)
* profilePic
* timestamps

### Chat Model

* chatName
* users (array of User IDs)
* latestMessage
* timestamps

### Message Model

* sender
* content
* chat
* timestamps

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repositories

```bash
git clone https://github.com/RickOnJava/chatapp-frontend.git
git clone https://github.com/RickOnJava/chatapp-server.git
```

### 2️⃣ Frontend Setup

```bash
cd chatapp-frontend
npm install
npm start
```

### 3️⃣ Backend Setup

```bash
cd chatapp-server
npm install
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file in the backend root:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 📡 API Overview (Backend)

### Auth Routes

* `POST /api/user/register`
* `POST /api/user/login`

### Chat Routes

* `POST /api/chat`
* `GET /api/chat`

### Message Routes

* `POST /api/message`
* `GET /api/message/:chatId`

---

## 🔄 Real-Time Communication

* Implemented using **Socket.IO**
* Handles:

  * New message broadcasting
  * User connection & disconnection
  * Real-time chat updates

---

## 🧠 Key Learnings

* Building scalable MERN applications
* Implementing real-time features using Socket.IO
* JWT-based authentication & authorization
* Structuring frontend and backend separately
* Managing global state in React
* Secure password handling with bcrypt

---

## 🚀 Future Improvements

* Group chat functionality
* Message read receipts
* Typing indicators
* File & image sharing
* Push notifications
* Improved UI animations

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch (`feature/your-feature`)
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 👨‍💻 Author

**Rick Ghosh**
Frontend / MERN Developer (Fresher)

* GitHub: [https://github.com/RickOnJava](https://github.com/RickOnJava)

---

## 📄 License

This project is licensed under the **MIT License**.

---

⭐ If you like this project, consider giving it a star on GitHub!
