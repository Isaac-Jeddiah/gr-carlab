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
