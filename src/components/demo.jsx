import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Search, ChevronDown, ChevronUp } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import logo from '../assets/logo.png';

const NavBar = ({ setIsDrawerOpen }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const menuRef = useRef(null);
  const searchInputRef = useRef(null);
  const mobileServicesRef = useRef(null);

  const services = [
    { id: 1, name: "Premium Washing", slug: "premium-washing" },
    { id: 2, name: "Interior Detailing", slug: "interior-detailing" },
    { id: 3, name: "Exterior Detailing", slug: "exterior-detailing" },
    { id: 4, name: "Ceramic Coating", slug: "ceramic-coating" },
    { id: 5, name: "Paint Protection", slug: "ppf" },
    { id: 6, name: "Engine Detailing", slug: "engine-detailing" },
    { id: 7, name: "Steam Cleaning", slug: "steam-cleaning" }
  ];

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "/contact" }
  ];

  const products = [
    "Car Perfumes & Air Fresheners",
    "7D Mats & ATM Mats",
    "Android Stereos & Woofers",
    "Dash Cameras",
    "LED Door Lights",
    "Tyre Inflators",
    "Fog Lamps & Head Lights",
    "Car Covers & Speakers",
    "Wind Shield Wipers",
    "Rain Guard",
    "Upmodular",
    "Door Guard",
    "Head Rest & Back Rest",
    "Seat Belt Pads",
    "Dashboard Covers",
    "Arm Rest",
    "Car Boot Mats"
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (mobileServicesRef.current && !mobileServicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigate = useNavigate();

  const handleSearch = (item) => {
    setSearchQuery('');
    const anchor = document.querySelector(`#products`);
    if (anchor) anchor.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredProducts = products.filter(product =>
    searchQuery === '' || product.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="NavBar-container relative z-20 px-2 xs:px-3 sm:px-4 md:px-8 lg:px-12 pt-0 pb-3 sm:pb-3 md:pb-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="NavBar-logo hover-scale cursor-pointer">
          <img src={logo} alt="GR CAR LAB" className="h-32 xs:h-26 sm:h-38 md:h-0 lg:h-52 w-auto object-contain" />
        </div>
        <button
          onClick={() => {
            setIsServicesOpen(!isServicesOpen);
            setIsMenuOpen(false);
            setIsSearchOpen(false);
          }}
          className="lg:hidden p-2 bg-white/8 backdrop-blur-md border border-white/10 rounded-md text-white/90 hover:bg-white/12 transition-all"
          aria-label="Open services"
        >
          Services
        </button>
      </div>
      
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-3 md:gap-4 mr-2 md:mr-4">
          <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
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

          <div className="relative">
            <div className="search-bar-desktop hidden lg:flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl overflow-hidden transition-all">
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="bg-transparent text-white placeholder-white/50 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none w-32 sm:w-48"
              />
              <button 
                className="bg-white/10 z-100 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl hover:bg-white/15 hover:bg-white/20 px-2 sm:px-3 py-2 sm:py-2.5 transition-all"
                aria-label="Toggle search"
              >
                <Search className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="drawer-menu relative" ref={menuRef}>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="drawer-close-button p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/10 transition-all hover-scale"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
            ) : (
              <Menu className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
            )}
          </button>

          {isMenuOpen && (
            <div className="drawer-content absolute top-full right-0 mt-2 w-64 sm:w-72 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl shadow-2xl overflow-hidden z-50 max-h-96 overflow-y-auto">
              {/* Main Menu Items */}
              <div className="drawer-menu-items py-2">
                {menuItems.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="drawer-menu-link block px-3 sm:px-5 py-2 sm:py-3 text-white/80 hover:text-white hover:bg-white/5 transition-all text-xs sm:text-sm border-b border-white/5"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Services Section */}
              <div className="border-t border-white/10">
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

              {/* Search Section */}
              <div className="border-t border-white/10 p-3 sm:p-4">
                <p className="text-xs text-white/50 uppercase tracking-wider mb-2">Search Products</p>
                <div className="flex items-center gap-2 bg-black/30 rounded-lg px-3 py-2 mb-2">
                  <input
                    ref={searchInputRef}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Type product..."
                    className="flex-1 bg-transparent text-white placeholder-white/50 text-xs sm:text-sm focus:outline-none"
                  />
                  <X 
                    onClick={() => setSearchQuery('')}
                    className="w-3 h-3 text-white/50 cursor-pointer"
                  />
                </div>
                <div className="max-h-40 overflow-y-auto space-y-1">
                  {filteredProducts.slice(0, 5).map((product, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        handleSearch(product);
                        setIsMenuOpen(false);
                        setSearchQuery('');
                      }}
                      className="w-full text-left block px-3 py-2 text-xs sm:text-sm text-white/80 hover:text-white hover:bg-white/5 transition-all rounded truncate"
                    >
                      {product}
                    </button>
                  ))}
                  {searchQuery && filteredProducts.length === 0 && (
                    <div className="px-3 py-2 text-xs text-white/50">No products found</div>
                  )}
                </div>
              </div>

              {/* Book Now Button */}
              <div className="drawer-bottom px-3 sm:px-4 py-2 sm:py-3 border-t border-white/10">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="group relative w-full flex items-center justify-center gap-3 px-6 py-3 bg-black border-2 border-yellow-400 rounded-full transition-all duration-300 hover:rounded-2xl active:scale-95"
                >
                  <span className="text-white font-semibold text-sm">Book Now</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;