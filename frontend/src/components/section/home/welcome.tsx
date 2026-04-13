"use client";

import { Container } from "@/components/ui/Container";
import { useEffect, useState, useRef } from "react";

const HERO_SLIDES = [
  "//www.prestigefloor.com.au/cdn/shop/files/banner-bg.jpg?v=1759750505",
  "//www.prestigefloor.com.au/cdn/shop/files/vecteezy_complete-3d-modern-bedroom-interior-featuring-a-bed-with_60815053.jpg?v=1761051730",
  "//www.prestigefloor.com.au/cdn/shop/files/vecteezy_3d-contemporary-walk-in-closet-with-accessory-collection_60815057.jpg?v=1761051730"
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroTypedText, setHeroTypedText] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const heroFullText = "Transform your home in style";

  // Mount animation trigger
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Background Slider Logic
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(slideTimer);
  }, []);

  // Typing effect Logic
  useEffect(() => {
    if (!isMounted) return;
    
    let i = 0;
    const typingTimer = setInterval(() => {
      if (i <= heroFullText.length) {
        setHeroTypedText(heroFullText.substring(0, i));
        i++;
      } else {
        clearInterval(typingTimer);
      }
    }, 100); // slightly faster than 150ms for better UX
    return () => clearInterval(typingTimer);
  }, [isMounted]);

  return (
    <section className="relative w-full max-w-[100vw] flex min-h-[60vh] md:min-h-screen items-center justify-center overflow-hidden bg-transparent pt-[20px] md:pt-[100px] font-sans">
      {/* Slides Backgrounds */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
              currentSlide === idx ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`absolute inset-0 bg-cover bg-bottom origin-bottom-left transition-transform duration-[15000ms] ease-in-out ${
                currentSlide === idx ? "scale-150 -translate-x-[5%]" : "scale-100 translate-x-0"
              }`}
              style={{ backgroundImage: `url(${slide})` }}
            ></div>
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-[1] bg-black/30"></div>

      {/* Content */}
      <div
        className={`relative z-[2] text-center max-w-[734px] px-5 py-10 w-full transition-all duration-[2000ms] delay-300 ease-out ${
          isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-[clamp(2.5rem,5vw,6rem)] font-bold uppercase text-white mb-4 leading-tight">
          {heroTypedText}
          <span
            className={`inline-block w-[clamp(3px,0.5vw,5px)] h-[clamp(2.5rem,5vw,6rem)] bg-white ml-2 align-middle ${
              heroTypedText.length === heroFullText.length ? "animate-pulse" : ""
            }`}
          ></span>
        </h1>
        <p className="text-[clamp(1.2rem,2vw,1.8rem)] text-white/80 font-medium tracking-wide max-w-[610px] mx-auto leading-snug">
          Prestige Floor, the Home of the Best Floors, supplies and installs Australia’s leading flooring brands. Guaranteed and trusted by builders and homeowners.
        </p>
      </div>
    </section>
  );
}

function WelcomeSection() {
  const [typedTextWelcome, setTypedTextWelcome] = useState("");
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(false);
  const welcomeRef = useRef<HTMLDivElement>(null);
  const fullTextWelcome = "Welcome to Prestige Floor";

  useEffect(() => {
    // Shared intersection observer logic
    const observerOptions = { threshold: 0.15 };
    const observerCallback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === welcomeRef.current) {
            setIsWelcomeVisible(true);
            observer.unobserve(entry.target);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (welcomeRef.current) observer.observe(welcomeRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Welcome Typing effect (triggers only when scrolled into view)
    if (!isWelcomeVisible) return;

    let i = 0;
    const typingIntervalWelcome = setInterval(() => {
      if (i <= fullTextWelcome.length) {
        setTypedTextWelcome(fullTextWelcome.substring(0, i));
        i++;
      } else {
        clearInterval(typingIntervalWelcome);
      }
    }, 80);

    return () => clearInterval(typingIntervalWelcome);
  }, [isWelcomeVisible, fullTextWelcome]);

  return (
    <section
      ref={welcomeRef}
      className="relative w-full overflow-hidden bg-[#f5f5f5] py-[40px] lg:py-[90px]"
    >
      <Container className="relative z-10 mx-auto">
        <div className="flex flex-col-reverse items-center justify-center gap-[40px] lg:flex-row-reverse lg:gap-[15px]">
          {/* Right Side: Image */}
          <div className="relative hidden w-full flex-1 overflow-hidden h-full lg:block">
            <img
              src="//www.prestigefloor.com.au/cdn/shop/files/Rectangle_748_ffc960b9-95a1-475b-8ac3-34361aa6ab62.png?v=1760898533&width=800"
              alt="Welcome to Prestige Floor"
              className="h-auto w-full origin-bottom rounded-[2px] object-cover object-bottom animate-[zoomInOut_12s_ease-in-out_infinite_alternate]"
            />
          </div>

          {/* Left Side: Content Box */}
          <div className="w-full flex-1 lg:ml-auto">
            {/* Heading / Typing Subheading */}
            <div className="relative block mb-[20px] lg:inline-block">
              <span className="relative block overflow-hidden align-bottom text-left text-[clamp(2.2rem,5vw,3rem)] font-bold tracking-[0.08em] text-black">
                {typedTextWelcome}
                <span
                  className={`inline-block h-[clamp(2.2rem,5vw,3rem)] w-[3px] ml-1 align-middle ${
                    typedTextWelcome.length === fullTextWelcome.length
                      ? "animate-[pulse_1s_ease-in-out_infinite_alternate]"
                      : ""
                  } ${isWelcomeVisible ? "bg-[#c7804b]" : "bg-transparent"}`}
                ></span>
              </span>

              {/* SVG Decorative Annotation */}
              <svg className="pointer-events-none absolute -top-[16%] left-[21%] hidden h-[100px] w-[100px] overflow-visible lg:block">
                <path
                  d="M160.123 225.796 C201.418 224.618, 237.688 220.691, 265.593 224.023"
                  fill="none"
                  stroke="#dc781e"
                  strokeWidth="2"
                ></path>
                <path
                  d="M265.752 223.591 C230.365 220.798, 197.112 220.614, 162.487 225.556"
                  fill="none"
                  stroke="#dc781e"
                  strokeWidth="2"
                ></path>
              </svg>
            </div>

            {/* Main Content Box */}
            <div
              className={`transform transition-all duration-[1200ms] ease-out lg:my-[40px] lg:bg-white lg:p-[20px] lg:shadow-[0px_5px_30px_0px_rgba(0,0,0,0.1)] ${
                isWelcomeVisible ? "translate-x-0 opacity-100" : "-translate-x-[50px] opacity-0"
              }`}
            >
              <h2 className="mb-[20px] font-bold leading-[1.3]">
                <span className="text-[clamp(1.8rem,5vw,3rem)] text-[#c7804b]">
                  Premium Rugs, Carpet & Flooring
                </span>
              </h2>

              {/* Desktop Text */}
              <div className="hidden space-y-[16px] lg:block">
                <p className="text-[clamp(1rem,5vw,1.8rem)] font-medium leading-[25px] text-black/50">
                  With thousands of projects completed across Greater Sydney, Prestige Floor is the
                  trusted choice for homeowners seeking expert flooring installation and premium
                  supply services.
                </p>
                <p className="text-[clamp(1rem,5vw,1.8rem)] font-medium leading-[25px] text-black/50">
                  We make your journey effortless, guiding you from selecting the perfect flooring
                  to bringing your vision to life.
                </p>
                <p className="text-[clamp(1rem,5vw,1.8rem)] font-medium leading-[25px] text-black/50">
                  Join the many homeowners who trust us to transform their spaces.
                </p>
              </div>

              {/* Mobile Text */}
              <div className="block space-y-[16px] lg:hidden">
                <p className="text-left text-[16px] font-normal leading-[1.3] text-black">
                  With thousands of projects completed across Greater Sydney, Prestige Floor is the
                  trusted choice for homeowners seeking expert flooring installation and premium
                  supply services.
                </p>
                <p className="text-left text-[16px] font-normal leading-[1.3] text-black">
                  We make your journey effortless, guiding you from selecting the perfect flooring
                  to bringing your vision to life.
                </p>
                <p className="text-left text-[16px] font-normal leading-[1.3] text-black">
                  Join the many homeowners who trust us to transform their spaces.
                </p>
              </div>

              {/* Desktop Button */}
              <a
                href="/pages/about-us"
                className="mb-[12px] ml-auto mt-[35px] hidden w-fit border-[2px] border-[#c7804b] bg-[#c7804b] px-[20px] py-[6px] text-[14px] font-medium uppercase tracking-[0.11em] text-white transition-colors duration-300 hover:bg-transparent hover:text-[#c7804b] lg:block"
              >
                About Prestige Floors
              </a>

              {/* Mobile Button */}
              <a
                href="/pages/contact-us"
                className="mx-auto mt-6 block w-fit rounded-[10px] border-[2px] border-[#c7804b] bg-transparent px-[35px] py-[10px] text-[20px] font-medium uppercase tracking-[0.11em] text-[#c7804b] lg:hidden"
              >
                Lets Talk
              </a>
            </div>

            {/* Stats Block */}
            <div
              className={`hidden flex-wrap gap-[20px] transform transition-all delay-[400ms] duration-[1200ms] ease-out lg:flex ${
                isWelcomeVisible ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0"
              }`}
            >
              <div className="min-w-[45%] flex-1">
                <h3 className="mb-2 text-[40px] font-bold uppercase leading-none text-black">
                  30+
                </h3>
                <p className="text-[1.4rem] font-light uppercase leading-[19px] tracking-[0.11em] text-[#9C9C9C]">
                  Years of Experience
                </p>
              </div>
              <div className="min-w-[45%] flex-1">
                <h3 className="mb-2 text-[40px] font-bold uppercase leading-none text-black">
                  10,000+
                </h3>
                <p className="text-[1.4rem] font-light uppercase leading-[19px] tracking-[0.11em] text-[#9C9C9C]">
                  Projects Completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function Welcome() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
    </>
  );
}