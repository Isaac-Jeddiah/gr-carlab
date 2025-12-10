import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const products = [
  { 
    id: 1, 
    title: 'Car Perfumes and Air Fresheners', 
    short: 'Long lasting scents and refillable options.', 
    brands: ['All brands'], 
    image: 'https://pplx-res.cloudinary.com/image/upload/v1765346549/search_images/71dca1818c13de0260b67a7f5c93223a601ff4e2.jpg',
    description: 'Long lasting scents, refillable bottles, available in multiple fragrances.' 
  },
  { 
    id: 2, 
    title: '7D Mats and ATM Mats', 
    short: 'Full coverage floor protection with premium finishes.', 
    brands: ['All brands'], 
    image: 'https://pplx-res.cloudinary.com/image/upload/v1765346549/search_images/0fdcc5a03b6e72b530f9b3531c62796d18502c74.jpg',
    description: 'Premium 7D and ATM mats tailored to vehicle models for full coverage protection.' 
  },
  { 
    id: 3, 
    title: 'Boot Mats', 
    short: 'Tailored protection for the luggage area.', 
    brands: ['Brand X'],  
    image: 'https://pplx-res.cloudinary.com/image/upload/v1765346549/search_images/1e04dfec5e004f2f2eb1af530c26430202a90c3b.jpg',
    description: 'Custom-fit boot mats to protect the luggage area from spills and wear.' 
  },
  { 
    id: 4, 
    title: 'Windshield Wipers', 
    short: 'High performance blades for clear vision in all conditions.', 
    brands: ['Bosch','Valeo'],  
    image: 'https://pplx-res.cloudinary.com/image/upload/v1765346549/search_images/9562093c1234678368f2bc48000497a5fd5c551e.jpg',
    description: 'Durable wiper blades offering clear vision during rain and harsh weather.' 
  },
  { 
    id: 5, 
    title: 'Fog Lamps and Headlight Lamps', 
    short: 'Improved visibility and stylish upgrades.', 
    brands: ['Philips','OSRAM'], 
    image: 'https://pplx-res.cloudinary.com/image/upload/v1765346549/search_images/d7ab79ffc3a5ade018ba0b0c12a8579c378c5d41.jpg',
    description: 'Wide selection of fog and headlight lamps for enhanced visibility and style.' 
  },
  { 
    id: 6, 
    title: 'Rain Guards and Door Guards', 
    short: 'Weather protection and door edge safety.', 
    brands: ['Brand R'], 
    image: 'https://pplx-res.cloudinary.com/image/upload/v1765346549/search_images/381de75e41fd767aecc05ea18c87a111560d859d.jpg',
    description: 'Durable rain guards and door edge protectors to defend against weather and chips.' 
  },
  { 
    id: 7, 
    title: 'Android Stereos, Amplifiers and Woofers', 
    short: 'Multimedia upgrades with Bluetooth and navigation.', 
    brands: ['Pioneer','Sony'], 
    image: 'https://pplx-res.cloudinary.com/image/upload/v1765346556/search_images/0ce3e4c94eac2fa5eb601df8b86f21a1aa2380af.jpg',
    description: 'High-end multimedia units with navigation, Bluetooth and performance audio components.' 
  },
  { 
    id: 8, 
    title: 'Speakers and Sound Systems', 
    short: 'Brand options for crisp audio and powerful bass.', 
    brands: ['JBL','Infinity'], 
    image: 'https://pplx-res.cloudinary.com/image/upload/v1765346556/search_images/677b898cd2e33d8d985d4f8170ab39939f296b82.jpg',
    description: 'Speakers and full sound systems for improved in-car audio experience.' 
  },
  { 
    id: 9, 
    title: 'Car Covers', 
    short: 'Weatherproof protection for outdoor and indoor storage.', 
    brands: ['Brand C'], 
    image: 'https://pplx-res.cloudinary.com/image/upload/v1763417210/search_images/35da44f32a286f95d55be35ad2032f0213217a5e.jpg',
    description: 'Breathable, weatherproof car covers for long-term protection.' 
  },
  { 
    id: 10, 
    title: 'Towing Cables', 
    short: 'Robust safety rated cables for emergencies.', 
    brands: ['Brand T'], 
    image: 'https://pplx-res.cloudinary.com/image/upload/v1765346556/search_images/de163a79f46e3df92b6e0fbdf30830d27be5bfaa.jpg',
    description: 'High-strength towing cables rated for safety and emergency use.' 
  },
  { 
    id: 11, 
    title: 'LED Door Lights and Interior Lighting', 
    short: 'Decorative and functional illumination.', 
    brands: ['Brand L'], 
    image: 'https://pplx-res.cloudinary.com/image/upload/v1765346556/search_images/3c3c30c14237fe7c5d30f6b0e066b7dad6ef57ec.jpg',
    description: 'Stylish LED lights for doors and interiors to enhance look and visibility.' 
  },
  { 
    id: 12, 
    title: 'Headrest and Backrest Cushions', 
    short: 'Comfort and ergonomic support for long drives.', 
    brands: ['Brand H'], 
    image: 'https://pplx-res.cloudinary.com/image/upload/v1765346555/search_images/0f526f5b55f6e874e4ad1848a0e37bc06b1ddbb4.jpg',
    description: 'Comfort cushions with ergonomic support for long journeys.' 
  },
  { 
    id: 13, 
    title: 'Seat Belt Pads and Armrests', 
    short: 'Comfort accessories for driver and passengers.', 
    brands: ['Brand S'], 
    image: 'https://pplx-res.cloudinary.com/image/upload/v1765346565/search_images/a00044641c25bfec68d81269d8101ea12d21701e.jpg',
    description: 'Soft pads and armrests to improve comfort and reduce irritation.' 
  },
  { 
    id: 14, 
    title: 'Dashboard Covers', 
    short: 'Protects instrument panel from UV damage and glare.', 
    brands: ['Brand D'], 
    image: 'https://pplx-res.cloudinary.com/image/upload/v1764686396/search_images/c897f16dbedd5b0b370441876bff359595b17772.jpg',
    description: 'Custom-fit dashboard covers to reduce glare and protect from UV.' 
  },
  { 
    id: 15, 
    title: 'Dash Cameras', 
    short: 'Front and dual channel options for security and incident recording.', 
    brands: ['70mai','BlackVue'], 
    image: 'https://pplx-res.cloudinary.com/image/upload/v1765346563/search_images/c41e66a02edc0908ccc5be4eca65065e1f1b9884.jpg',
    description: 'Quality dashcams with single or dual channel recording and parking mode.' 
  },
  { 
    id: 16, 
    title: 'Tyre Inflators', 
    short: 'Portable inflators for roadside convenience.', 
    brands: ['Brand I'], 
    image: 'https://pplx-res.cloudinary.com/image/upload/v1765346563/search_images/990d7f2b2e22be1c78af48ff1153a92c34356652.jpg',
    description: 'Portable and electric tyre inflators for emergency and maintenance use.' 
  }
];


