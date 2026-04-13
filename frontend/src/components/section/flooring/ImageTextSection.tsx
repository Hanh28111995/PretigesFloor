import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';

interface ImageTextSectionProps {
  mainImage: string;
  overlayImage?: string;
  subheading: string;
  heading: string;
  description: React.ReactNode;
  buttonText: string;
  buttonLink: string;
  reverse?: boolean;
}

export default function ImageTextSection({
  mainImage,
  overlayImage,
  subheading,
  heading,
  description,
  buttonText,
  buttonLink,
  reverse = false,
}: ImageTextSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative pt-[50px] lg:pt-[115px] pb-0 overflow-hidden bg-[#f5f5f5]">
      <Container className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[47px] items-center`}>
          
          {/* Image Column */}
          <div className={`relative overflow-hidden ${reverse ? 'lg:order-last' : ''}`}>
            <div className={`relative ${reverse ? 'lg:pr-[42px]' : 'lg:pl-[42px]'} lg:pb-[14px]`}>
               <img
                  src={mainImage}
                  alt={heading}
                  className="w-full h-auto max-h-[494px] lg:max-h-none lg:h-[700px] object-cover object-bottom rounded-sm origin-bottom animate-[zoomEffect_15s_ease-in-out_infinite_alternate]"
               />
               {/* Overlay Image */}
               {overlayImage && (
                 <div
                   className={`hidden lg:block absolute bottom-0 h-[30%] aspect-[4/5] bg-cover bg-center bg-no-repeat border-2 border-white z-10 transition-all duration-1000 ease-out fill-mode-forwards ${
                     isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[50px]'
                   } ${reverse ? 'right-0' : 'left-0'}`}
                   style={{ backgroundImage: `url(${overlayImage})` }}
                 />
               )}
            </div>
          </div>

          {/* Content Column */}
          <div className={`flex flex-col ${reverse ? 'lg:pr-[47px]' : 'lg:pl-[47px]'}`}>
            <span className={`text-center lg:text-left uppercase font-semibold text-[#C7804B] tracking-[0.08em] mb-2.5 text-[clamp(2rem,5vw,2rem)] transition-all duration-[3s] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[100px]'}`}>
              {subheading}
            </span>
            
            <h2 className="text-center lg:text-left font-medium lg:font-bold leading-[1.3] mb-0 lg:mb-5">
              <span className="text-[#15274d] text-[clamp(3rem,5vw,4rem)]">
                {heading}
              </span>
            </h2>

            <div className="mt-4 lg:mt-0 space-y-4 text-left font-thin lg:font-medium text-[clamp(1rem,4vw,1.8rem)] text-[#000] [&>p]:leading-[25px]">
              {description}
            </div>

            <Link href={buttonLink} className="font-medium text-[14px] tracking-[0.11em] uppercase text-black py-4 underline block mb-8 mt-9 transition-colors duration-300 hover:text-[#c7804b] hover:bg-transparent lg:ml-0 mx-auto w-fit">
              {buttonText}
            </Link>
          </div>

        </div>
      </Container>
      
      {/* Required Keyframes */}
      <style>{`
        @keyframes zoomEffect {
          0% { transform: scale(1); }
          100% { transform: scale(1.2); }
        }
      `}</style>
    </section>
  );
}
