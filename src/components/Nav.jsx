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
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpening, setIsOpening] = useState(false);

  const servicesRef = useRef(null);
  const menuRef = useRef(null);
  const searchRef = useRef(null);
  const searchPanelRef = useRef(null);
  const mobileServicesRef = useRef(null);
  const searchInputRef = useRef(null);

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
        !isOpening &&
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        searchPanelRef.current &&
        !searchPanelRef.current.contains(event.target)
      ) {
        setIsSearchOpen(false);
      }
     if (
        mobileServicesRef.current &&
        !mobileServicesRef.current.contains(event.target)
      ) {
        setIsMobileServicesOpen(false);
      }
    };

    const handleMobileServicesClick = () => {
      setIsMobileServicesOpen((prevState) => !prevState);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpening]);

  useEffect(() => {
    const panel = searchPanelRef.current;
    if (!panel) return;
    gsap.killTweensOf(panel);

    if (isSearchOpen) {
      setIsOpening(true);
      gsap.fromTo(
        panel,
        { y: -100, autoAlpha: 0, height: 0 },
        {
          y: 0,
          autoAlpha: 1,
          height: "auto",
          duration: 0.28,
          ease: "power2.out",
          onComplete: () => {
            setIsOpening(false);
            if (searchInputRef.current) searchInputRef.current.focus();
          },
        }
      );
    } else {
      gsap.to(panel, {
        y: -100,
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
    <div className="NavBar-container relative z-200 px-2 xs:px-3 sm:px-4 md:px-8 lg:px-12 sm:pb-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div
          className="NavBar-logo hover-scale cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="GR CAR LAB"
            className="h-16 xs:h-13 sm:h-19 md:h-10 py-0 mb-0 lg:h-26 w-auto object-contain"
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
                <div
                  className="hidden max-lg:block border-t border-white/10 "
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMobileServicesOpen((prev) => !prev);
                  }}
                >
                  <button className="w-full px-3 sm:px-5 py-2 sm:py-3 text-white/80 hover:text-white hover:bg-white/5 transition-all text-xs sm:text-sm flex items-center justify-between">
                    <span>Services</span>
                    {isMobileServicesOpen ? (
                      <ChevronUp className="w-3 h-3" />
                    ) : (
                      <ChevronDown className="w-3 h-3" />
                    )}
                  </button>
                  {isMobileServicesOpen && (
                  <div ref={mobileServicesRef} className="overflow-hidden">
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        to={`/services/${service.slug}`}
                        onClick={() => {
                          setIsMobileServicesOpen(false);
                          setIsMenuOpen(false);
                        }}
                        className="block px-4 py-2 text-xs sm:text-sm text-white/80 hover:text-white hover:bg-white/5 transition-all"
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
