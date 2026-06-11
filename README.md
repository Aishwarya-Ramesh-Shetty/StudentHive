# StudentHive 🏠🎓

StudentHive is a full-stack student rental platform designed to help students discover safe, affordable, and verified rental accommodations such as apartments, PGs, and rental rooms. The platform connects property owners with students, allowing owners to list and manage properties while students can browse, save, and request bookings.

The project aims to simplify the rental process for students relocating to new cities for education.

---

## 🚀 Features

### Authentication & Authorization

* User Registration and Login
* JWT-Based Authentication
* Password Hashing using bcryptjs
* Protected Routes using Middleware
* Role-Based Access Control (Student, Owner, Admin)

### Property Management

Property Owners can:

* Create Property Listings
* Upload Property Images using Cloudinary
* Update Their Own Properties
* Delete Their Own Properties
* View Booking Requests for Their Properties

Students can:

* Browse Available Properties
* Search Properties by Location
* Filter Properties by Location and Price
* View Detailed Property Information
* Save Properties to Favorites
* Request Property Bookings

### Favorites System

* Add Properties to Favorites
* Remove Properties from Favorites
* View Saved Properties

### Booking System

Students can:

* Request Bookings for Properties
* View Their Booking History

Owners can:

* View Booking Requests
* Approve Bookings
* Reject Bookings

Booking Workflow:

```text
Student Requests Booking
          ↓
      Pending
          ↓
Owner Approves / Rejects
          ↓
Approved Property Becomes Rented
          ↓
Remaining Pending Requests Auto-Rejected
```

### Property Availability Management

Each property maintains:

* Available
* Rented

status automatically based on booking approval.

### Image Management

* Cloudinary Integration
* Image Upload Support
* Property Image Storage
* Public URL Generation

### API Documentation

* Swagger/OpenAPI Integration
* Interactive API Testing
* JWT Authorization Support inside Swagger

### Property Listing Features

* Pagination
* Location Search
* Price Filtering
* Property Details Endpoint

---

## 🖥️ Frontend Features

Built using React + Vite + Tailwind CSS.

### Implemented

* Responsive Home Page
* Property Listing Grid
* Property Cards
* Property Details Page
* Dynamic Routing using React Router
* Backend API Integration using Axios

### In Progress

* Authentication Pages
* Favorites UI
* Booking UI
* Owner Dashboard
* Student Dashboard

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Authentication

* JWT (JSON Web Tokens)
* bcryptjs

### Cloud Services

* Cloudinary

### API Documentation

* Swagger UI
* Swagger JSDoc

---

## 📂 Project Structure

```text
StudentHive/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── routes/
│   │   ├── context/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── controllers/
│   │   ├── userController.js
│   │   ├── propertyController.js
│   │   └── bookingController.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Property.js
│   │   └── Booking.js
│   │
│   ├── routes/
│   │   ├── userRoutes.js
│   │   ├── propertyRoutes.js
│   │   └── bookingRoutes.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   ├── roleMiddleware.js
│   │   └── upload.js
│   │
│   ├── config/
│   │   ├── db.js
│   │   ├── cloudinary.js
│   │   └── swagger.js
│   │
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 📡 Major API Endpoints

### Authentication

```http
POST /api/users/register
POST /api/users/login
GET  /api/users/profile
```

### Properties

```http
GET    /api/property
GET    /api/property/:id
POST   /api/property
PUT    /api/property/:id
DELETE /api/property/:id
```

### Favorites

```http
POST   /api/users/favourites/:propertyId
DELETE /api/users/favourites/:propertyId
GET    /api/users/favourites
```

### Bookings

```http
POST   /api/bookings
GET    /api/bookings/my
GET    /api/bookings/owner
PUT    /api/bookings/:id/approve
PUT    /api/bookings/:id/reject
```

---

## 🔒 Security Features

* Password Hashing with bcryptjs
* JWT Authentication
* Protected API Routes
* Role-Based Authorization
* Owner-Specific Property Controls
* Booking Ownership Validation
* MongoDB ObjectId Validation
* Duplicate Favorites Prevention

---

## 🎯 Future Enhancements

* Property Reviews & Ratings
* Advanced Search Filters
* Property Image Gallery
* Email Notifications
* Real-Time Chat Between Student & Owner
* Payment Gateway Integration
* Google Maps Integration
* Admin Dashboard
* Property Verification System
* Booking Cancellation Workflow

---

## 👩‍💻 Developer

**Aishwarya Shetty**

StudentHive was developed as a full-stack MERN project focused on solving real-world accommodation challenges faced by students relocating for education.
