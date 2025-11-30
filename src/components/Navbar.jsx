import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Search, ChevronDown, ChevronUp } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = ({ setIsDrawerOpen }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const servicesRef = useRef(null);
  const menuRef = useRef(null);
  const searchRef = useRef(null);

  const services = [
    "Premium Washing & Cleaning",
    "Interior Detailing",
    "Exterior Detailing", 
    "Ceramic Coating",
    "Paint Protection Film",
    "Engine Detailing",
    "Steam Cleaning"
  ];

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" }
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
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (item) => {
    setSearchQuery('');
    setIsSearchOpen(false);
    console.log('Selected:', item);
    // Add your navigation or search logic here
  };

  return (
    // Reduced top padding (pt-1) while keeping bottom padding; logo height unaffected
    <div className="navbar-container relative z-20 px-2 xs:px-3 sm:px-4 md:px-8 lg:px-12 pt-0 pb-3 sm:pb-3 md:pb-4 flex items-center justify-between">
      <div className="navbar-logo hover-scale cursor-pointer">
        <img src={logo} alt="GR CAR LAB" className="h-24 xs:h-28 sm:h-32 md:h-32 lg:h-36 w-auto object-contain" />
      </div>
      
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        <div className="hidden lg:flex items-center gap-3 md:gap-4 mr-2 md:mr-4">
          {/* Services Dropdown */}
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

            {/* Services Dropdown Menu */}
            {isServicesOpen && (
              <div className="dropdown-menu absolute top-full left-0 mt-2 w-56 sm:w-64 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl shadow-2xl overflow-hidden z-50 max-h-96 overflow-y-auto">
                <div className="py-2">
                  {services.map((service, idx) => (
                    <a
                      key={idx}
                      href="#services"
                      onClick={() => setIsServicesOpen(false)}
                      className="dropdown-menu-item block px-3 sm:px-5 py-2 sm:py-3 text-white/80 hover:text-white hover:bg-white/5 transition-all text-xs sm:text-sm"
                    >
                      {service}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Search Dropdown */}
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
                className="bg-white/10 hover:bg-white/20 px-2 sm:px-3 py-2 sm:py-2.5 transition-all"
              >
                <Search className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
              </button>
            </div>

            {/* Search Dropdown - Shows Products */}
            {isSearchOpen && (
              <div className="dropdown-menu absolute top-full right-0 mt-2 w-56 sm:w-72 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl shadow-2xl overflow-hidden z-50 max-h-96 overflow-y-auto">
                <div className="p-2 sm:p-3 border-b border-white/10">
                  <p className="text-xs text-white/50 uppercase tracking-wider">Products</p>
                </div>
                <div className="py-2">
                  {products
                    .filter(product => 
                      searchQuery === '' || 
                      product.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((product, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSearch(product)}
                        className="dropdown-menu-item w-full text-left block px-3 sm:px-5 py-2 sm:py-3 transition-all text-xs sm:text-sm hover:bg-white/5"
                      >
                        {product}
                      </button>
                    ))}
                  {searchQuery && products.filter(product => 
                    product.toLowerCase().includes(searchQuery.toLowerCase())
                  ).length === 0 && (
                    <div className="px-3 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm">
                      No products found
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Search Icon */}
        <button 
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          className="lg:hidden p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/10 transition-all hover-scale"
        >
          <Search className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
        </button>

        {/* Menu Dropdown (replacing hamburger) */}
        <div className="drawer-menu relative" ref={menuRef}>
          <button 
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setIsServicesOpen(false);
              setIsSearchOpen(false);
            }}
            className="drawer-close-button p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/10 transition-all hover-scale"
          >
            {isMenuOpen ? (
              <X className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
            ) : (
              <Menu className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
            )}
          </button>

          {/* Menu Dropdown */}
          {isMenuOpen && (
            <div className="drawer-content absolute top-full right-0 mt-2 w-48 sm:w-56 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl shadow-2xl overflow-hidden z-50">
              <div className="drawer-menu-items py-2">
                {menuItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="drawer-menu-link block px-3 sm:px-5 py-2 sm:py-3 text-white/80 hover:text-white hover:bg-white/5 transition-all text-xs sm:text-sm border-b border-white/5 last:border-0"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="drawer-bottom px-3 sm:px-4 py-2 sm:py-3 border-t border-white/10 mt-1">
                  <a
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="drawer-book-button block w-full text-center border border-white text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-full hover:bg-white hover:text-black transition-all text-xs sm:text-sm font-medium"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;