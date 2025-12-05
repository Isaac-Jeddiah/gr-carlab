import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Search, ChevronDown, ChevronUp, List } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import logo from '../assets/logo.png';

const Navbar = ({ setIsDrawerOpen }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const servicesRef = useRef(null);
  const menuRef = useRef(null);
  const searchRef = useRef(null);
  const searchPanelRef = useRef(null);
  const mobileServicesRef = useRef(null);
  const searchInputRef = useRef(null);

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
      if (searchRef.current && !searchRef.current.contains(event.target) && searchPanelRef.current && !searchPanelRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
      if (mobileServicesRef.current && !mobileServicesRef.current.contains(event.target) && servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const panel = searchPanelRef.current;
    if (!panel) return;
    gsap.killTweensOf(panel);

    if (isSearchOpen) {
      gsap.fromTo(panel, 
        { y: -8, autoAlpha: 0, height: 0 }, 
        { y: 0, autoAlpha: 1, height: 'auto', duration: 0.28, ease: 'power2.out' }
      );
      if (searchInputRef.current) setTimeout(() => searchInputRef.current.focus(), 140);
    } else {
      gsap.to(panel, { y: -6, autoAlpha: 0, height: 0, duration: 0.2, ease: 'power2.in' });
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const panel = mobileServicesRef.current;
    if (!panel) return;
    gsap.killTweensOf(panel);

    if (isServicesOpen && window.innerWidth < 1024) {
      gsap.fromTo(panel, { y: -8, autoAlpha: 0, height: 0 }, { y: 0, autoAlpha: 1, height: 'auto', duration: 0.28, ease: 'power2.out' });
    } else {
      gsap.to(panel, { y: -6, autoAlpha: 0, height: 0, duration: 0.18, ease: 'power2.in' });
    }
  }, [isServicesOpen]);

  const navigate = useNavigate();

  const handleSearch = (item) => {
    setSearchQuery('');
    setIsSearchOpen(false);
    const anchor = document.querySelector(`#products`);
    if (anchor) anchor.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredProducts = products.filter(product =>
    searchQuery === '' || product.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="navbar-container relative z-20 px-2 xs:px-3 sm:px-4 md:px-8 lg:px-12 pt-0 pb-3 sm:pb-3 md:pb-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="navbar-logo hover-scale cursor-pointer">
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
                  <p className="text-xs text-white/50 uppercase tracking-wider">Products</p>
                </div>
                <div className="py-2">
                  {filteredProducts.map((product, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSearch(product)}
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
            setIsSearchOpen(prev => !prev);
            setIsServicesOpen(false);
            setIsMenuOpen(false);
          }}
          className="lg:hidden p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/10 transition-all hover-scale"
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
            <div className="drawer-content absolute top-full right-0 mt-2 w-48 sm:w-56 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl shadow-2xl overflow-hidden z-50">
              <div className="drawer-menu-items py-2">
                {menuItems.map((item, idx) => (
                  item.name === 'Services' ? (
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

      {/* Mobile Search Panel (animated via GSAP) */}
      <div
        ref={searchPanelRef}
        className={`lg:hidden origin-top-right absolute left-0 right-0 top-full mt-2 px-3 z-50 overflow-hidden`}
        style={{ pointerEvents: isSearchOpen ? 'auto' : 'none' }}
        aria-hidden={!isSearchOpen}
      >
        <div className="mx-auto w-full sm:w-80 max-w-xl bg-white/8 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl overflow-hidden">
          <div className="p-2 flex items-center gap-2">
            <input
              ref={searchInputRef}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="flex-1 bg-transparent text-white placeholder-white/50 px-3 py-2 rounded-md focus:outline-none"
              aria-label="Search products"
            />
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-2 bg-white/6 rounded-md"
              aria-label="Close search"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          <div className="border-t border-white/6 max-h-64 overflow-y-auto">
            <div className="p-2">
              <p className="text-xs text-white/50 uppercase tracking-wider">Products</p>
            </div>
            <div className="py-1">
              {filteredProducts.map((product, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSearch(product)}
                  className="w-full text-left block px-3 py-2 text-sm text-white/90 hover:bg-white/5 transition-all"
                >
                  {product}
                </button>
              ))}
              {searchQuery && filteredProducts.length === 0 && (
                <div className="px-3 py-2 text-sm text-white/70">No products found</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Services Panel (animated via GSAP) */}
      <div
        ref={mobileServicesRef}
        className={`lg:hidden origin-top-left absolute left-3 top-full mt-2 px-3 z-40 overflow-hidden`}
        style={{ pointerEvents: isServicesOpen ? 'auto' : 'none' }}
        aria-hidden={!isServicesOpen}
      >
        <div className="mx-auto w-full max-w-md bg-white/8 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl overflow-hidden">
          <div className="p-3">
            <p className="text-sm text-white/70 mb-2">Services</p>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2">
              {services.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setIsServicesOpen(false);
                    navigate(`/services/${s.slug}`);
                  }}
                  className="flex items-center gap-2 w-full text-left px-3 py-2 rounded-md bg-white/5 hover:bg-white/8 text-white text-sm transition-all"
                >
                  <span className="truncate">{s.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;