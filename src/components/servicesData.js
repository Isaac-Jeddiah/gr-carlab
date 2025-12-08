const servicesData = [
        
              {
                slug: 'exterior-interior-detailing',
                title: 'Exterior and Interior Detailing',
                short: 'Complete deep clean, deodorise and restore.',
                description:
                  'Our comprehensive detailing restores both interior and exterior to showroom condition, removing contaminants, stains and odours while protecting surfaces.',
                images: ['/src/assets/car-hero.jpg'],
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
                  { label: 'Standard',  },
                  { label: 'Premium',  },
                  { label: 'Deluxe',  }
                ]
              },
              {
                slug: 'washing-deep-cleaning',
                title: 'Washing and Deep Cleaning',
                short: 'Multi stage foam and pressure wash with underbody cleaning.',
                description:
                  'A multi-stage exterior wash process including underbody cleaning to remove road grime, salt and deposits safely.',
                images: ['/src/assets/car-hero.jpg'],
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
                  { label: 'Basic', },
                  { label: 'Deep Clean', },
                  { label: 'Complete', }
                ]
              },
              {
                slug: 'ceramic-coating',
                title: 'Ceramic Coating',
                short: 'Long lasting gloss and surface protection.',
                description:
                  'Professional-grade ceramic coatings that deliver long-lasting hydrophobic protection, UV resistance and superior gloss.',
                images: ['/src/assets/car-hero.jpg'],
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
                  { label: 'Single Layer', },
                  { label: 'Multi Layer',  }
                ]
              },
              {
                slug: 'paint-protection-film',
                title: 'Paint Protection Film (PPF)',
                short: 'High grade film to prevent chips and scratches.',
                description:
                  'High-quality PPF installation to protect vulnerable areas from chips, stone damage and harsh elements.',
                images: ['/src/assets/car-hero.jpg'],
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
                  { label: 'Partial Front',  },
                  { label: 'Full Front',  },
                  { label: 'Full Body', }
                ]
              },
              {
                slug: 'paint-correction-polishing',
                title: 'Paint Correction and Polishing',
                short: 'Remove swirl marks, scratches and restore finish.',
                description:
                  'Multi-stage paint correction and polishing to remove defects and restore depth, clarity and gloss to your paintwork.',
                images: ['/src/assets/car-hero.jpg'],
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
                  { label: 'Single Stage',  },
                  { label: 'Two Stage',  },
                  { label: 'Full Correction',  }
                ]
              },
              {
                slug: 'headlight-restoration',
                title: 'Headlight Restoration',
                short: 'Clear, safe lighting restored to like new.',
                description:
                  'Restore headlight clarity and performance using sanding, polishing and protective sealing.',
                images: ['/src/assets/car-hero.jpg'],
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
                  { label: 'Single',  },
                  { label: 'Pair', }
                ]
              },
              {
                slug: 'engine-bay-detailing',
                title: 'Engine Bay Detailing',
                short: 'Safe cleaning and dressing for the engine compartment.',
                description:
                  'Careful degreasing and dressing to improve appearance and make inspections easier while protecting electronics.',
                images: ['/src/assets/car-hero.jpg'],
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
                  { label: 'Basic', },
                  { label: 'Premium', }
                ]
              },
              {
                slug: 'scratch-water-spot-removal',
                title: 'Scratch and Water Spot Removal',
                short: 'Effective cosmetic repairs for visible blemishes.',
                description:
                  "Targeted paint correction and treatment to remove water spots, light scratches and blemishes.",
                images: ['/src/assets/car-hero.jpg'],
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
                  { label: 'Spot',   },
                  { label: 'Panel',   },
                  { label: 'Full',   }
                ]
              },
              
            ];

            export default servicesData;

