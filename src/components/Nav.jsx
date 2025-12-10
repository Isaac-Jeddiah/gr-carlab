import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Search,
  ChevronDown,
  ChevronUp,
  List,
  SearchIcon,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const servicesRef = useRef(null);
  const menuRef = useRef(null);
  const searchRef = useRef(null);
  const searchPanelRef = useRef(null);
  const mobileServicesRef = useRef(null);
  const searchInputRef = useRef(null);
  {
    /*  const servicesData = [
        
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

*/
  }
  const services = [
    {
      id: 1,
      name: "Exterior and Interior Detailing",
      slug: "exterior-interior-detailing",
    },
    { id: 2, name: "Engine Bay Detailing", slug: "engine-bay-detailing" },
    { id: 3, name: "Washing and Deep Cleaning", slug: "washing-deep-cleaning" },
    { id: 4, name: "Headlight Restoration", slug: "headlight-restoration" },
    {
      id: 5,
      name: "Scratch and Water Spot Removal",
      slug: "scratch-water-spot-removal",
    },
    { id: 6, name: "Ceramic Coating", slug: "ceramic-coating" },
    {
      id: 7,
      name: "Paint Protection Film (PPF)",
      slug: "paint-protection-film",
    },
    {
      id: 8,
      name: "Paint Correction and Polishing",
      slug: "paint-correction-polishing",
    },
  ];

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  const products = [
    "Car Perfumes",
    "Air Fresheners",
    "7D Mats & ATM Mats",
    "Towing Cables",
    "Car Boot Mats",
    "Wind Shield Wipers",
    "Fog Lamps",
    "Head Light Lamps",
    "Rain Guard",
    "Android Steros, Woofers, Amplifiers",
    "Car Covers and Speakers",
    "Upmodular",
    "Door Guard",
    "Lights Led for Doors",
    "Head Rest and Back Rest",
    "Seat Belt Pads",
    "Dash Board Covers",
    "Dash Camera",
    "Tyre Inflator",
    "ARM REST",
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        searchPanelRef.current &&
        !searchPanelRef.current.contains(event.target)
      ) {
        setIsSearchOpen(false);
      }
      if (
        mobileServicesRef.current &&
        !mobileServicesRef.current.contains(event.target) &&
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const panel = searchPanelRef.current;
    if (!panel) return;
    gsap.killTweensOf(panel);

    if (isSearchOpen) {
      gsap.fromTo(
        panel,
        { y: -100, autoAlpha: 0, height: 0 },
        {
          y: -50,
          autoAlpha: 1,
          height: "auto",
          duration: 0.28,
          ease: "power2.out",
        }
      );
      gsap.to(panel, {
        y: 0,
        opacity: 0, // opacity instead of autoAlpha
        height: 0,
        pointerEvents: "none",
        duration: 0.2,
        ease: "power2.in",
      });
      if (searchInputRef.current)
        setTimeout(() => searchInputRef.current.focus(), 1);
    } else {
      gsap.to(panel, {
        y: 0,
        autoAlpha: 0,
        height: 0,
        duration: 0.2,
        ease: "power2.in",
      });
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const panel = mobileServicesRef.current;
    if (!panel) return;
    gsap.killTweensOf(panel);

    if (isServicesOpen && window.innerWidth < 1024) {
      gsap.fromTo(
        panel,
        { y: -8, autoAlpha: 0, height: 0 },
        {
          y: 0,
          autoAlpha: 1,
          height: "auto",
          duration: 0.28,
          ease: "power2.out",
        }
      );
    } else {
      gsap.to(panel, {
        y: -6,
        autoAlpha: 0,
        height: 0,
        duration: 0.18,
        ease: "power2.in",
      });
    }
  }, [isServicesOpen]);

  const navigate = useNavigate();

  const handleSearch = (item) => {
    setSearchQuery("");
    setIsSearchOpen(false);
    const anchor = document.querySelector(`/products`);
    if (anchor) anchor.scrollIntoView({ behavior: "smooth" });
  };

  const filteredProducts = products.filter(
    (product) =>
      searchQuery === "" ||
      product.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="NavBar-container relative z-20 px-2 xs:px-3 sm:px-4 md:px-8 lg:px-12 lg:-mt-10 -mt-5 pb-3 sm:pb-3 md:pb-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div
          className="NavBar-logo hover-scale cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="GR CAR LAB"
            className="h-32 xs:h-26 sm:h-38 md:h-20  lg:h-52 w-auto object-contain"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        <div className="hidden lg:flex items-center gap-3 md:gap-4 mr-2 md:mr-4">
          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => {
                setIsServicesOpen(!isServicesOpen);
                setIsMenuOpen(false);
                setIsSearchOpen(false);
              }}
              className="services-dropdown-button hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium focus:outline-none focus:border-white/40 transition-all hover:bg-white/15"
            >
              <span className="hidden md:inline">Services</span>
              {isServicesOpen ? (
                <ChevronUp className="w-3 sm:w-4 h-3 sm:h-4" />
              ) : (
                <ChevronDown className="w-3 sm:w-4 h-3 sm:h-4" />
              )}
            </button>

            {isServicesOpen && window.innerWidth >= 1024 && (
              <div className="dropdown-menu absolute top-full left-0 mt-2 w-56 sm:w-64 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl shadow-2xl overflow-hidden z-50 max-h-96 overflow-y-auto">
                <div className="py-2">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.slug}`}
                      onClick={() => setIsServicesOpen(false)}
                      className="dropdown-menu-item block px-3 sm:px-5 py-2 sm:py-3 text-white/80 hover:text-white hover:bg-white/5 transition-all text-xs sm:text-sm"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="relative" ref={searchRef}>
            <div className="search-bar-desktop hidden lg:flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl overflow-hidden transition-all">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => {
                  setIsSearchOpen(true);
                  setIsServicesOpen(false);
                  setIsMenuOpen(false);
                }}
                placeholder="Search..."
                className="bg-transparent text-white placeholder-white/50 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none w-32 sm:w-48"
              />
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="bg-white/10 z-100 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl hover:bg-white/15 hover:bg-white/20 px-2 sm:px-3 py-2 sm:py-2.5 transition-all"
                aria-label="Toggle search"
              >
                <Search className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
              </button>
            </div>

            {isSearchOpen && window.innerWidth >= 1024 && (
              <div className="dropdown-menu absolute top-full right-0 mt-2 w-56 sm:w-72 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl shadow-2xl overflow-hidden z-50 max-h-96 overflow-y-auto">
                <div className="p-2 sm:p-3 border-b border-white/10">
                  <p className="text-xs text-white/50 uppercase tracking-wider">
                    Products
                  </p>
                </div>
                <div className="py-2">
                  {filteredProducts.map((product, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        navigate(`/products`);
                        setIsSearchOpen(false);
                        handleSearch(product);
                      }}
                      className="dropdown-menu-item w-full text-left block px-3 sm:px-5 py-2 sm:py-3 transition-all text-xs sm:text-sm hover:bg-white/5"
                    >
                      {product}
                    </button>
                  ))}
                  {searchQuery && filteredProducts.length === 0 && (
                    <div className="px-3 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm">
                      No products found
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <button
          onClick={() => {
            setIsSearchOpen((prev) => !prev);
            setIsServicesOpen(false);
            setIsMenuOpen(false);
          }}
          className="lg:hidden p-2 w-9 h-9 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/10 transition-all hover-scale flex items-center justify-center"
          aria-label="Open search"
        >
          <Search className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
        </button>

        <div className="drawer-menu relative" ref={menuRef}>
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setIsServicesOpen(false);
              setIsSearchOpen(false);
            }}
            className="drawer-close-button p-2 w-9 h-9 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/10 transition-all hover-scale flex items-center justify-center"
            aria-label="Toggle menu"
            style={{
              WebkitTransition: "transform 0.3s ease-in-out",
              transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)",
            }}
          >
            {isMenuOpen ? (
              <X className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
            ) : (
              <Menu className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
            )}
          </button>

          {isMenuOpen && (
            <div className="drawer-content absolute top-full right-0 mt-2 w-48 sm:w-56 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl shadow-2xl overflow-hidden z-50">
              <div className="drawer-menu-items py-2">
                {menuItems.map((item, idx) =>
                  item.name === "Services" ? (
                    <Link
                      key={idx}
                      to="/services"
                      onClick={() => setIsMenuOpen(false)}
                      className="drawer-menu-link block px-3 sm:px-5 py-2 sm:py-3 text-white/80 hover:text-white hover:bg-white/5 transition-all text-xs sm:text-sm border-b border-white/5 last:border-0"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      key={idx}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="drawer-menu-link block px-3 sm:px-5 py-2 sm:py-3 text-white/80 hover:text-white hover:bg-white/5 transition-all text-xs sm:text-sm border-b border-white/5 last:border-0"
                    >
                      {item.name}
                    </a>
                  )
                )}
                {/* Services Section - Mobile Only */}
                <div className="hidden max-lg:block border-t border-white/10">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full px-3 sm:px-5 py-2 sm:py-3 text-white/80 hover:text-white hover:bg-white/5 transition-all text-xs sm:text-sm flex items-center justify-between"
                  >
                    <span>Services</span>
                    {isServicesOpen ? (
                      <ChevronUp className="w-3 h-3" />
                    ) : (
                      <ChevronDown className="w-3 h-3" />
                    )}
                  </button>
                  {isServicesOpen && (
                    <div className="bg-white/3 py-2">
                      {services.map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.slug}`}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsServicesOpen(false);
                          }}
                          className="drawer-service-link block px-5 sm:px-7 py-2 sm:py-2.5 text-white/70 hover:text-white hover:bg-white/5 transition-all text-xs sm:text-sm"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <div className="drawer-bottom px-3 sm:px-4 py-2 sm:py-3 border-t border-white/10 mt-1">
                  <button
                    onClick={() => {
                      navigate("/contact");
                      setIsMenuOpen(false);
                    }}
                    className="..."
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Search Panel (animated via GSAP) */}
        <div
          ref={searchPanelRef}
          className=" lg:hidden absolute right-2 top-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl shadow-2xl z-50 overflow-hidden"
          aria-hidden={!isSearchOpen}
        >
          <div className="py-2 px-2 sm:px-3 z-100 w-56 sm:w-72 overflow-hidden z-50 max-h-96 overflow-y-auto">
            <p className="text-xs text-white/50 uppercase mb-2">
              Search Products 
            </p>
            <div className="flex items-center gap-2 bg-black/30 rounded-lg px-3 py-2 mb-2">
              <input
                ref={searchInputRef}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type product..."
                className="flex-1 bg-transparent text-white placeholder-white/50 text-xs sm:text-sm focus:outline-none"
              />
              <X
                onClick={() => setSearchQuery("")}
                className="w-3 h-3 text-white/50 cursor-pointer"
              />
            </div>
            <div className="max-h-40 overflow-y-auto space-y-1">
              {filteredProducts.slice(0, 5).map((product, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    navigate(`/products`);
                    handleSearch(product);
                    setIsMenuOpen(false);
                    setSearchQuery("");
                  }}
                  className="w-full text-left block px-3 py-2 text-xs sm:text-sm text-white/80 hover:text-white hover:bg-white/5 transition-all rounded truncate"
                >
                  {product}
                </button>
              ))}
              {searchQuery && filteredProducts.length === 0 && (
                <div className="px-3 py-2 text-xs text-white/50">
                  No products found
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
