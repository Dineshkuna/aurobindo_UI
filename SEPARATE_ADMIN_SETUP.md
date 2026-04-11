# 🔒 SEPARATE ADMIN PANEL - COMPLETE SETUP

## 📋 Overview

This is a **completely separate admin application** with:
- **Independent Admin Backend Server** (Port 8081)
- **Independent Admin Frontend** (Port 3031)
- **Separate Admin Database Models**
- **Admin-Only Authentication**
- **Full CRUD Operations**

## 📁 Folder Structure

```
aurobindo_UI/
├── server/ (Main API server)
├── client/ (Main website)
├── admin-server/ ✨ NEW - Admin backend
│   ├── middleware/
│   │   └── auth.middleware.js
│   ├── models/
│   │   ├── AdminUser.js
│   │   └── AdminProduct.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── products.routes.js
│   │   ├── users.routes.js
│   │   └── analytics.routes.js
│   ├── package.json
│   ├── index.js
│   └── .env
│
└── admin-frontend/ ✨ NEW - Admin frontend
    ├── pages/
    │   ├── _app.js
    │   ├── index.js (Dashboard)
    │   ├── auth/
    │   │   └── login.js
    │   ├── products/
    │   │   └── index.js
    │   ├── admins/
    │   │   └── index.js
    │   └── analytics/
    │       └── index.js
    ├── package.json
    ├── next.config.js
    └── .env.local
```

## 🚀 Getting Started

### Step 1: Setup Admin Server

```bash
cd admin-server

# Install dependencies
npm install

# Configure environment
# Edit .env with:
MONGO_URI=your_mongodb_connection
ADMIN_PORT=8081
JWT_SECRET=your_secret_key

# Start server
npm start
# Runs on http://localhost:8081
```

### Step 2: Setup Admin Frontend

```bash
cd admin-frontend

# Install dependencies
npm install

# Env is already set to use admin server
# .env.local points to http://localhost:8081

# Start frontend
npm run dev
# Runs on http://localhost:3031
```

### Step 3: Access Admin Panel

```
http://localhost:3031
```

You'll be redirected to:
```
http://localhost:3031/auth/login
```

## 🔑 Admin Authentication

### Create First Admin User

```bash
# MongoDB command or API call
# First admin must be created directly in DB or via API endpoint

curl -X POST http://localhost:8081/auth/register \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer {token}" \
  -d '{
    "email": "admin@example.com",
    "password": "secure_password",
    "name": "Admin Name",
    "role": "superadmin"
  }'
```

### Login

1. Open `http://localhost:3031/auth/login`
2. Enter admin credentials
3. Token stored in `localStorage` → `adminToken`
4. Redirected to dashboard

## 📊 API ENDPOINTS

### Authentication (Port 8081)
```
POST   /auth/register      Register new admin (superadmin only)
POST   /auth/login         Admin login
GET    /auth/verify        Verify token
POST   /auth/logout        Logout
```

### Products
```
GET    /api/products       Get all products
POST   /api/products       Create product
PUT    /api/products/:id   Update product
DELETE /api/products/:id   Delete product
```

### Admins
```
GET    /api/users          Get all admins
GET    /api/users/:id      Get single admin
PUT    /api/users/:id/role Update admin role
DELETE /api/users/:id      Delete admin
```

### Analytics
```
GET    /api/analytics/dashboard  Get dashboard stats
GET    /api/analytics/detailed   Get detailed analytics
GET    /api/analytics/report/csv Export CSV report
```

## 🎨 Frontend Pages

| Page | URL | Purpose |
|------|-----|---------|
| Login | `/auth/login` | Admin authentication |
| Dashboard | `/` | Overview & stats |
| Products | `/products` | Manage products (CRUD) |
| Admins | `/admins` | Manage admin users |
| Analytics | `/analytics` | View reports & statistics |

## 🔒 Security Features

✅ **JWT Authentication** - Token-based auth
✅ **Role-Based Access** - Super Admin & Admin roles
✅ **Protected Endpoints** - All routes require token
✅ **Password Hashing** - Bcryptjs encryption
✅ **CORS Configuration** - Restricted origins
✅ **Authorization Middleware** - Admin-only routes
✅ **Token Storage** - localStorage with manual refresh
✅ **Logout** - Clear tokens from localStorage

## 🛢️ Database Models

