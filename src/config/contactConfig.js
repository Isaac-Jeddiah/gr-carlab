// Global contact configuration for GR CAR LAB
// Edit these values to update contact details across all pages

export const contactConfig = {
  // Email
  email: "yourmail@gmail.com",

  // Phone numbers (array for multiple numbers)
  phones: [
    "+91 123456789", // Primary phone
    // Add more phones as needed
  ],

  // Address
  address: "123 Clean Street, Auto District, Your City, State 12345",

  // Location coordinates for Google Maps
  coordinates: {
    lat: 13.057486053838888,
    lng: 79.72490962887022,
  },

  // Social media links
  socialLinks: {
    instagram: "https://instagram.com/grcarlab",
    facebook: "https://facebook.com/grcarlab",
  },
};

// Helper functions
export const getPrimaryPhone = () => contactConfig.phones[0] || "";

export const getAllPhones = () => contactConfig.phones;

export const getGoogleMapsUrl = () => {
  const { lat, lng } = contactConfig.coordinates;
  return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.8!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAzJzI2LjkiTiA3OcKwNDMnMjkuNyJF!5e0!3m2!1sen!2sin!4v1234567890`;
};

export const getMailtoLink = (subject = "", body = "") => {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  return `mailto:${contactConfig.email}?subject=${encodedSubject}&body=${encodedBody}`;
};
