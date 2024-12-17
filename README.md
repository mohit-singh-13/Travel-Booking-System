# 🧳 **Travel Booking System**

A simple and functional travel agency application built with the MERN stack and Nextjs. This application allows users to browse tour packages, book a package, generate invoices, and provides an admin panel for managing packages and bookings.

**IMPORTANT NOTE :** The backend is hosted on a free instance of Render, which spins down after 15 minutes of
inactivity. This may cause a 40-50 seconds delay when restarting the server, so please expect some delay for first request when visiting website
for the first time after a period of inactivity.

---

## 🚀 **Project Description**

The Travel Agency Booking System simplifies the process of booking travel packages online. It features a user-friendly frontend for customers to:

- Browse available tour packages.
- Book packages by providing necessary details.
- Receive an invoice after successful booking.

Additionally, it includes an **Admin Panel** to:

- Manage tour packages (add, update, delete).
- View submitted bookings.

---

## 🛠️ **Tech Stack**

### **Frontend**:

- Next.js
- TailwindCSS

### **Backend**:

- Node.js
- Express.js
- MongoDB (for data storage)

### **Other Libraries**:

- **axios**: For API requests.
- **jspdf**: For generating invoices.

---

## 🔧 **Setup Instructions**

### 1. **Clone the Repository**

```bash
git clone https://github.com/mohit-singh-13/Travel-Booking-System.git
cd travel-booking-system
```

---

### 2. **Install Dependencies**

**Install frontend dependencies**:

```bash
cd frontend
npm install
```

**Install backend dependencies**:

```bash
cd backend
npm install
```

---

### 3. **Set Up Environment Variables**

Create `.env` files in both frontend and backend directories with the following variables:

#### Backend `.env`:

```bash
PORT="8080"
MONGODB_URI="<your_mongodb_connection_string>"
```

#### Frontend `.env`:

```bash
NEXT_PUBLIC_BE_URL="http://localhost:8080"
```

---

### 4. **Run the Application**

**Backend**:

```bash
cd backend
npm run dev
```

**Frontend**:

```bash
cd frontend
npm run dev
```

The app should now be accessible at `http://localhost:3000`.

---

## 🎨 **Implemented Features**

### **Core Features**

1. **Tour Packages Page**:

   - Displays available packages with:
     - Title
     - Description
     - Price
     - Available Dates
     - Image

2. **Package Booking**:

   - Customers can book a package by providing:
     - Name
     - Email
     - Phone Number
     - Number of Travelers
     - Date of Booking
   - Booking data is stored in MongoDB.

3. **Invoice Generation**:

   - Generates and downloads a simple invoice after a successful booking in PDF format.

4. **Admin Panel**:
   - Manage tour packages (CRUD operations: Add, Update, Delete).
   - View all submitted bookings.

### **API Endpoints**
| Method | Route                        | Description                     |
|--------|-----------------------------|---------------------------------|
| GET    | `/api/v1/packages`           | Fetch all tour packages         |
| GET    | `/api/v1/packages/:id`       | Fetch package details           |
| GET    | `/api/v1/admin/bookings`           | Fetch all bookings (Admin)              |
| POST   | `/api/v1/createBooking`      | Submit a package booking        |
| POST   | `/api/v1/admin/packages/add` | Add a new package (Admin)       |
| PUT    | `/api/v1/admin/packages/update/:id` | Update an existing package (Admin)     |
| DELETE | `/api/v1/admin/packages/delete/:id` | Delete a package (Admin)        |

**NOTE :** Backend route for updating an existing package (Admin route) is implemented successfully. But due to time constraints wasn't able to implement it on the frontend.

---

## 🌟 **Bonus Features**

- Downloadable PDF invoices for bookings.

---

## ✅ **How to Use**

1. Run the project following the **Setup Instructions**.
2. Open the homepage to view all available packages.
3. Visit the `/admin/packages` route to access the admin panel for managing packages and bookings.

---

## 🌐 **Deployment**

For deployment, we have used:

- **Frontend**: Vercel
- **Backend**: Render
- **Database**: MongoDB Atlas

---

## 📢 **Feedback**

If you encounter any issues or have suggestions for improvement, feel free to open an issue or contribute via a pull request.

---
