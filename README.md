# 🏠 StudentHive - Smart Student Rental Platform

> A full-stack MERN rental platform that connects students with verified property owners, featuring secure authentication, Cloudinary image uploads, booking management, favorites, owner approval workflow, and a modern React frontend.

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge\&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge\&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge\&logo=mongodb)
![JWT](https://img.shields.io/badge/Auth-JWT-orange?style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge\&logo=tailwind-css)
![Cloudinary](https://img.shields.io/badge/Cloudinary-Image_Storage-3448C5?style=for-the-badge\&logo=cloudinary)

---



---

# 📖 Overview

StudentHive is a modern rental platform designed specifically for students looking for safe, affordable, and verified accommodations. Property owners can upload and manage rental listings while students can browse properties, save favorites, request bookings, and communicate with owners through an approval-based booking workflow.

The platform focuses on simplifying student accommodation by providing secure authentication, image management, booking automation, and role-based access control.

---

# ✨ Features

## 🔐 Authentication

* Secure User Registration
* User Login
* JWT Authentication
* Password Hashing using bcryptjs
* Persistent Login Sessions
* React Context API Authentication
* Protected Routes

---

## 🏡 Property Management

Property Owners can:

* Add New Properties
* Upload Property Images
* Edit Property Details
* Delete Their Own Properties
* View Booking Requests

Students can:

* Browse Available Properties
* View Property Details
* Search Properties
* Filter Properties
* Save Favorite Properties
* Request Bookings

---

## 🖼️ Cloudinary Image Upload

* Multiple Property Images
* Cloudinary Integration
* Automatic Image Hosting
* Secure Image Upload using Multer
* Public URL Generation

---

## ❤️ Favorites System

Students can:

* Save Properties
* Remove Saved Properties
* View Favorite Listings

---

## 📅 Booking Management

Students can:

* Request Property Booking
* View Booking Status
* Track Booking History

Owners can:

* View Incoming Booking Requests
* Approve Bookings
* Reject Bookings

---

## ⚙️ Intelligent Booking Workflow

```text
Student Requests Property
          │
          ▼
   Booking Status
      "Pending"
          │
          ▼
 Owner Reviews Request
     ↙            ↘
Approve          Reject
     │              │
     ▼              ▼
Property        Property
Becomes         Remains
Rented          Available
     │
     ▼
Other Pending Requests
Automatically Rejected
```

---

## 🏠 Property Availability Management

Every property automatically maintains its availability status:

* Available
* Rented

Availability updates automatically when bookings are approved or rejected.

---

## 📖 API Documentation

* Swagger UI Integration
* Interactive API Testing
* JWT Authorization Support
* RESTful API Architecture

---

## 🎨 Frontend

Built using React and Tailwind CSS.

Current Features:

* Responsive Landing Page
* Modern Navigation Bar
* Property Listing Grid
* Property Cards
* Property Details Page
* Authentication using Context API
* Persistent Login Sessions

---

# 🏗️ Tech Stack

## Frontend

* React (Vite)
* Tailwind CSS
* React Router DOM
* Axios
* React Context API

---

## Backend

* Node.js
* Express.js
* REST APIs
* Multer
* Express Middleware

---

## Database

* MongoDB Atlas
* Mongoose ODM

---

## Authentication

* JWT
* bcryptjs

---

## Cloud Services

* Cloudinary
* Multer Storage Cloudinary

---

## API Documentation

* Swagger UI
* Swagger JSDoc

---

# 📂 Project Structure

```text
StudentHive/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── assets/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# 🗄️ Database Design

The application currently uses three main collections.

## Users

Stores:

* Name
* Email
* Password
* Favorite Properties

---

## Properties

Stores:

* Title
* Description
* Price
* Location
* Images
* Owner
* Availability Status

---

## Bookings

Stores:

* Student
* Property
* Owner
* Booking Status
* Start Date
* End Date

---

# 🔄 Application Workflow

1. User registers or logs into the platform.
2. Property owners create rental listings.
3. Images are uploaded to Cloudinary.
4. Students browse available properties.
5. Students save favorite properties.
6. Students submit booking requests.
7. Owners review booking requests.
8. Owners approve or reject requests.
9. Approved bookings automatically mark properties as rented.
10. Remaining pending booking requests are automatically rejected.

---

# 🚀 Running Locally

## Clone Repository

```bash
git clone https://github.com/Aishwarya-Ramesh-Shetty/StudentHive.git

cd StudentHive
```

---

## Backend

```bash
cd backend

npm install

npm run dev
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 🔑 Environment Variables

## Backend (.env)

```env
PORT=5000

MONGO_URI=

JWT_SECRET=

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=
```

---

## Frontend (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

---

# 📸 Screenshots

* Home Page
* Login
* Register
* Property Listings
* Property Details
* Owner Dashboard
* Booking Requests
* Favorites
* Cloudinary Upload

*(Add screenshots after frontend completion.)*

---

# 🔮 Future Enhancements

* 💬 Real-time Chat between Student & Owner
* 📍 Google Maps Integration
* ⭐ Property Reviews & Ratings
* 📧 Email Notifications
* 💳 Online Rent Payment
* 📅 Booking Calendar
* 🔔 Real-time Notifications
* 📱 Progressive Web App (PWA)
* 📊 Admin Dashboard
* 🤖 AI Property Recommendations
* 📍 Nearby Colleges & Amenities
* 🔍 Advanced Search & Filters

---

# 👩‍💻 Author

**Aishwarya Shetty**

BE Computer Science & Engineering (Data Science)

Full Stack MERN Developer | Building Real-World Web Applications

If you found this project helpful, consider giving it a ⭐ on GitHub!