const ProductPage = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selected]);

  return (
    <div className="bg-black text-white min-h-screen">
      <Nav />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Car Accessories</h1>
        <p className="text-gray-400 mb-8">Browse our curated accessories, view quick specs and price ranges. Click a product for quick view.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => (
            <div key={p.id} className="bg-zinc-900 rounded-2xl p-4 hover:shadow-lg transition-shadow cursor-pointer group" onClick={() => setSelected(p)}>
              <div className="h-40 overflow-hidden rounded-lg mb-4 bg-black">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transform transition-transform duration-300 ease-out group-hover:scale-105" />
              </div>
              <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{p.short}</p>
              <div className="text-sm text-gray-300">
                <div className="font-medium mb-1">Brands: {p.brands.join(', ')}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="bg-[#0b0b0b] rounded-2xl max-w-3xl w-full p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{selected.title}</h2>
                <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-white">Close</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-64 bg-black rounded-lg overflow-hidden">
                  <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-gray-300 mb-4">{selected.description}</p>
                  <p className="text-sm text-gray-400 mb-4"><strong>Available brands:</strong> {selected.brands.join(', ')}</p>
                  <div className="flex gap-3 items-center">
                    <button onClick={() => navigate('/contact')} className="bg-yellow-400 text-black px-5 py-3 rounded-full font-semibold">Enquire / Buy</button>
                    <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-white">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
