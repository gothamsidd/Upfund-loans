# 🚗 UpFund Loans

**UpFund Loans** is a modern full-stack **fintech web application** that simplifies **used car refinance**, **EMI loan management**, and **multi-loan distribution**.  
The platform connects **customers**, **Direct Selling Agents (DSAs)**, and **lenders (banks/NBFCs)** to streamline loan applications, EMI calculations, and approvals — all through a secure, intuitive interface.

---

## 🌟 Key Features

- 🚘 **Used Car Refinance** – Customers can refinance existing car loans for better rates and lower EMIs.  
- 💳 **EMI Loan Module** – Backend-powered EMI calculator with detailed repayment breakdowns.  
- 💼 **Multi-Loan Support** – Includes Personal, Business, and Home Loans with flexible eligibility criteria.  
- 👨‍💼 **DSA / Partner Dashboard** – Manage leads, submit applications, and track customer loan status.  
- 🏦 **Lender Integration (Simulated)** – Mimics real-world interactions between DSAs and banks/NBFCs.  
- 🔒 **Authentication & Role-Based Access** – Separate roles for Admins, DSAs, and Customers.  
- 📊 **Admin Panel** – Monitor loan activity, user stats, and partner performance.  
- 📱 **Responsive Design** – Built with React, HTML, CSS, and JavaScript for seamless experience on any device.  

---

## ⚙️ Tech Stack

| Layer | Technologies |
|-------|---------------|
| **Frontend** | React.js, HTML, CSS, JavaScript |
| **Backend** | Node.js, Express.js |
| **Database** | MySQL (via Prisma ORM) |
| **Authentication** | JWT (JSON Web Token) |
| **Deployment** | Vercel / Netlify |
| **Version Control** | Git & GitHub |

---

## 🧩 Architecture Overview

The application follows a **client–server architecture**:

- **Frontend (React):** Handles all user interfaces — loan forms, EMI calculators, dashboards.  
- **Backend (Node + Express):** Manages APIs, authentication, EMI computations, and data exchange.  
- **Database (MySQL + Prisma):** Stores user, loan, EMI, and partner data.  
- **Security Layer:** Role-based access and JWT authentication for data protection.

---

## 🧮 EMI Backend API

UpFund Loans includes a backend **EMI Calculation API**, which computes EMI, total interest, and total payment for any loan request.

**Endpoint:**

