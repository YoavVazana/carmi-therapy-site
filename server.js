const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();
const Contact = require('./ContactModle'); // המודל שיצרת

const app = express();
const PORT = 5000;

// Middlewares
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000', // כתובת הפרונטאנד
  methods: ['POST'],
  allowedHeaders: ['Content-Type']
}));

// לוגים על מצב החיבור ל-MongoDB
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB!');
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB.');
});

// חיבור ל-MongoDB
async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 50000, // הגדל זמן המתנה
      socketTimeoutMS: 45000,
      connectTimeoutMS: 30000
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // יציאה מהתהליך אם החיבור נכשל
  }
}

connectToMongoDB();

// מסלול שמירת פרטים ושליחת אימייל
app.post('/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // בדיקת שדות חובה
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'כל השדות נדרשים' });
    }

    // ולידציה לנתונים
    if (!name.trim()) {
      return res.status(400).json({ error: 'שם לא תקין' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return res.status(400).json({ error: 'כתובת אימייל לא תקינה' });
    }
    if (!phone || !/^\d{9,10}$/.test(phone.trim())) {
      return res.status(400).json({ error: 'מספר טלפון לא חוקי או חסר' });
    }
    if (!message.trim()) {
      return res.status(400).json({ error: 'הודעה ריקה' });
    }

    // שמירת נתונים ב-MongoDB
    const contact = new Contact({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message: message.trim()
    });

    await contact.save();
    console.log('Contact saved successfully:', contact);

    // שליחת אימייל
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // הגדר במשתני סביבה או ספק ברירת מחדל
        pass: process.env.EMAIL_PASS, // הגדר במשתני סביבה או ספק ברירת מחדל
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email.trim(),
      subject: 'תודה שפניתם אלינו!',
      html: `
        <div style="direction: rtl; text-align: right; font-family: Arial, sans-serif;">
          <p>שלום ${name.trim()},</p>
          <p>תודה שפנית אלינו. קיבלנו את ההודעה שלך וניצור קשר בקרוב.</p>
        </div>
      `,
    };
    
    // שליחת מייל למנהל המערכת
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // המייל שלך
      subject: 'פנייה חדשה התקבלה!',
      html: `
        <div style="direction: rtl; text-align: right; font-family: Arial, sans-serif;">
          <p>פרטי הפנייה:</p>
          <p><strong>שם:</strong> ${name.trim()}</p>
          <p><strong>אימייל:</strong> ${email.trim()}</p>
          <p><strong>טלפון:</strong> ${phone.trim()}</p>
          <p><strong>הודעה:</strong> ${message.trim()}</p>
        </div>
      `,
    };
    

    // שליחת מייל למנהל
    console.log('Preparing to send email to admin...');
    await transporter.sendMail(adminMailOptions);
    console.log('Email sent to admin successfully.');
      // שליחת מייל ללקוח
    await transporter.sendMail(mailOptions);
    console.log('Email sent to client successfully:', email);
    
    res.status(200).json({ 
      message: 'Contact saved and email sent successfully!',
      details: { name, email }
    });
  } catch (err) {
    console.error('Error processing contact request:', err);
    res.status(500).json({ 
      error: 'An error occurred while processing your request.', 
      details: err.message 
    });
  }
});

// טיפול בנתיבי שגיאה (Error Handling Middleware)
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Something went wrong', details: err.message });
});

// הפעלת השרת
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
