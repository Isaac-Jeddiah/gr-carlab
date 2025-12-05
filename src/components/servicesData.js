const servicesData = [
  {
    slug: 'premium-washing',
    title: 'Premium Washing & Cleaning',
    short: 'Comprehensive exterior wash, gentle decontamination and hand-dry finish.',
    images: [
      '/src/assets/car-hero.jpg'
    ],
    pricing: [
      { label: 'Small Cars', price: '₹499' },
      { label: 'Sedans', price: '₹699' },
      { label: 'SUVs', price: '₹899' }
    ],
    benefits: ['Foam pre-wash', 'Wheel clean', 'Safe hand wash', 'Spot-free Rinse'],
    processSteps: [
      { title: 'Pre-Rinse', desc: 'Loosen dirt and road grime with pressure rinse.' },
      { title: 'Foam & Wash', desc: 'pH-balanced foam and two-bucket hand wash.' },
      { title: 'Decontaminate', desc: 'Clay or iron removal where needed.' },
      { title: 'Dry & Finish', desc: 'Soft microfiber dry and protectant.' }
    ]
  },
  {
    slug: 'interior-detailing',
    title: 'Interior Detailing',
    short: 'Deep clean seats, carpets, dashboard and vents with sanitization.',
    images: ['/src/assets/car-hero.jpg'],
    pricing: [
      { label: 'Compact', price: '₹999' },
      { label: 'Sedan', price: '₹1299' },
      { label: 'SUV', price: '₹1599' }
    ],
    benefits: ['Vacuum & Shampoo', 'Leather treatment', 'Odour removal', 'Dash care'],
    processSteps: [
      { title: 'Vacuum', desc: 'Thorough extraction of seats and carpets.' },
      { title: 'Steam & Shampoo', desc: 'Sanitize and deep-clean upholstery.' },
      { title: 'Condition', desc: 'Protect leather and plastics.' },
      { title: 'Final Check', desc: 'Quality inspection and scent finish.' }
    ]
  },
  {
    slug: 'ceramic-coating',
    title: 'Ceramic Coating',
    short: 'Long-lasting hydrophobic protection and deep gloss.',
    images: ['/src/assets/car-hero.jpg'],
    pricing: [
      { label: 'Standard', price: '₹8999' },
      { label: 'Advanced', price: '₹12999' }
    ],
    benefits: ['Durable Gloss', 'Hydrophobic', 'UV Protection', 'Easy Maintenance'],
    processSteps: [
      { title: 'Wash & Decon', desc: 'Complete paint prep with clay and IPA wipe.' },
      { title: 'Polish', desc: 'Paint correction for swirl-free finish.' },
      { title: 'Coating', desc: 'Apply ceramic coating in controlled environment.' },
      { title: 'Cure', desc: 'Cure time and final inspection.' }
    ]
  },
  {
    slug: 'ppf',
    title: 'Paint Protection Film (PPF)',
    short: 'Invisible protective film that guards against chips and scratches.',
    images: ['/src/assets/car-hero.jpg'],
    pricing: [
      { label: 'Partial Front', price: '₹14999' },
      { label: 'Full Front + Mirrors', price: '₹24999' }
    ],
    benefits: ['Impact protection', 'Self-healing', 'UV Resistant', 'Preserve resale'],
    processSteps: [
      { title: 'Measure & Plan', desc: 'Exact plotting for your model.' },
      { title: 'Prep', desc: 'Thorough paint prep before film application.' },
      { title: 'Application', desc: 'Precision-fit film application.' },
      { title: 'Trim & Seal', desc: 'Edge finishing and final check.' }
    ]
  },
  {
    slug: 'engine-detailing',
    title: 'Engine Detailing',
    short: 'Safe degrease and dressing to keep the engine bay spotless.',
    images: ['/src/assets/car-hero.jpg'],
    pricing: [
      { label: 'Standard', price: '₹799' },
      { label: 'Deep Clean', price: '₹1299' }
    ],
    benefits: ['Degrease', 'Safe brushing', 'Protectants', 'Inspection friendly'],
    processSteps: [
      { title: 'Cover Electronics', desc: 'Protect sensitive components.' },
      { title: 'Degrease', desc: 'Apply engine-safe degreaser and agitate.' },
      { title: 'Rinse & Dry', desc: 'Low-pressure rinse and dry.' },
      { title: 'Dress', desc: 'Apply protectant to hoses and plastics.' }
    ]
  },
  {
    slug: 'steam-cleaning',
    title: 'Steam Cleaning',
    short: 'High-temperature steam sanitization for interiors and hard-to-reach areas.',
    images: ['/src/assets/car-hero.jpg'],
    pricing: [
      { label: 'Seats Only', price: '₹599' },
      { label: 'Whole Car', price: '₹1299' }
    ],
    benefits: ['Sanitize', 'Removes stains', 'Eco-friendly', 'Safe on fabrics'],
    processSteps: [
      { title: 'Spot Test', desc: 'Test fabric compatibility.' },
      { title: 'Steam', desc: 'High-temp steam cleaning.' },
      { title: 'Extraction', desc: 'Remove loosened dirt and moisture.' },
      { title: 'Dry & Finish', desc: 'Quick dry and scent finish.' }
    ]
  }
];

export default servicesData;
