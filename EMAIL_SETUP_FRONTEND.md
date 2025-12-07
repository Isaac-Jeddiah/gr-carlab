# Email Setup Guide - Frontend Only (EmailJS)

This project uses **EmailJS** for frontend-only email sending. No backend server is required!

## Quick Start

### 1. Create EmailJS Account

1. Visit [emailjs.com](https://www.emailjs.com)
2. Click "Sign Up Free"
3. Create an account with email/password
4. Verify your email

### 2. Create Email Service

1. From dashboard, click **"Add Service"**
2. Choose **"Gmail"** (or your preferred email provider)
3. Name it: `service_grcarlab`
4. Click **"Connect Account"**
5. Sign in with your Gmail account
6. Grant permissions
7. Click **"Create Service"**
8. **Copy your Service ID** - you'll need this

### 3. Create Email Template

1. Click **"Email Templates"** in sidebar
2. Click **"Create New Template"**
3. Name it: `template_grcarlab`
4. Set **"To Email"**: `{{to_email}}`
5. Set **"From Name"**: `{{from_name}}`
6. Set **"Subject"**: `New Contact Form Submission from {{user_name}}`
7. In **Email Content**, paste:

```
Hello Admin,

You have received a new contact form submission:

Name: {{user_name}}
Email: {{user_email}}
Phone: {{user_phone}}

Message:
--------
{{user_message}}

---
Sent from GR CAR LAB Website
Please reply to: {{reply_to}}
```

8. Click **"Save"**
9. **Copy your Template ID** - you'll need this

### 4. Get Your Public Key

1. Click **"Account"** in sidebar (top right)
2. Select **"API Keys"** tab
3. **Copy your Public Key** - keep this safe

### 5. Configure `.env` File

Create or update `.env` in project root:

```env
VITE_REACT_APP_EMAILJS_SERVICE_ID=service_grcarlab
VITE_REACT_APP_EMAILJS_TEMPLATE_ID=template_grcarlab
VITE_REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace:
- `service_grcarlab` with your Service ID (from step 2)
- `template_grcarlab` with your Template ID (from step 3)
- `your_public_key_here` with your Public Key (from step 4)

### 6. Install Dependencies

```bash
npm install
```

This installs `@emailjs/browser` which is required.

### 7. Test Email

1. Run: `npm run dev`
2. Navigate to Contact page
3. Fill out the form with test data
4. Click "Send Message"
5. You should receive an email within seconds
6. Check your spam folder if not found

## How It Works

- **Frontend-Only**: Runs completely in the browser
- **No Backend Server**: No Node.js/Express needed
- **Secure**: Your email credentials are NOT exposed (EmailJS handles this)
- **Free Tier**: 200 emails/month free
- **Fast**: Instant email delivery

## Troubleshooting

### Email not sending

1. **Check Console Errors**
   - Open DevTools (F12)
   - Look for red error messages
   - Common: "Service ID invalid" or "Public Key invalid"

2. **Verify `.env` Variables**
   ```bash
   # These should NOT be empty:
   VITE_REACT_APP_EMAILJS_SERVICE_ID
   VITE_REACT_APP_EMAILJS_TEMPLATE_ID
   VITE_REACT_APP_EMAILJS_PUBLIC_KEY
   ```

3. **Check EmailJS Status**
   - Go to [emailjs.com/status](https://status.emailjs.com)
   - Verify service is operational

4. **Common Issues**
   - **"Throttle limit"**: Wait 50ms between requests
   - **"Invalid credentials"**: Double-check all 3 `.env` values
   - **"Gmail blocked email"**: Check Gmail security settings

### Emails going to spam

1. Verify sender email in Gmail
2. Add your domain to Gmail's authorized senders
3. Check EmailJS DKIM/SPF settings

### Can't find keys in EmailJS

1. Make sure you're logged in
2. Dashboard → Account → API Keys
3. Different tabs for different keys

## Limits

- **Free Tier**: 200 emails/month
- **Paid Tier**: Unlimited emails (starts at $5/month)
- **Rate Limit**: Max 1 email per 50ms per IP

## Production Deployment

When deploying to production:

1. **Update `.env` in production environment**
   - Don't commit `.env` to Git
   - Set variables in hosting platform (Vercel, Netlify, etc.)

2. **EmailJS Security**
   - Public Key is intentionally public (it's in browser code)
   - Private Key should NEVER be exposed
   - EmailJS handles all security server-side

3. **Upgrade Plan if Needed**
   - Free: 200/month
   - Pro: Unlimited emails ($5/month)

## Alternative Email Services

If you prefer other solutions:

- **SendGrid**: Better for production
- **MailChimp**: Good for marketing emails
- **Firebase**: Built-in email sending
- **Backend Solution**: Custom Node.js/Express server

Contact developer for custom setup.

## Support

- EmailJS Docs: https://www.emailjs.com/docs
- Status Page: https://status.emailjs.com
- Support: contact@emailjs.com
