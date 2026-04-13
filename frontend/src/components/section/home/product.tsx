"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const OAK_PRODUCTS = [
  {
    title: "Tan",
    type: "Hardwood Flooring",
    img: "//www.prestigefloor.com.au/cdn/shop/files/Tan-Prestige-Oak-1920x1920.jpg?v=1716616613",
    link: "/products/tan-ab",
    desc: "A timeless choice that brings warmth to any room.",
  },
  {
    title: "Smoked White",
    type: "Hardwood Flooring",
    img: "//www.prestigefloor.com.au/cdn/shop/files/Prestige-TG-14_2-Smoked-White-1920x1912.jpg?v=1716615714",
    link: "/products/smoked-white",
    desc: "Brighten your space with this elegant smoked white finish.",
  },
  {
    title: "Royal Grey",
    type: "Hardwood Flooring",
    img: "//www.prestigefloor.com.au/cdn/shop/files/Prestige-14_2-Royal-Grey-1920x1912.jpg?v=1716616335",
    link: "/products/royal-grey",
    desc: "Sophisticated grey tones for a modern interior.",
  },
  {
    title: "Rawhide",
    type: "Hardwood Flooring",
    img: "//www.prestigefloor.com.au/cdn/shop/files/Prestige-14_2-Rawhide-1920x1912.jpg?v=1716616147",
    link: "/products/rawhide",
    desc: "Natural rawhide color for a rustic and durable appeal.",
  },
];

const CARPET_PRODUCTS = [
  {
    title: "Riviera",
    type: "Polypropylene Carpet",
    img: "//www.prestigefloor.com.au/cdn/shop/files/hero-id-0972907600.jpg?v=1715364740",
    link: "/products/riviera",
    desc: "Riviera is a versatile and affordable high low loop patterned carpet.",
  },
  {
    title: "Callisto",
    type: "Polypropylene Carpet",
    img: "//www.prestigefloor.com.au/cdn/shop/files/hero_e1724c82-ce46-439f-b265-4cf36c10b84e.jpg?v=1715364432",
    link: "/products/callisto",
    desc: "An economical flooring solution for the cost conscious buyer.",
  },
  {
    title: "Campaspe",
    type: "Polypropylene Carpet",
    img: "//www.prestigefloor.com.au/cdn/shop/files/china-clay.jpg?v=1715658249",
    link: "/products/campaspe",
    desc: "High low loop pile carpet, a great option for your first home.",
  },
  {
    title: "Forest Park",
    type: "Polypropylene Carpet",
    img: "//www.prestigefloor.com.au/cdn/shop/files/Beacon.jpg?v=1736064647",
    link: "/products/forest-park",
    desc: "Versatile and stylish, Forest Park is a textured loop carpet.",
  },
];

