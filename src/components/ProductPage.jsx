import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import carPerfumesAndAirFresheners from "../assets/images_products/car-perfumes-and-air-fresheners.jpg";
import matsAndAtmMats from "../assets/images_products/7d-mats-and-atm-mats.jpg";
import bootMats from "../assets/images_products/boot-mats.jpg";
import windshieldWipers from "../assets/images_products/windshield-wipers.jpg";
import fogLampsAndHeadlightLamps from "../assets/images_products/fog-lamps-and-headlight-lamps.jpg";
import rainGuardsAndDoorGuards from "../assets/images_products/rain-guards-and-door-guards.jpg";
import androidStereosAmplifiersAndWoofers from "../assets/images_products/android-stereos-amplifiers-and-woofers.jpg";
import speakersAndSoundSystems from "../assets/images_products/speakers-and-sound-systems.jpg";
import carCovers from "../assets/images_products/car-covers.jpg";
import towingCables from "../assets/images_products/towing-cables.jpg";
import ledDoorLightsAndInteriorLighting from "../assets/images_products/led-door-lights-and-interior-lighting.jpg";
import headrestAndBackrestCushions from "../assets/images_products/headrest-and-backrest-cushions.jpg";
import seatBeltPadsAndArmrests from "../assets/images_products/seat-belt-pads-and-armrests.jpg";
import dashboardCovers from "../assets/images_products/dashboard-covers.jpg";
import dashCameras from "../assets/images_products/dash-cameras.jpg";
import tyreInflators from "../assets/images_products/tyre-inflators.jpg";

const products = [
  {
    id: 1,
    title: "Car Perfumes and Air Fresheners",
    short: "Long lasting scents and refillable options.",
    brands: ["All brands"],
    image: carPerfumesAndAirFresheners,
    description:
      "Long lasting scents, refillable bottles, available in multiple fragrances.",
    category: "Interior",
  },
  {
    id: 2,
    title: "7D Mats and ATM Mats",
    short: "Full coverage floor protection with premium finishes.",
    brands: ["All brands"],
    image: matsAndAtmMats,
    description:
      "Premium 7D and ATM mats tailored to vehicle models for full coverage protection.",
    category: "Interior",
  },
  {
    id: 3,
    title: "Boot Mats",
    short: "Tailored protection for the luggage area.",
    brands: ["Brand X"],
    image: bootMats,
    description:
      "Custom-fit boot mats to protect the luggage area from spills and wear.",
    category: "Interior",
  },
  {
    id: 4,
    title: "Windshield Wipers",
    short: "High performance blades for clear vision in all conditions.",
    brands: ["Bosch", "Valeo"],
    image: windshieldWipers,
    description:
      "Durable wiper blades offering clear vision during rain and harsh weather.",
    category: "Exterior",
  },
  {
    id: 5,
    title: "Fog Lamps and Headlight Lamps",
    short: "Improved visibility and stylish upgrades.",
    brands: ["Philips", "OSRAM"],
    image: fogLampsAndHeadlightLamps,
    description:
      "Wide selection of fog and headlight lamps for enhanced visibility and style.",
    category: "Lighting",
  },
  {
    id: 6,
    title: "Rain Guards and Door Guards",
    short: "Weather protection and door edge safety.",
    brands: ["Brand R"],
    image: rainGuardsAndDoorGuards,
    description:
      "Durable rain guards and door edge protectors to defend against weather and chips.",
    category: "Safety",
  },
  {
    id: 7,
    title: "Android Stereos, Amplifiers and Woofers",
    short: "Multimedia upgrades with Bluetooth and navigation.",
    brands: ["Pioneer", "Sony"],
    image: androidStereosAmplifiersAndWoofers,
    description:
      "High-end multimedia units with navigation, Bluetooth and performance audio components.",
    category: "Electronics",
  },
  {
    id: 8,
    title: "Speakers and Sound Systems",
    short: "Brand options for crisp audio and powerful bass.",
    brands: ["JBL", "Infinity"],
    image: speakersAndSoundSystems,
    description:
      "Speakers and full sound systems for improved in-car audio experience.",
    category: "Electronics",
  },
  {
    id: 9,
    title: "Car Covers",
    short: "Weatherproof protection for outdoor and indoor storage.",
    brands: ["Brand C"],
    image: carCovers,
    description:
      "Breathable, weatherproof car covers for long-term protection.",
    category: "Protection",
  },
  {
    id: 10,
    title: "Towing Cables",
    short: "Robust safety rated cables for emergencies.",
    brands: ["Brand T"],
    image: towingCables,
    description:
      "High-strength towing cables rated for safety and emergency use.",
    category: "Safety",
  },
  {
    id: 11,
    title: "LED Door Lights and Interior Lighting",
    short: "Decorative and functional illumination.",
    brands: ["Brand L"],
    image: ledDoorLightsAndInteriorLighting,
    description:
      "Stylish LED lights for doors and interiors to enhance look and visibility.",
    category: "Interior",
  },
  {
    id: 12,
    title: "Headrest and Backrest Cushions",
    short: "Comfort and ergonomic support for long drives.",
    brands: ["Brand H"],
    image: headrestAndBackrestCushions,
    description: "Comfort cushions with ergonomic support for long journeys.",
    category: "Comfort",
  },
  {
    id: 13,
    title: "Seat Belt Pads and Armrests",
    short: "Comfort accessories for driver and passengers.",
    brands: ["Brand S"],
    image: seatBeltPadsAndArmrests,
    description:
      "Soft pads and armrests to improve comfort and reduce irritation.",
    category: "Comfort",
  },
  {
    id: 14,
    title: "Dashboard Covers",
    short: "Protects instrument panel from UV damage and glare.",
    brands: ["Brand D"],
    image: dashboardCovers,
    description:
      "Custom-fit dashboard covers to reduce glare and protect from UV.",
    category: "Interior",
  },
  {
    id: 15,
    title: "Dash Cameras",
    short:
      "Front and dual channel options for security and incident recording.",
    brands: ["70mai", "BlackVue"],
    image: dashCameras,
    description:
      "Quality dashcams with single or dual channel recording and parking mode.",
    category: "Electronics",
  },
  {
    id: 16,
    title: "Tyre Inflators",
    short: "Portable inflators for roadside convenience.",
    brands: ["Brand I"],
    image: tyreInflators,
    description:
      "Portable and electric tyre inflators for emergency and maintenance use.",
    category: "Tools",
  },
];

