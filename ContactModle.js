const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
  },
  phone: {
    type: String,
    required: true, // אם מספר טלפון חובה, אחרת ניתן להסיר שורה זו
    trim: true
  },
  message: { 
    type: String,  
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('Contact', ContactSchema);