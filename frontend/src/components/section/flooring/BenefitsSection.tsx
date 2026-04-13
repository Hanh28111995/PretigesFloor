import React, { useEffect, useRef, useState } from 'react';

export default function BenefitsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      title: "Durability",
      description: "Firstly, durability is a key feature of our options. Designed to withstand everyday wear and tear, they ensure longevity and continued performance."
    },
    {
      title: "Aesthetic Appeal",
      description: "Additionally, we offer a range of designs that enhance the visual appeal of any space, whether you prefer modern minimalism or classic elegance."
    },
    {
      title: "Easy Maintenance",
      description: "Moreover, our products are remarkably easy to maintain. This means you can save time and effort, as cleaning and upkeep are straightforward tasks."
    },
    {
      title: "Comfort",
      description: "Finally, you can enjoy the exceptional comfort of our soft carpets or the sophisticated elegance of smooth hardwood underfoot."
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('//www.prestigefloor.com.au/cdn/shop/files/Rectangle_748_1.png?v=1760224190&width=1600')" }}
    >
      {/* Dark Overlay to make text readable */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">

        {/* Header Section */}
        <div className={`transition-all duration-[1.5s] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className="uppercase font-semibold text-[#C7804B] tracking-[0.08em] text-lg lg:text-xl block mb-6 drop-shadow-[0_5px_10px_rgba(0,0,0,0.8)]">
            WHY CHOOSE Prestige floor
          </span>
          <h2 className="text-4xl lg:text-[50px] font-bold leading-tight mb-16 text-white drop-shadow-[0_5px_10px_rgba(0,0,0,0.8)]">
            <span className="text-[#C78D48] brightness-110">Benefits of Our Flooring</span>
            <span className="text-white"> Options For Your Home</span>
          </h2>
        </div>

        {/* 4-Column Grid for Benefits */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 transition-all duration-[1.5s] delay-[400ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {benefits.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:-translate-y-3 transition-transform duration-500 cursor-default shadow-xl"
            >
              {/* Top Accent Line */}
              <div className="w-16 h-1 bg-[#C7804B] mb-6 rounded-full mx-auto"></div>

              <h4 className="text-2xl font-bold mb-4 text-white uppercase tracking-wider">
                {item.title}
              </h4>

              <p className="text-gray-200 leading-relaxed font-light text-[1rem]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
