const servicesData = [
  {
    slug: 'exterior-interior-detailing',
    title: 'Exterior and Interior Detailing',
    short: 'Complete deep clean, deodorise and restore.',
    description:
      'Our comprehensive detailing restores both interior and exterior to showroom condition, removing contaminants, stains and odours while protecting surfaces.',
    images: [
      'https://pplx-res.cloudinary.com/image/upload/v1764217945/search_images/aa1e97edd2632ccf95e390b2c59052e4aef0cc6a.jpg', // Before/after detailing
      'https://pplx-res.cloudinary.com/image/upload/v1763323965/search_images/2ec30ffc67af01b713024cdd52bdd0d3e495c835.jpg', // Interior detailing before/after
      'https://pplx-res.cloudinary.com/image/upload/v1765324534/search_images/789d8161f4049008430d040e54cb84c32db6a782.jpg', // Interior detailing packages
      'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=800', // Professional detailing
      'https://images.unsplash.com/photo-1625231724319-f1d0e9c69b41?w=800'  // Car interior cleaning
    ],
    details: ['Deep interior shampoo & steam', 'Multi-stage exterior decontamination', 'Fabric & leather protection'],
    benefits: ['Complete deep clean', 'Odour removal', 'Surface protection', 'Showroom finish'],
    processSteps: [
      { title: 'Pre-Wash Inspection', desc: 'Document condition and note areas of concern.' },
      { title: 'Deep Interior Clean', desc: 'Vacuum, steam, shampoo and sanitize upholstery and carpets.' },
      { title: 'Exterior Decontamination', desc: 'Foam wash, clay decon and wheel clean.' },
      { title: 'Paint Enhancement', desc: 'Light polish and protectant application.' },
      { title: 'Final Dry & Detail', desc: 'Hand-dry, trim care and glass polish.' },
      { title: 'Quality Handover', desc: 'Customer walkthrough and post-service advice.' }
    ],
    pricing: [
      { label: 'Standard' },
      { label: 'Premium' },
      { label: 'Deluxe' }
    ]
  },
  {
    slug: 'washing-deep-cleaning',
    title: 'Washing and Deep Cleaning',
    short: 'Multi stage foam and pressure wash with underbody cleaning.',
    description:
      'A multi-stage exterior wash process including underbody cleaning to remove road grime, salt and deposits safely.',
    images: [
      'https://pplx-res.cloudinary.com/image/upload/v1765324534/search_images/0dbd615e1ab7717ccfdf95eb428fa97937c45c92.jpg', // Pressure washing underbody
      'https://pplx-res.cloudinary.com/image/upload/v1765324534/search_images/88087522f3f72ef0d78889e01150151be83681e7.jpg', // Underbody cleaning
      'https://pplx-res.cloudinary.com/image/upload/v1764182329/search_images/b211273eb039cf3c3624289b4ab03d595f99eccb.jpg', // Foam pressure washer
      'https://images.unsplash.com/photo-1601584942197-04bbb2b881c7?w=800', // Car wash in progress
      'https://images.unsplash.com/photo-1533697329587-6e5efc997835?w=800'  // Professional car washing
    ],
    details: ['Multi-stage foam', 'High-pressure rinse', 'Underbody clean'],
    benefits: ['Removes road grime', 'Prevents corrosion', 'Safe on paint', 'Improved appearance'],
    processSteps: [
      { title: 'Pre-Rinse & Inspection', desc: 'Remove loose dirt and inspect for sensitive areas.' },
      { title: 'Foam Application', desc: 'High-foaming formula to lift contaminants.' },
      { title: 'High-Pressure Rinse', desc: 'Thorough rinse including underbody.' },
      { title: 'Hand Wash & Decontaminate', desc: 'Two-bucket wash and clay where required.' },
      { title: 'Dry & Detail', desc: 'Spot-free rinse and hand-dry.' },
      { title: 'Final Check', desc: 'Inspect and advise on further protection.' }
    ],
    pricing: [
      { label: 'Basic' },
      { label: 'Deep Clean' },
      { label: 'Complete' }
    ]
  },
  {
    slug: 'ceramic-coating',
    title: 'Ceramic Coating',
    short: 'Long lasting gloss and surface protection.',
    description:
      'Professional-grade ceramic coatings that deliver long-lasting hydrophobic protection, UV resistance and superior gloss.',
    images: [
      'https://pplx-res.cloudinary.com/image/upload/v1763319101/search_images/8c66270b6ac6f6a35d47adc03fa3b67e0bc3c892.jpg', // Ceramic coating application
      'https://pplx-res.cloudinary.com/image/upload/v1763049088/search_images/023a2c0dae63f49246a9ef550ed73dffa979558b.jpg', // Ceramic coating process
      'https://pplx-res.cloudinary.com/image/upload/v1763323949/search_images/6ad2b79cbb9e205791380cdc1ef9c393f5e1559d.jpg', // Applying ceramic coating
      'https://images.unsplash.com/photo-1611525891917-209c12191a56?w=800', // Car with ceramic coating shine
      'https://images.unsplash.com/photo-1581517521776-cd282a3df6f9?w=800'  // Professional ceramic application
    ],
    details: ['Paint prep & decon', 'Professional coating application', 'Cure & inspection'],
    benefits: ['Durable gloss', 'Hydrophobic', 'UV protection', 'Easier maintenance'],
    processSteps: [
      { title: 'Paint Correction Prep', desc: 'Decontaminate and correct paint where needed.' },
      { title: 'Surface Prep', desc: 'Final wipe and primer for coating.' },
      { title: 'Coating Application', desc: 'Apply ceramic layers in controlled conditions.' },
      { title: 'Cure & Inspect', desc: 'Allow coating to bond and final quality check.' },
      { title: 'Aftercare Advice', desc: 'Provide maintenance guidelines for longevity.' },
      { title: 'Warranty Registration', desc: 'Register the service if applicable.' }
    ],
    pricing: [
      { label: 'Single Layer' },
      { label: 'Multi Layer' }
    ]
  },
  {
    slug: 'paint-protection-film',
    title: 'Paint Protection Film (PPF)',
    short: 'High grade film to prevent chips and scratches.',
    description:
      'High-quality PPF installation to protect vulnerable areas from chips, stone damage and harsh elements.',
    images: [
      'https://pplx-res.cloudinary.com/image/upload/v1765324534/search_images/95d97e9ef59a92d63e7f173283341f7d09c1641b.jpg', // PPF installation
      'https://pplx-res.cloudinary.com/image/upload/v1765324534/search_images/323a7a971d7e1faf112341b432d1269bbae6f6a0.jpg', // PPF on car
      'https://pplx-res.cloudinary.com/image/upload/v1765324534/search_images/6da64c1b9084d1cee35bf3ec2a23ccf676ec59b4.jpg', // PPF step-by-step
      'https://images.unsplash.com/photo-1598838031367-bf06147640eb?w=800', // Paint protection film
      'https://images.unsplash.com/photo-1559416523-cd4628902d4a?w=800'  // Car front protection
    ],
    details: ['Precision cut film', 'Self-healing topcoat', 'Invisible protection'],
    benefits: ['Chip resistance', 'Preserves paint', 'Self-healing', 'Long term value'],
    processSteps: [
      { title: 'Area Assessment', desc: 'Identify vulnerable zones and plan coverage.' },
      { title: 'Surface Prep', desc: 'Thorough decontamination and priming.' },
      { title: 'Precision Application', desc: 'Apply film with exact trimming and sealing.' },
      { title: 'Edge Sealing', desc: 'Ensure long term adhesion and finish.' },
      { title: 'Cure & Inspect', desc: 'Allow adhesive to set and final QA.' },
      { title: 'Customer Walkthrough', desc: 'Explain care and warranty.' }
    ],
    pricing: [
      { label: 'Partial Front' },
      { label: 'Full Front' },
      { label: 'Full Body' }
    ]
  },
  {
    slug: 'paint-correction-polishing',
    title: 'Paint Correction and Polishing',
    short: 'Remove swirl marks, scratches and restore finish.',
    description:
      'Multi-stage paint correction and polishing to remove defects and restore depth, clarity and gloss to your paintwork.',
    images: [
      'https://pplx-res.cloudinary.com/image/upload/v1765324534/search_images/c93dc1e59d6222a524ef632bb4d51d60694add5e.jpg', // Swirl marks correction
      'https://pplx-res.cloudinary.com/image/upload/v1765324534/search_images/a7c8bf5f8a5c3b31d3dbe6bc8b4501a4cf68cdd4.jpg', // Paint correction before/after
      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800', // Car polishing
    ],
    details: ['Swirl removal', 'Scratch correction', 'Polish & finish'],
    benefits: ['Removes defects', 'Restores gloss', 'Prepares for protection', 'Improves resale value'],
    processSteps: [
      { title: 'Paint Assessment', desc: 'Determine defect levels and plan correction.' },
      { title: 'Decontamination', desc: 'Remove bonded contaminants and iron.' },
      { title: 'Compounding', desc: 'Cut through defects with controlled abrasives.' },
      { title: 'Refinement Polishing', desc: 'Remove holograms and finish to gloss.' },
      { title: 'Protection', desc: 'Seal with wax, sealant or coating.' },
      { title: 'Final QA', desc: 'Inspect under multiple lights and sign off.' }
    ],
    pricing: [
      { label: 'Single Stage' },
      { label: 'Two Stage' },
      { label: 'Full Correction' }
    ]
  },
  {
    slug: 'headlight-restoration',
    title: 'Headlight Restoration',
    short: 'Clear, safe lighting restored to like new.',
    description:
      'Restore headlight clarity and performance using sanding, polishing and protective sealing.',
    images: [
      'https://pplx-res.cloudinary.com/image/upload/v1765324534/search_images/90c452ed4092aae7a8cace4466ec0452daaa5329.jpg', // Headlight restoration
      'https://pplx-res.cloudinary.com/image/upload/v1765324534/search_images/f32f50e0c4579240d79d97139b1a20cf0dbe17fd.jpg', // Headlight oxidation removal
      'https://pplx-res.cloudinary.com/image/upload/v1765324534/search_images/735f39678a120e7cdedf83b4b5415d697bdba849.jpg', // Headlight restoration kit
      'https://images.unsplash.com/photo-1609708536965-e589ffdc529d?w=800', // Car headlights
      'https://images.unsplash.com/photo-1581707814660-ef0d14a67ba7?w=800'  // Restored headlights
    ],
    details: ['Oxidation removal', 'Polish & clarity', 'Protective sealant'],
    benefits: ['Improves visibility', 'Cost effective vs replacement', 'Long lasting clarity'],
    processSteps: [
      { title: 'Assessment', desc: 'Check lens condition and damage level.' },
      { title: 'Mask & Prep', desc: 'Protect surrounding paintwork.' },
      { title: 'Sanding & Polish', desc: 'Remove oxidation and restore clarity.' },
      { title: 'Seal & Protect', desc: 'Apply UV protective clear coat.' },
      { title: 'Test', desc: 'Verify beam pattern and output.' },
      { title: 'Finish', desc: 'Final polish and handover.' }
    ],
    pricing: [
      { label: 'Single' },
      { label: 'Pair' }
    ]
  },
  {
    slug: 'engine-bay-detailing',
    title: 'Engine Bay Detailing',
    short: 'Safe cleaning and dressing for the engine compartment.',
    description:
      'Careful degreasing and dressing to improve appearance and make inspections easier while protecting electronics.',
    images: [
      'https://pplx-res.cloudinary.com/image/upload/v1765324534/search_images/332fedfbf57c169aeb3bb32092212bdb8b9b4751.jpg', // Engine bay cleaning guide
      'https://pplx-res.cloudinary.com/image/upload/v1765324534/search_images/15', // Engine bay detailing
      'https://pplx-res.cloudinary.com/image/upload/v1765324534/search_images/e9a4bf6dba9c746dcf2660f3f0a7a35e379791a0.jpg', // Engine bay cleaning
      'https://images.unsplash.com/photo-1487754180144-c332a6674e4d?w=800', // Clean engine
      'https://images.unsplash.com/photo-1530092613688-c1e4dac69529?w=800'  // Engine compartment
    ],
    details: ['Safe degrease', 'Component protection', 'Trim dressing'],
    benefits: ['Cleaner engine bay', 'Easier inspection', 'Protects components'],
    processSteps: [
      { title: 'Mask Sensitive Areas', desc: 'Cover electronics and air intakes.' },
      { title: 'Degrease', desc: 'Apply engine-safe degreaser and agitation.' },
      { title: 'Rinse & Dry', desc: 'Low-pressure rinse and dry.' },
      { title: 'Dress Components', desc: 'Apply protectants to hoses and plastics.' },
      { title: 'Inspect', desc: 'Check for leaks and secure fittings.' },
      { title: 'Handover', desc: 'Customer walkthrough and care tips.' }
    ],
    pricing: [
      { label: 'Basic' },
      { label: 'Premium' }
    ]
  },
  {
    slug: 'scratch-water-spot-removal',
    title: 'Scratch and Water Spot Removal',
    short: 'Effective cosmetic repairs for visible blemishes.',
    description:
      "Targeted paint correction and treatment to remove water spots, light scratches and blemishes.",
    images: [
     'https://pplx-res.cloudinary.com/image/upload/v1765324534/search_images/cf7aea586fa3032e3edffbcd78af48ce1a75827b.jpg', // Scratch repair cloth
      'https://pplx-res.cloudinary.com/image/upload/v1765324534/search_images/e40eddf09cbb09a342307e9156886474eff79300.jpg', // Water spot removal
      'https://images.unsplash.com/photo-1617469780689-f1b27b6b4f37?w=800', // Car scratch repair
      'https://images.unsplash.com/photo-1615818454272-1b9e73f0df60?w=800'  // Paint correction detail
    ],
    details: ['Spot assessment', 'Polish & finish', 'Protective sealant'],
    benefits: ['Removes blemishes', 'Restores paint finish', 'Cost effective'],
    processSteps: [
      { title: 'Inspection', desc: 'Assess depth and type of blemish.' },
      { title: 'Clean & Prep', desc: 'Prepare surface for correction.' },
      { title: 'Polish Treatment', desc: 'Remove marks with controlled polishing.' },
      { title: 'Refine', desc: 'Fine polish and restore gloss.' },
      { title: 'Protect', desc: 'Apply sealant to prevent recurrence.' },
      { title: 'Final Check', desc: 'Customer review and sign-off.' }
    ],
    pricing: [
      { label: 'Spot' },
      { label: 'Panel' },
      { label: 'Full' }
    ]
  }
];

export default servicesData;
