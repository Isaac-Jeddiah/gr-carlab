/**
 * Email Service for sending contact form inquiries
 * Frontend-only using EmailJS service (no backend required)
 */

import emailjs from '@emailjs/browser';

// Initialize EmailJS
const SERVICE_ID = import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY;

// Initialize on first load
emailjs.init({
  publicKey: PUBLIC_KEY,
  blockHeadless: true,
  limitRate: {
    id: 'app',
    throttle: 50, // milliseconds
  },
});

export const sendEmail = async (formData) => {
  try {
    // Validate configuration
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || PUBLIC_KEY === 'your_emailjs_public_key_here') {
      console.warn('EmailJS not configured. Please set up .env variables.');
      return {
        success: false,
        message: 'Email service not configured. Please contact us through phone or address instead.',
        isDemoMode: false
      };
    }

    // Send email through EmailJS
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      to_email: formData.email,
      from_name: 'GR CAR LAB',
      user_name: `${formData.firstName} ${formData.lastName}`,
      user_email: formData.email,
      user_phone: formData.phone,
      user_message: formData.message,
      reply_to: formData.email,
    });

    if (response.status === 200) {
      return {
        success: true,
        message: 'Thank you! Your message has been sent successfully. We will get back to you soon.',
        isDemoMode: false
      };
    }

    throw new Error('Failed to send email');
  } catch (error) {
    console.error('Email service error:', error);

    return {
      success: false,
      message: 'Failed to send email. Please try again or contact us directly at (123) 456-7890.',
      error: error
    };
  }
};

/**
 * Validate form data before sending
 */
export const validateFormData = (formData) => {
  const errors = {};

  if (!formData.firstName?.trim()) {
    errors.firstName = 'First name is required';
  }

  if (!formData.lastName?.trim()) {
    errors.lastName = 'Last name is required';
  }

  if (!formData.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!formData.phone?.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!/^[\d\s\-\+\(\)]{7,}$/.test(formData.phone)) {
    errors.phone = 'Please enter a valid phone number (at least 7 digits)';
  }

  if (!formData.message?.trim()) {
    errors.message = 'Message is required';
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }

  return errors;
};

/**
 * Format form data for email template
 */
export const formatEmailContent = (formData) => {
  return `
Contact Form Submission
========================

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Submitted: ${new Date().toLocaleString()}

Message:
--------
${formData.message}

---
This is an automated email from GR CAR LAB contact form.
`;
};
