# StudentHive 🏠🎓

StudentHive is a student rental web application designed to help students find safe, secure, and affordable apartments, PGs, and rental rooms based on their preferred location. The platform connects property owners with students by allowing owners to list their properties, while students can search, filter, and view accommodations according to their needs and budget.

This project is currently under development and focuses on simplifying the rental process for students, especially those coming from different cities for education.

---

## 🚀 Features

- User Registration and Login
- Secure Authentication using JWT
- Password Hashing using bcryptjs
- Role-Based Authorization
- Owners can:
  - Add new properties
  - Update their own properties
  - Delete only their own properties
- Students can:
  - View available properties
  - Search properties based on location
  - Filter properties by location and price
- Pagination implemented for efficient property listing
- Protected Routes using Middleware
- MongoDB Database Integration
- Used Cloudinary for Image Management 

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Libraries & Packages
- bcryptjs
- jsonwebtoken
- express
- mongoose
- nodemon
- dotenv
- cloudinary

---

## 📂 Project Structure

```bash
StudentHive/
│
├── models/
│   ├── User.js
│   └── Property.js
│
├── routes/
│   ├── userRoutes.js
│   └── propertyRoutes.js
│
├── middleware/
│   └── authMiddleware.js
│
├── controllers/
│   ├── userController.js
│   └── propertyController.js
│
├── config/
│   └── db.js
│
├── .env
├── server.js
├── package.json
└── README.md
