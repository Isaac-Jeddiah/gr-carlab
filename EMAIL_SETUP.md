# GR CAR LAB Email Setup Guide

## Overview
The application now includes email sending functionality for the contact form. Here's how to set it up:

## Quick Start

### 1. Frontend Setup (Already Done)
- `src/services/emailService.js` - Email service with validation
- `src/components/Contact.jsx` - Contact form with email integration
- `src/components/ContactPage.jsx` - Contact page with email integration
- `.env` - Environment variables file

### 2. Backend Email Server Setup

#### Step 1: Create server directory and files
```bash
cd e:\nov-dec\gr-car-lab
# The email-server.js file is already created
```

#### Step 2: Install Dependencies
```bash
# Install Node.js packages
npm install express cors dotenv nodemailer
```

#### Step 3: Create .env file for backend
Create a file named `.env` in the project root with:
```env
# Gmail Configuration
GMAIL_USER=your-email@gmail.com
GMAIL_PASSWORD=your-app-specific-password

# Admin Configuration
ADMIN_EMAIL=admin@grcarlab.com

# Server Configuration
PORT=3001
```

#### Step 4: Get Gmail App Password
1. Go to https://myaccount.google.com/security
2. Enable "2-Step Verification" (if not already enabled)
   - Use your phone number to verify
3. Go to "App Passwords" (appears after 2FA is on)
4. Select "Mail" and "Windows Computer" (or custom)
5. Copy the 16-character password
6. Use this password as `GMAIL_PASSWORD` in .env

**Important:** Never use your regular Gmail password. Always use the App-Specific Password for security.

#### Step 5: Run the Email Server
```bash
# In the project root directory
node email-server.js
```

You should see:
```
Email server running on http://localhost:3001
Endpoints:
  POST /api/send-email - Send contact form email
  GET /api/health - Health check
Gmail service ready
```

#### Step 6: Run the Vite Development Server
In another terminal:
```bash
npm run dev
```

## How It Works

### Frontend Flow
1. User fills out contact form
2. Form data is validated using `validateFormData()` from `emailService.js`
3. On submit, `sendEmail()` is called
4. Loading animation shows while email is being sent
5. Success/error message is displayed
6. User receives confirmation email

### Backend Flow
1. Express server receives POST request to `/api/send-email`
2. Email is validated:
   - All required fields checked
   - Email format validated
   - Rate limiting applied (5 emails per hour per email address)
3. Two emails are sent:
   - **Admin Email**: Contains customer details and message
   - **User Email**: Confirmation email with reference timestamp
4. Response sent back to frontend

## Error Handling

### Frontend Errors
- **Validation Errors**: Form field-specific error messages
- **Network Errors**: Graceful fallback (demo mode)
- **Server Errors**: Generic error message with retry option

### Backend Rate Limiting
- Maximum 5 emails per hour from same email address
- Response: 429 (Too Many Requests)

### Validation Rules
- **Name fields**: Required, non-empty
- **Email**: Required, must be valid format (user@example.com)
- **Phone**: Required, minimum 7 digits
- **Message**: Required, minimum 10 characters

## Testing

### Test 1: Successful Submission
1. Fill all fields correctly
2. Click "Send Message"
3. Should see success animation (car driving)
4. Success message displays
5. Check your admin email for submission

### Test 2: Validation Errors
1. Leave any field empty
2. Click "Send Message"
3. Should see field-specific error messages
4. Form shakes to indicate error

### Test 3: Demo Mode (No Server)
1. If email server is not running
2. Submit form with valid data
3. Shows success message anyway
4. Graceful fallback for development

## Troubleshooting

### "Failed to connect to email server"
- Check if `node email-server.js` is running
- Verify `.env` file exists in root directory
- Check if port 3001 is not in use

### "Gmail connection error"
- Verify GMAIL_USER and GMAIL_PASSWORD are correct
- Check if 2-Step Verification is enabled on Gmail
- Make sure you're using App Password, not regular password
- Check Gmail security settings for "Less secure apps"

### "Emails not sending but no error"
- Check ADMIN_EMAIL is valid
- Check user's internet connection
- Check Gmail spam folder
- Verify rate limiting (max 5 per hour)

### "Rate limit exceeded"
- User reached 5 emails per hour limit
- Rate limit automatically resets after 1 hour
- Different email address can submit immediately

## Production Deployment

### Step 1: Choose Email Service
Options:
- **Gmail**: Current setup (limited to 500 emails/day)
- **SendGrid**: Professional service (recommended)
- **AWS SES**: Scalable solution
- **Mailgun**: Developer-friendly

### Step 2: Secure Credentials
- Store environment variables in platform's secret manager
- Never commit `.env` to git
- Use different credentials for production

### Step 3: Scale Email Server
```bash
npm install pm2 -g
pm2 start email-server.js
pm2 startup
pm2 save
```

### Step 4: Add Rate Limiting
For production, use Redis or database instead of in-memory storage

## Alternative: Firebase Functions
If you prefer serverless, use Firebase Cloud Functions instead of Node.js server:

```javascript
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

exports.sendContactEmail = functions.https.onRequest(async (req, res) => {
  // Similar logic as email-server.js
});
```

## Support
For issues or questions, check:
- Frontend console (F12) for client errors
- Server console for backend errors
- Gmail account settings for authentication issues

## Security Checklist
- ✅ Never commit `.env` file
- ✅ Use App Passwords instead of account password
- ✅ Validate all inputs on backend
- ✅ Implement rate limiting
- ✅ Use HTTPS in production
- ✅ Sanitize user inputs to prevent injection
- ✅ Monitor email sending for abuse
