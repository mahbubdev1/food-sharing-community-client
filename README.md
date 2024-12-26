# Food Sharing and Surplus Reduction Platform

This platform is designed to connect individuals and organizations to share surplus food, reduce waste, and help those in need. Users can donate food, request surplus food, and manage food-related data in an intuitive and user-friendly way.

## 🌐 Live URL
[Food Sharing Platform](https://food-sharing-a11.netlify.app)

## 🎯 Purpose
The platform aims to promote sustainable food sharing by:
1. Reducing food waste.
2. Encouraging community participation.
3. Providing an easy-to-use solution for food donations and requests.

---

### Food Collection
- **POST** `/addFood` - Add a new food item.
- **GET** `/availableFoods` - Retrieve all food items.
- **GET** `/foodDetails/:id` - Retrieve details of a specific food item.
- **PATCH** `/foodDetails/:id` - Update a food item.


## 🚀 Key Features

### 1. **Food Donation**
   - Add new food donation entries.
   - View and filter food donations by categories like name or expiry date.
   - Check detailed information about each food donation.

### 2. **User Food Requests**
   - Create and manage food requests for specific needs.
   - View your food request history based on your email.
   - Delete outdated or fulfilled requests.

### 3. **Food Item Updates**
   - Update information about previously donated food items.

### 4. **Responsive Design**
   - Fully optimized for seamless use on both desktop and mobile devices.

---

## Technologies Used

### **Frontend**
- React.js
- Tailwind CSS
- DaisyUI

### **Backend**
- Node.js
- Express.js
- MongoDB

### **Additional Packages**
- Axios
- Firebase (for authentication and hosting)
- dotenv (for managing environment variables)
- MongoDB Driver

---