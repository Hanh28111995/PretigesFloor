import React from 'react';
import Link from 'next/link';

export default function BannerWithText() {
  return (
    <section 
      className="relative w-full py-[40px] lg:pt-[127px] lg:pb-[89px] overflow-hidden bg-cover bg-center bg-scroll lg:bg-fixed" 
      style={{ backgroundImage: "url('//www.prestigefloor.com.au/cdn/shop/files/d9d06f269538eb120fcbc7b34c97be7b6f5ff34e-2400x1800.avif?v=1764651991&width=1600')" }}
    >
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#00000061] z-0 pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-5 flex items-center justify-center text-center">
        <div className="w-full">
          
          {/* Mobile Icon */}
          <div className="block lg:hidden mb-6 mx-auto w-[88px] h-[88px] cursor-pointer hover:scale-105 transition-transform duration-300">
            <img 
              src="//www.prestigefloor.com.au/cdn/shop/files/Prestige-floor-icon-only.png?v=1764680890&width=80" 
              alt="Prestige Floor Logo Icon" 
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Heading */}
          <h2 className="font-medium tracking-wide">
            {/* Part 1 */}
            <span className="block text-[36px] lg:text-[50px] leading-[1.3] lg:leading-[60px] text-white lg:text-[#c7804b] lg:[text-shadow:2px_2px_0px_#000]">
              Your Dream Floor Starts with Prestige
            </span>
            
            {/* Part 2 */}
            <span className="block mt-2 lg:mt-0 text-[30px] lg:text-[50px] leading-[1.3] lg:leading-[60px] text-[#c7804b] lg:text-white [text-shadow:2px_2px_0px_#000] lg:[text-shadow:none]">
              Your Vision, Our Precision, Lasting Luxury 
            </span>
          </h2>

          {/* Description */}
          <div className="hidden lg:block mt-6">
            <p className="text-[clamp(1rem,5vw,22px)] mb-[20px] font-medium text-white/90 text-center mx-auto max-w-[800px] leading-relaxed">
              Create a home that feels beautifully crafted from the moment you step inside. Prestige Floor delivers tailored, premium flooring that brings your vision to life with elegance, precision, and enduring luxury.
            </p>
          </div>

          {/* Action Button */}
          <Link href="/pages/request-a-free-measure-quote" className="inline-block mt-4 lg:mt-8 px-[26px] lg:px-[20px] py-[10px] lg:py-[16px] text-[16px] lg:text-[14px] font-medium uppercase tracking-[0.11em] text-white bg-transparent lg:bg-[#c7804b] border-[2px] border-white lg:border-[#c7804b] rounded-[10px] lg:rounded-none transition-colors duration-300 hover:bg-white hover:text-[#c7804b]">
            Book your consultation
          </Link>
          
        </div>
      </div>
    </section>
  );
}
