# 🎓 Campus Hire

Campus Hire is a full-stack web application designed to streamline campus placement activities by connecting students and administrators through a unified recruitment platform.

It enables students to explore and apply for job opportunities while allowing administrators to manage companies and oversee the hiring process.

---

## 🚀 Key Features

### 👨‍🎓 Student Module
- Secure Registration & Login
- View Available Companies
- Apply for Job Roles
- Track Application Status (Applied / Selected / Rejected)

### 👨‍💼 Admin Module
- Secure Admin Login
- Add & Manage Companies
- View All Student Applications
- Select or Reject Candidates
- Dashboard Analytics:
  - Total Companies
  - Total Applications
  - Selected Candidates Count
  - Search & Filter Applications
  - Placement Statistics Chart

---

## 🛠️ Tech Stack

### Backend
- Java
- Spring Boot
- Spring Data JPA
- MySQL
- Maven

### Frontend
- React.js
- Axios
- Chart.js
- CSS

---------------------------------------------

## 📂 Project Structure

Campus-Hire/
│
├── placement-backend/
│   ├── src/main/java/com/placement/placementsystem
│   │   ├── controller/
│   │   ├── service/
│   │   ├── repository/
│   │   ├── entity/
│   │   └── dto/
│   │
│   ├── src/main/resources/
│   │   └── application.properties
│   │
│   └── pom.xml
│
├── placement-frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── pages/
│   │   │   └── Navbar.js
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.js
│   │   └── index.js
│   │
│   └── package.json
│
└── README.md

----

**System Architecture Diagram**

## 🏗️ System Architecture

+------------------+
|   React Frontend |
|  (Campus Hire)   |
+------------------+
         |
         |  REST API (Axios)
         |
+----------------------+
|  Spring Boot Backend |
|  (Controllers,       |
|   Services, JPA)     |
+----------------------+
         |
         |  JPA / Hibernate
         |
+------------------+
|     MySQL DB     |
+------------------+

---------------------------------------------------

## ⚙️ How To Run Locally

### 1️⃣ Backend Setup

- Open `placement-backend` in your IDE
- Configure MySQL database in `application.properties`
- Run the Spring Boot application

Backend runs on: http://localhost:8080

---

### 2️⃣ Frontend Setup

Navigate to:
-placement-frontend

Install dependencies:
-npm install

Start the application:
Frontend runs on: http://localhost:3000/

---

## 🗄️ Database Configuration

Update in `application.properties`:

spring.datasource.url=jdbc:mysql://localhost:3306/campus_hire
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update

---

## 📊 Dashboard Analytics

The Admin Dashboard provides:

- Real-time application tracking
- Placement statistics visualization
- Status-based filtering
- Search functionality

---

## 🔒 Role-Based Access Control

- Students cannot access Admin Dashboard
- Admin cannot access Student pages
- Navigation dynamically adjusts based on login role

---

## 🎯 Future Enhancements

- JWT Authentication
- Resume Upload Feature
- Email Notifications
- Pagination & Sorting
- Cloud Deployment (AWS / Render / Railway)
- Fully Responsive Mobile UI

---

## 👨‍💻 Developed By

Sushant Savale  
Final Year IT Engineering Student  

---

## ⭐ Support

If you find this project useful, consider giving it a ⭐ on GitHub.











