import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

async function createFirstAdmin() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    const db = mongoose.connection;
    const collection = db.collection('adminusers');

    // Check if admin already exists
    const existingAdmin = await collection.findOne({ email: 'admin@example.com' });
    if (existingAdmin) {
      console.log('⚠️  Admin already exists');
      await mongoose.connection.close();
      process.exit(0);
    }

    // Hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash('admin123456', salt);

    // Create admin directly
    await collection.insertOne({
      name: 'Admin User',
      email: 'admin@example.com',
      password: hashedPassword,
      role: 'superadmin',
      createdAt: new Date()
    });

    console.log('✅ Admin created successfully!');
    console.log('📧 Email: admin@example.com');
    console.log('🔑 Password: admin123456');
    console.log('👤 Role: superadmin');

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

createFirstAdmin();