export default function Product() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("translate-y-0", "opacity-100");
            entry.target.classList.remove("translate-y-10", "opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="w-full relative overflow-hidden font-sans">
      {/* Banner Section */}
      <section className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://www.prestigefloor.com.au/cdn/shop/files/d9d06f269538eb120fcbc7b34c97be7b6f5ff34e-2400x1800.avif?v=1764651991&width=1600')" }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center text-white">
            {/* Mobile Icon */}
            <div
              ref={addToRefs}
              className="block md:hidden mb-6 transition-all duration-1000 transform translate-y-10 opacity-0 delay-[100ms] ease-out"
            >
              <img
                src="//www.prestigefloor.com.au/cdn/shop/files/Prestige-floor-icon-only.png?v=1764680890&width=80"
                alt="Prestige Floor Icon"
                className="w-[60px] h-auto object-contain"
              />
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-[40px] font-bold uppercase tracking-wide leading-tight mb-6 flex flex-col items-center">
              <span
                ref={addToRefs}
                className="block text-white transition-all duration-1000 transform translate-y-10 opacity-0 delay-[100ms] ease-out"
              >
                Your Dream Floor Starts with Prestige
              </span>
              <span
                ref={addToRefs}
                className="block text-white/80 mt-2 text-[18px] md:text-[24px] lg:text-[26px] normal-case tracking-normal transition-all duration-1000 transform translate-y-10 opacity-0 delay-[200ms] ease-out"
              >
                Your Vision, Our Precision, Lasting Luxury
              </span>
            </h2>

            <div
              ref={addToRefs}
              className="max-w-[700px] mx-auto mb-10 text-[15px] md:text-[18px] font-medium leading-relaxed transition-all duration-[1200ms] transform translate-y-10 opacity-0 delay-[200ms] ease-out"
            >
              <p>
                Create a home that feels beautifully crafted from the moment you step inside. Prestige
                Floor delivers tailored, premium flooring that brings your vision to life with
                elegance, precision, and enduring luxury.
              </p>
            </div>

            <Link
              href="/pages/request-a-free-measure-quote"
              ref={addToRefs}
              className="inline-block px-8 py-3.5 font-bold uppercase tracking-widest text-[14px] bg-[#c7804b] border-[2px] border-[#c7804b] text-white hover:bg-transparent hover:text-[#c7804b] transition-all duration-500 transform translate-y-10 opacity-0 delay-[300ms] ease-out w-fit block shadow-[0px_4px_15px_rgba(199,128,75,0.4)] hover:shadow-none"
            >
              Book your consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Prestige Oak Section */}
      <section className="bg-[#f5f5f5] py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-row lg:flex-row-reverse items-center gap-12 lg:gap-24 mb-20">
            <div
              ref={addToRefs}
              className="w-full lg:w-1/2 relative h-[400px] md:h-[600px] transition-all duration-1000 transform translate-y-10 opacity-0"
            >
              <img
                src="//www.prestigefloor.com.au/cdn/shop/files/Prestige-Oak-15mm-Chateau-Grey-PreferenceFloors_Mosman_Chateau_dining_V2_a9e2568e-2d52-49e6-ac76-4721d40989a7.jpg?v=1762402561&width=800"
                alt="Discover Elegance with Prestige Oak"
                className="w-full h-full object-cover shadow-lg"
              />
              <div
                ref={addToRefs}
                className="absolute right-0 bottom-0 h-[30%] aspect-[4/5] bg-no-repeat bg-cover bg-center z-[2] opacity-0 translate-y-10 transition-all duration-[1500ms] delay-500 ease-out border-[3px] border-white shadow-xl"
                style={{
                  backgroundImage:
                    "url('//www.prestigefloor.com.au/cdn/shop/files/Chateau-Grey-1920x1917_3fa8910e-860f-4871-b138-33fbcfd94180.jpg?v=1762402613&width=800')",
                }}
              ></div>
            </div>

            <div
              ref={addToRefs}
              className="w-full lg:w-1/2 transition-all duration-1000 delay-200 transform translate-y-10 opacity-0"
            >
              <span className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-2 block">
                Discover Elegance with
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Prestige Oak</h2>
              <div className="text-gray-600 space-y-4 mb-8 leading-relaxed">
                <p>
                  Embodying timeless beauty and sophisticated elegance, Prestige Oak seamlessly combines the warm, organic charm of authentic European Oak with exceptional durability engineered for modern living. Each plank showcases distinctive grain patterns and natural character, bringing refined warmth to every room. At Prestige Floor, we believe that true luxury begins from the ground up quite literally. Our commitment to excellence means selecting only the finest European Oak, expertly sourced and milled to exacting standards, ensuring every floor reflects meticulous craftsmanship and uncompromising quality.
                </p>
                <p>
                  Prestige Oak is more than flooringt's a statement of personal style and authentic, bespoke living. For discerning homeowners who value authenticity, durability, and design, our hardwood delivers enduring beauty and proven longevity. Whether classic or contemporary, Prestige Oak elevates your space with natural elegance and timeless luxury.
                </p>
              </div>
              <Link
                href="/collections/prestige-oak-flooring"
                className="inline-block border-b-2 border-black pb-1 uppercase font-semibold text-sm hover:text-gray-600 hover:border-gray-600 transition"
              >
                EXPLORE THE RANGE
              </Link>
            </div>
          </div>

          <div
            ref={addToRefs}
            className="transition-all duration-1000 transform translate-y-10 opacity-0"
          >
            <div className="flex justify-between items-end mb-8">
              <Link
                href="/collections/prestige-oak-flooring"
                className="inline-block border-b-2 border-black pb-1 uppercase font-semibold text-sm hover:text-gray-600 hover:border-gray-600 transition"
              >
                Explore The Range
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {OAK_PRODUCTS.map((product, index) => (
                <Link
                  href={product.link}
                  key={index}
                  className="group block"
                >
                  <div className="relative h-[300px] mb-4 overflow-hidden bg-white/50">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{product.title}</h3>
                  <p className="text-gray-500 text-sm mb-3">{product.type}</p>
                  <p className="text-sm text-gray-700 line-clamp-2">
                    {product.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Carpet Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-20">
            <div
              ref={addToRefs}
              className="w-full lg:w-1/2 relative h-[400px] md:h-[600px] transition-all duration-1000 transform translate-y-10 opacity-0"
            >
              <img
                src="//www.prestigefloor.com.au/cdn/shop/files/hero_2.jpg?v=1762342797"
                alt="Discover Resilience with Polypropylene Carpet"
                className="w-full h-full object-cover shadow-lg"
              />
              <div
                ref={addToRefs}
                className="absolute right-0 bottom-0 h-[30%] aspect-[4/5] bg-no-repeat bg-cover bg-center z-[2] opacity-0 translate-y-10 transition-all duration-[1500ms] delay-500 ease-out border-[3px] border-white shadow-xl"
                style={{
                  backgroundImage:
                    "url('//www.prestigefloor.com.au/cdn/shop/files/1_05a6d93e-f049-4ab8-8e07-2ca28db28f3e.jpg?v=1762343458&width=800')",
                }}
              ></div>
            </div>
            <div
              ref={addToRefs}
              className="w-full lg:w-1/2 transition-all duration-1000 delay-200 transform translate-y-10 opacity-0"
            >
              <span className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-2 block">
                Discover Resilience with
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Polypropylene Carpet
              </h2>
              <div className="text-gray-600 space-y-4 mb-8 leading-relaxed">
                <p>
                  Elevate your home with comfort and durability. Designed for modern living, our flooring resists stains and maintains beauty even in high-traffic areas, making it perfect for busy families and active lifestyles.
                </p>
                <p>
                  At Prestige Floor, we combine timeless style with lasting elegance. Our commitment is simple: create flooring that reflects your personal taste and stands the test of time.
                </p>
              </div>
              <Link
                href="/collections/rugs"
                className="inline-block border-b-2 border-black pb-1 uppercase font-semibold text-sm hover:text-gray-600 hover:border-gray-600 transition"
              >
                EXPLORE THE CARPET
              </Link>
            </div>
          </div>



          <div
            ref={addToRefs}
            className="transition-all duration-1000 transform translate-y-10 opacity-0 p-8 -mx-8 px-14"
          >
            <div className="flex justify-start items-end mb-8 pt-8">
              <Link
                href="/collections/carpets"
                className="inline-block border-b-2 border-black pb-1 uppercase font-semibold text-sm hover:text-gray-600 hover:border-gray-600 transition"
              >
                Explore The Carpet
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {CARPET_PRODUCTS.map((product, index) => (
                <Link
                  href={product.link}
                  key={index}
                  className="group block"
                >
                  <div className="relative h-[300px] mb-4 overflow-hidden bg-white/50">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{product.title}</h3>
                  <p className="text-gray-500 text-sm mb-3">{product.type}</p>
                  <p className="text-sm text-gray-700 line-clamp-2">
                    {product.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .fade-in-out-text {
          animation: fadeEffect 3s infinite;
        }

        @keyframes fadeEffect {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}