const ProductPage = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // store previous overflow value and restore it on cleanup
    const previousOverflow = document.body.style.overflow;

    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = previousOverflow || "";
    }

    return () => {
      document.body.style.overflow = previousOverflow || "";
    };
  }, [selected]);

  return (
    <div className="bg-black text-white min-h-screen">
      <Nav />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Car Accessories</h1>
        <p className="text-gray-400 mb-8">
          Browse our curated accessories, view quick specs and price ranges.
          Click a product for quick view.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-zinc-900 rounded-2xl p-4 hover:shadow-lg transition-shadow cursor-pointer group"
              onClick={() => setSelected(p)}
            >
              <div
                className="h-40 overflow-hidden rounded-lg mb-4 bg-black transform transition-transform duration-300 ease-out group-hover:scale-105"
                style={{
                  backgroundImage: `url(${p.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{p.short}</p>
              <div className="text-sm text-gray-300">
                <div className="font-medium mb-1">
                  Brands: {p.brands.join(", ")}
                </div>
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
                <button
                  onClick={() => setSelected(null)}
                  className="text-gray-400 hover:text-white"
                >
                  Close
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  className="h-64 bg-black rounded-lg overflow-hidden"
                  style={{
                    backgroundImage: `url(${selected.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
                <div>
                  <p className="text-gray-300 mb-4">{selected.description}</p>
                  <p className="text-sm text-gray-400 mb-4">
                    <strong>Available brands:</strong>{" "}
                    {selected.brands.join(", ")}
                  </p>
                  <div className="flex gap-3 items-center">
                    <button
                      onClick={() => navigate("/contact")}
                      className="bg-yellow-400 text-black px-5 py-3 rounded-full font-semibold"
                    >
                      Enquire / Buy
                    </button>
                    <button
                      onClick={() => setSelected(null)}
                      className="text-gray-400 hover:text-white"
                    >
                      Close
                    </button>
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
