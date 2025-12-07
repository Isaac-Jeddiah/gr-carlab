# ⚡ 5-Minute EmailJS Setup Guide

## Step 1: Sign Up (1 min)
👉 Go to: https://www.emailjs.com
- Click "Sign Up Free"
- Verify email

## Step 2: Create Gmail Service (1 min)
1. Dashboard → "Add Service"
2. Choose "Gmail"
3. Name: `service_grcarlab`
4. Click "Connect Account" → Sign in with Gmail
5. **Copy Service ID** → Save it

## Step 3: Create Email Template (2 min)
1. "Email Templates" → "Create New Template"
2. Name: `template_grcarlab`
3. To Email: `{{to_email}}`
4. Subject: `New Contact from {{user_name}}`
5. Email Content:
   ```
   From: {{user_name}}
   Email: {{user_email}}
   Phone: {{user_phone}}
   
   Message:
   {{user_message}}
   ```
6. Click "Save"
7. **Copy Template ID** → Save it

## Step 4: Get Public Key (1 min)
1. Account (top right) → "API Keys"
2. **Copy Public Key** → Save it

## Step 5: Update `.env` (30 sec)
Open `.env` and update:
```env
VITE_REACT_APP_EMAILJS_SERVICE_ID=service_grcarlab
VITE_REACT_APP_EMAILJS_TEMPLATE_ID=template_grcarlab
VITE_REACT_APP_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY_HERE
```

Replace `YOUR_PUBLIC_KEY_HERE` with the key from Step 4.

## Step 6: Install & Run (1 min)
```bash
npm install
npm run dev
```

## ✅ Done! Test it:
1. Go to contact form
2. Fill it out
3. Click "Send Message"
4. Check your email inbox (or spam folder)

---

## 🆘 Troubleshooting

**Email not sending?**
- Check `.env` file (no typos?)
- Are all 3 values filled in?
- Refresh browser after changing `.env`

**"Invalid credentials" error?**
- Double-check values in `.env`
- Make sure you copied from the right place

**Email goes to spam?**
- It's normal for first emails
- Add to contacts to prevent future spam filtering

---

## 📚 More Help
- Full guide: `EMAIL_SETUP_FRONTEND.md`
- EmailJS docs: https://www.emailjs.com/docs
