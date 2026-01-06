// Global contact configuration for GR CAR LAB
// Edit these values to update contact details across all pages

export const contactConfig = {
  // Email
  email: "grcarlab@gmail.com",

  // Phone numbers (array for multiple numbers)
  phones: [
    "9008001225", "7353639033" // Primary phone
    // Add more phones as needed
  ],

  // Address
  address:"#153, 80 feet road,  3rd stage, R R Nagar, Dattagalli, Mysuru - 570025",

  // Location coordinates for Google Maps
  coordinates: {
    lat: 12.29177174805135,
    lng: 76.60325432798595
    
  },

  // Social media links
  socialLinks: {
    instagram: "https://instagram.com/grcarlab",
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