### AdminUser
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  role: "admin" | "superadmin",
  createdAt: Date
}
```

### AdminProduct
```javascript
{
  _id: ObjectId,
  productName: String,
  itemCode: String (unique),
  strength: String,
  dosageForm: String,
  market: String,
  gtin: String,
  packInsertUrl: String,
  createdBy: ObjectId (ref: AdminUser),
  createdAt: Date,
  updatedAt: Date
}
```

## 📋 Features Implemented

### Dashboard
- ✅ Total products count
- ✅ Total admins count
- ✅ Super admins count
- ✅ Regular admins count
- ✅ Recent products list
- ✅ Recent admins list

### Products Management
- ✅ View all products
- ✅ Create new product
- ✅ Edit product
- ✅ Delete product
- ✅ Real-time table updates
- ✅ Form validation

### Admin Management
- ✅ View all admins
- ✅ Change admin roles
- ✅ Delete admins
- ✅ Superadmin only operations

### Analytics
- ✅ Dashboard statistics
- ✅ Products by market
- ✅ Products by dosage form
- ✅ Products by strength
- ✅ Export ready (CSV endpoint)

## 🧪 Testing

### Test Login
```bash
curl -X POST http://localhost:8081/auth/login ^
  -H "Content-Type: application/json" ^
  -d "{\"email\":\"admin@example.com\",\"password\":\"admin123456\"}"
```

### Test Get Products
```bash
curl -X GET http://localhost:8081/api/products \
  -H "Authorization: Bearer {token}"
```

### Test Create Product
```bash
curl -X POST http://localhost:8081/api/products \
  -H "Authorization: Bearer {token}" \
  -H "Content-Type: application/json" \
  -d '{
    "productName": "Aspirin",
    "itemCode": "ASP001",
    "strength": "500mg",
    "dosageForm": "Tablet",
    "market": "US"
  }'
```

## 🔧 Environment Variables

### Admin Server (.env)
```
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/admin_db
ADMIN_PORT=8081
JWT_SECRET=your_super_secret_key
```

### Admin Frontend (.env.local)
```
NEXT_PUBLIC_ADMIN_API_URL=http://localhost:8081
```

## 📝 Deployment

### Backend Deployment (admin-server/)
```bash
# Build
npm install

# Set environment variables on hosting
MONGO_URI=prod_mongodb_url
ADMIN_PORT=8081
JWT_SECRET=prod_secret

# Start
npm start
```

### Frontend Deployment (admin-frontend/)
```bash
# Build
npm run build

# Deploy to Vercel, AWS, etc.
npm run start
```

## ❌ Troubleshooting

| Issue | Solution |
|-------|----------|
| "No token provided" | Login first, token not in localStorage |
| "Invalid token" | Token expired, login again |
| "Admin access required" | Only admin/superadmin roles allowed |
| Connection refused | Ensure both servers running on correct ports |
| MongoDB connection error | Check MONGO_URI in .env |
| CORS error | Update CORS origins in admin-server/index.js |

## 🚀 Production Checklist

- [ ] Change JWT_SECRET to strong value
- [ ] Update MongoDB connection string
- [ ] Create first superadmin account
- [ ] Test all CRUD operations
- [ ] Configure CORS for production domains
- [ ] Set up SSL certificates
- [ ] Enable rate limiting
- [ ] Add logging
- [ ] Set up monitoring
- [ ] Regular backups

## 📚 Quick Reference

### Start All Servers
```bash
# Terminal 1
cd server && npm start

# Terminal 2
cd client && npm run dev

# Terminal 3 (NEW)
cd admin-server && npm start

# Terminal 4 (NEW)
cd admin-frontend && npm run dev
```

### Access Points
```
Main API:        http://localhost:8080
Main Website:    http://localhost:3030
Admin Backend:   http://localhost:8081
Admin Frontend:  http://localhost:3031
Admin Login:     http://localhost:3031/auth/login
```

## 🎯 Next Steps

1. ✅ Create first superadmin
2. ✅ Login to admin panel
3. ✅ Test product creation
4. ✅ Add multiple admins
5. ✅ Test analytics
6. ✅ Deploy to production

## 📞 Support

For issues:
- Check server logs
- Verify all env variables
- Ensure MongoDB connection
- Check CORS configuration
- Review API responses

---

**Separate Admin Panel Ready!** 🎉

All files created and configured.
Start both servers and access admin panel at `http://localhost:3031`

