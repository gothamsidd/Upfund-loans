# Backend Setup Guide

## Prerequisites

⚠️ **Important**: This backend requires **Node.js version 20.19+ or 22.12+** for Prisma to work.

Your current Node.js version is 18.20.8. Please upgrade Node.js before proceeding.

### Upgrade Node.js

**Using nvm (recommended):**

```bash
# Install nvm if you don't have it
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install and use Node.js 20
nvm install 20
nvm use 20
```

**Or download from:** https://nodejs.org/

## Setup Steps

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Create MySQL Database

```sql
CREATE DATABASE upfund_loans;
```

### 3. Configure Environment Variables

Create a `.env` file in the `backend` directory:

```env
# Database
DATABASE_URL="mysql://username:password@localhost:3306/upfund_loans?schema=public"

# Server
PORT=5000
NODE_ENV=development

# JWT Secret (change this in production!)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d
```

**Replace:**

- `username` - Your MySQL username
- `password` - Your MySQL password
- `localhost:3306` - Your MySQL host and port (if different)

### 4. Generate Prisma Client

```bash
npm run prisma:generate
```

### 5. Run Database Migrations

```bash
npm run prisma:migrate
```

This will create all database tables.

### 6. Start the Server

```bash
npm run dev
```

The server will start on `http://localhost:5000`

## Quick Setup Script

Alternatively, you can run the setup script:

```bash
chmod +x setup.sh
./setup.sh
```

## Verify Setup

1. Check health endpoint: `http://localhost:5000/api/health`
2. Test signup: `POST http://localhost:5000/api/auth/signup`
3. Test login: `POST http://localhost:5000/api/auth/login`

## Troubleshooting

### Prisma Error: Node.js version

- Upgrade to Node.js 20.19+ or 22.12+

### Database Connection Error

- Check MySQL is running
- Verify DATABASE_URL in .env file
- Ensure database `upfund_loans` exists

### Port Already in Use

- Change PORT in .env file
- Or kill the process using port 5000
