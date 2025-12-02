# UpFund Loans Backend API

Backend API server for UpFund Loans application built with Node.js, Express.js, and Prisma ORM.

## Features

- User Authentication (Signup & Login)
- Prisma ORM with MySQL database
- JWT-based authentication
- Password hashing with bcrypt
- Role-based access control (Customer, Admin, DSA)

## Prerequisites

- Node.js (v16 or higher)
- MySQL database server
- npm or yarn

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Database Setup

#### Create MySQL Database

```sql
CREATE DATABASE upfund_loans;
```

#### Configure Environment Variables

Create a `.env` file in the backend directory:

```env
# Database
DATABASE_URL="mysql://username:password@localhost:3306/upfund_loans?schema=public"

# Server
PORT=5000
NODE_ENV=development

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d
```

**Important:** Replace `username` and `password` with your MySQL credentials.

### 3. Run Prisma Migrations

```bash
# Generate Prisma Client
npm run prisma:generate

# Run database migrations
npm run prisma:migrate
```

This will:

- Create the database schema
- Generate Prisma Client
- Set up all tables

### 4. Start the Server

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:5000` by default.

## API Endpoints

### POST /api/auth/signup

Register a new user account.

**Request Body:**

```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "password": "password123",
  "confirmPassword": "password123"
}
```

**Response:**

```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "uuid",
      "fullName": "John Doe",
      "email": "john@example.com",
      "phone": "1234567890",
      "role": "CUSTOMER"
    },
    "token": "jwt-token"
  }
}
```

### POST /api/auth/login

Login with email and password.

**Request Body:**

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": "uuid",
      "fullName": "John Doe",
      "email": "john@example.com",
      "phone": "1234567890",
      "role": "CUSTOMER"
    },
    "token": "jwt-token"
  }
}
```

## Prisma Commands

```bash
# Generate Prisma Client
npm run prisma:generate

# Create and apply migration
npm run prisma:migrate

# Open Prisma Studio (Database GUI)
npm run prisma:studio
```

## Project Structure

```
backend/
├── prisma/
│   ├── schema.prisma      # Database schema
│   └── client.js          # Prisma Client instance
├── routes/
│   └── authRoutes.js      # Authentication routes
├── controllers/
│   └── authController.js  # Request controllers
├── services/
│   └── authService.js    # Business logic
├── server.js              # Main server file
└── package.json
```

## Database Schema

### User Model

- `id`: UUID (Primary Key)
- `fullName`: String
- `email`: String (Unique)
- `phone`: String
- `password`: String (Hashed)
- `role`: Enum (CUSTOMER, ADMIN, DSA)
- `isActive`: Boolean
- `createdAt`: DateTime
- `updatedAt`: DateTime

## Security Features

- Passwords are hashed using bcrypt (10 salt rounds)
- JWT tokens for authentication
- Environment variables for sensitive data
- Input validation on all endpoints

## License

This project is private and proprietary.
