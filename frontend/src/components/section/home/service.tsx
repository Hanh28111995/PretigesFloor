import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

export const Service = () => {
    const servicesRef = useRef<HTMLElement>(null);
    const [isServicesVisible, setIsServicesVisible] = useState(false);

    const bannerRef = useRef<HTMLElement>(null);
    const [isBannerVisible, setIsBannerVisible] = useState(false);

    // Globals array observer setup for staggered animations
    const revealRefs = useRef<(HTMLElement | HTMLDivElement | HTMLSpanElement | HTMLAnchorElement)[]>([]);
    const addToRefs = (el: HTMLElement | HTMLDivElement | HTMLSpanElement | HTMLAnchorElement | null) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsServicesVisible(true);
                    observer.disconnect(); // only animate once
                }
            },
            { threshold: 0.1 }
        );

        if (servicesRef.current) {
            observer.observe(servicesRef.current);
        }

        const bannerObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsBannerVisible(true);
                    bannerObserver.disconnect(); // only animate once
                }
            },
            { threshold: 0.1 }
        );

        if (bannerRef.current) {
            bannerObserver.observe(bannerRef.current);
        }

        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove("translate-y-10", "opacity-0", "-translate-x-10");
                        entry.target.classList.add("translate-y-0", "opacity-100", "translate-x-0");
                        revealObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        revealRefs.current.forEach((el) => {
            if (el) revealObserver.observe(el);
        });

        return () => {
            observer.disconnect();
            bannerObserver.disconnect();
            revealObserver.disconnect();
        };
    }, []);

    return (
        <>
            <section
                ref={servicesRef}
                className="relative hidden w-full bg-[#eae8e2] px-5 py-[59px] pb-[118px] lg:block"
            >
                <div className="mx-auto max-w-[1200px] w-full">
                    {/* Heading Area */}
                    <div
                        className={`transform transition-all duration-[1200ms] ease-out ${isServicesVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}
                    >
                        <div className="mb-[10px] text-center text-[clamp(1rem,5vw,4rem)] font-bold uppercase tracking-[0.08em] text-black">
                            Our Services
                        </div>
                        <div className="mb-[10px] text-center text-[25px] font-bold text-black">
                            Bespoke Floors. Unmatched Craftsmanship. Pure&nbsp;Prestige.
                        </div>
                        <div className="mb-[30px] text-center text-black/70 font-medium max-w-[900px] mx-auto">
                            Step into spaces where elegance meets perfection, and every detail is thoughtfully
                            designed. Our floors don't just cover rooms — they define them, leaving a lasting
                            impression of style and sophistication. Experience the art of flooring at its finest,
                            where quality, design, and legacy come together seamlessly.
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
                        {/* Intro Card */}
                        <div
                            className={`flex flex-col items-start bg-transparent p-0 transform transition-all delay-[200ms] duration-[1200ms] ease-out ${isServicesVisible ? "translate-x-0 opacity-100" : "-translate-x-[30px] opacity-0"
                                }`}
                        >
                            <h2 className="mt-[8px] w-[87%] text-[clamp(3rem,5vw,5rem)] font-bold leading-[1.1] text-black">
                                Transform your home, in Style.
                            </h2>
                            <p className="mt-4 text-[clamp(1rem,5vw,1.8rem)] font-medium text-black/50">
                                Home of the best floors, where every step feels like luxury’s secret handshake. Step
                                into a legacy crafted with precision, passion, and pure Prestige magic.
                            </p>
                        </div>

                        {/* Service Card 1 */}
                        <div
                            className={`group flex cursor-pointer flex-col items-start bg-white p-[36px_20px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] transform transition-all delay-[300ms] duration-[800ms] ease-out hover:bg-[#c7804b] ${isServicesVisible ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0"
                                }`}
                        >
                            <div className="mb-[16px] flex w-full flex-row lg:flex-col lg:items-start items-center gap-[10px]">
                                <div className="flex h-[50px] w-[50px] flex-col items-center justify-center rounded-full bg-[#F4F4F4] p-[10px]">
                                    <img
                                        src="//www.prestigefloor.com.au/cdn/shop/files/shopping_14075717.png?v=1764015640&width=80"
                                        alt="Supply"
                                        className="w-full"
                                    />
                                </div>
                                <h3 className="text-[clamp(1.2rem,5vw,2rem)] font-extrabold uppercase leading-none text-[#c7804b] transition-colors duration-300 group-hover:text-white">
                                    Floor Supply
                                </h3>
                            </div>
                            <p className="mb-[16px] text-left text-[clamp(1rem,5vw,1.6rem)] text-black/60 transition-colors duration-300 group-hover:text-white">
                                Lasting Confidence. Premium floors, simplified. At Prestige Floor, Discover Australia’s
                                finest selection of hybrid, engineered timber, laminate, and vinyl floors. We source
                                and supply high-quality flooring across every budget and style.
                            </p>
                        </div>

                        {/* Service Card 2 */}
                        <div
                            className={`group flex cursor-pointer flex-col items-start bg-white p-[36px_20px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] transform transition-all delay-[400ms] duration-[800ms] ease-out hover:bg-[#c7804b] ${isServicesVisible ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0"
                                }`}
                        >
                            <div className="mb-[16px] flex w-full flex-row lg:flex-col lg:items-start items-center gap-[10px]">
                                <div className="flex h-[50px] w-[50px] flex-col items-center justify-center rounded-full bg-[#F4F4F4] p-[10px]">
                                    <img
                                        src="//www.prestigefloor.com.au/cdn/shop/files/man_13598314_1.svg?v=1759788729&width=80"
                                        alt="Projects"
                                        className="w-full"
                                    />
                                </div>
                                <h3 className="text-[clamp(1.2rem,5vw,2rem)] font-extrabold uppercase leading-none text-[#c7804b] transition-colors duration-300 group-hover:text-white">
                                    Flooring Projects
                                </h3>
                            </div>
                            <p className="mb-[16px] text-left text-[clamp(1rem,5vw,1.6rem)] text-black/60 transition-colors duration-300 group-hover:text-white">
                                Whether you’re building, renovating, extending, or replacing, we handle the full
                                project from start to finish. From one-to-one meetings and precise quotations, to
                                floor levelling, skirtings, custom stair nosings, and flawless installation, every
                                detail is covered.
                            </p>
                        </div>

                        {/* Service Card 3 */}
                        <div
                            className={`group flex cursor-pointer flex-col items-start bg-white p-[36px_20px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] transform transition-all delay-[500ms] duration-[800ms] ease-out hover:bg-[#c7804b] ${isServicesVisible ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0"
                                }`}
                        >
                            <div className="mb-[16px] flex w-full flex-row lg:flex-col lg:items-start items-center gap-[10px]">
                                <div className="flex h-[50px] w-[50px] flex-col items-center justify-center rounded-full bg-[#F4F4F4] p-[10px]">
                                    <img
                                        src="//www.prestigefloor.com.au/cdn/shop/files/business_13667172.png?v=1764069701&width=80"
                                        alt="Trade"
                                        className="w-full"
                                    />
                                </div>
                                <h3 className="text-[clamp(1.2rem,5vw,2rem)] font-extrabold uppercase leading-none text-[#c7804b] transition-colors duration-300 group-hover:text-white">
                                    Trade Services
                                </h3>
                            </div>
                            <p className="mb-[16px] text-left text-[clamp(1rem,5vw,1.6rem)] text-black/60 transition-colors duration-300 group-hover:text-white">
                                Prestige Floor is your trusted trade partner. We understand timelines, budgets, and
                                client expectations, and we deliver every time. From bulk supply to full-scale
                                installations, we provide the expertise, coordination, and consistency you need.
                            </p>
                        </div>

                        {/* Service Card 4 */}
                        <div
                            className={`group flex cursor-pointer flex-col items-start bg-white p-[36px_20px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] transform transition-all delay-[600ms] duration-[800ms] ease-out hover:bg-[#c7804b] ${isServicesVisible ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0"
                                }`}
                        >
                            <div className="mb-[16px] flex w-full flex-row lg:flex-col lg:items-start items-center gap-[10px]">
                                <div className="flex h-[50px] w-[50px] flex-col items-center justify-center rounded-full bg-[#F4F4F4] p-[10px]">
                                    <img
                                        src="//www.prestigefloor.com.au/cdn/shop/files/Group.svg?v=1759788729&width=80"
                                        alt="Stairs"
                                        className="w-full"
                                    />
                                </div>
                                <h3 className="text-[clamp(1.2rem,5vw,2rem)] font-extrabold uppercase leading-none text-[#c7804b] transition-colors duration-300 group-hover:text-white">
                                    Custom Stairs
                                </h3>
                            </div>
                            <p className="mb-[16px] text-left text-[clamp(1rem,5vw,1.6rem)] text-black/60 transition-colors duration-300 group-hover:text-white">
                                Your home is unique, and your floors should be too. We craft custom-made stair nosings
                                and bespoke flooring solutions tailored to your vision. Any staircase, any flooring,
                                any design you dream it, and our team will deliver it with precision, safety, and
                                style.
                            </p>
                        </div>

                        {/* Service Card 5 */}
                        <div
                            className={`group flex cursor-pointer flex-col items-start bg-white p-[36px_20px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] transform transition-all delay-[700ms] duration-[800ms] ease-out hover:bg-[#c7804b] ${isServicesVisible ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0"
                                }`}
                        >
                            <div className="mb-[16px] flex w-full flex-row lg:flex-col lg:items-start items-center gap-[10px]">
                                <div className="flex h-[50px] w-[50px] flex-col items-center justify-center rounded-full bg-[#F4F4F4] p-[10px]">
                                    <img
                                        src="//www.prestigefloor.com.au/cdn/shop/files/building_17258931_1.svg?v=1759788729&width=80"
                                        alt="Commercial"
                                        className="w-full"
                                    />
                                </div>
                                <h3 className="text-[clamp(1.2rem,5vw,2rem)] font-extrabold uppercase leading-none text-[#c7804b] transition-colors duration-300 group-hover:text-white">
                                    Commercial
                                </h3>
                            </div>
                            <p className="mb-[16px] text-left text-[clamp(1rem,5vw,1.6rem)] text-black/60 transition-colors duration-300 group-hover:text-white">
                                Your business deserves more than standard. Our expert commercial team guides you from
                                start to finish, selecting the right materials, managing the process, and installing
                                with absolute precision. We don’t just deliver floors; we deliver trust.
                            </p>
                        </div>

                        {/* Service Card 6 */}
                        <div
                            className={`group flex cursor-pointer flex-col items-start bg-white p-[36px_20px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] transform transition-all delay-[800ms] duration-[800ms] ease-out hover:bg-[#c7804b] ${isServicesVisible ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0"
                                }`}
                        >
                            <div className="mb-[16px] flex w-full flex-row lg:flex-col lg:items-start items-center gap-[10px]">
                                <div className="flex h-[50px] w-[50px] flex-col items-center justify-center rounded-full bg-[#F4F4F4] p-[10px]">
                                    <img
                                        src="//www.prestigefloor.com.au/cdn/shop/files/arrow_12005647.png?v=1764016035&width=80"
                                        alt="Suites"
                                        className="w-full"
                                    />
                                </div>
                                <h3 className="text-[clamp(1.2rem,5vw,2rem)] font-extrabold uppercase leading-none text-[#c7804b] transition-colors duration-300 group-hover:text-white">
                                    Suites & Fit-Outs
                                </h3>
                            </div>
                            <p className="mb-[16px] text-left text-[clamp(1rem,5vw,1.6rem)] text-black/60 transition-colors duration-300 group-hover:text-white">
                                Every fit-out tells a story, and your flooring sets the tone. We provide tailored
                                solutions for suites and fit-outs that balance durability, design, and function. From
                                planning to installation, our floors give your space the finishing touch it deserves.
                            </p>
                        </div>

                        {/* Service Card 7 */}
                        <div
                            className={`group flex cursor-pointer flex-col items-start bg-white p-[36px_20px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] transform transition-all delay-[900ms] duration-[800ms] ease-out hover:bg-[#c7804b] ${isServicesVisible ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0"
                                }`}
                        >
                            <div className="mb-[16px] flex w-full flex-row lg:flex-col lg:items-start items-center gap-[10px]">
                                <div className="flex h-[50px] w-[50px] flex-col items-center justify-center rounded-full bg-[#F4F4F4] p-[10px]">
                                    <img
                                        src="//www.prestigefloor.com.au/cdn/shop/files/insurance_4460681_1.svg?v=1759788728&width=80"
                                        alt="Insurance"
                                        className="w-full"
                                    />
                                </div>
                                <h3 className="text-[clamp(1.2rem,5vw,2rem)] font-extrabold uppercase leading-none text-[#c7804b] transition-colors duration-300 group-hover:text-white">
                                    Insurance Work
                                </h3>
                            </div>
                            <p className="mb-[16px] text-left text-[clamp(1rem,5vw,1.6rem)] text-black/60 transition-colors duration-300 group-hover:text-white">
                                When the unexpected happens, we make flooring stress-free. From assessments to
                                restoration, we handle insurance projects quickly and carefully. With Prestige Floor,
                                you’ll have peace of mind knowing your floors are restored by an award-winning team.
                            </p>
                        </div>

                        {/* Service Card 8 */}
                        <div
                            className={`group flex cursor-pointer flex-col items-start bg-white p-[36px_20px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] transform transition-all delay-[1000ms] duration-[800ms] ease-out hover:bg-[#c7804b] ${isServicesVisible ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0"
                                }`}
                        >
                            <div className="mb-[16px] flex w-full flex-row lg:flex-col lg:items-start items-center gap-[10px]">
                                <div className="flex h-[50px] w-[50px] flex-col items-center justify-center rounded-full bg-[#F4F4F4] p-[10px]">
                                    <img
                                        src="//www.prestigefloor.com.au/cdn/shop/files/wood_7371363.png?v=1764070177&width=80"
                                        alt="Repairs"
                                        className="w-full"
                                    />
                                </div>
                                <h3 className="text-[clamp(1.2rem,5vw,2rem)] font-extrabold uppercase leading-none text-[#c7804b] transition-colors duration-300 group-hover:text-white">
                                    Repairs & Extensions
                                </h3>
                            </div>
                            <p className="mb-[16px] text-left text-[clamp(1rem,5vw,1.6rem)] text-black/60 transition-colors duration-300 group-hover:text-white">
                                Don’t replace what can be perfected. Prestige Floor specialises in precise repairs and
                                seamless extensions that blend new and existing floors into one flawless finish. Our
                                craftsmanship revives old surfaces and extends new ones without compromise.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Banner Section */}
            <section
                ref={bannerRef}
                className="relative w-full overflow-hidden bg-[url('//www.prestigefloor.com.au/cdn/shop/files/Rectangle-13.webp?v=1761228837&width=1600')] bg-cover bg-fixed bg-center py-[40px] lg:py-[127px] lg:pb-[89px]"
            >
                {/* Overlay */}
                <div className="absolute inset-0 z-0 bg-black/40"></div>

                <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center px-5 text-center">
                    <h2 className="text-[36px] font-medium leading-[1.3] lg:text-[50px] lg:leading-[60px]">
                        <span
                            className={`block transform text-white transition-all duration-[1000ms] ease-out lg:text-[#c7804b] lg:drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] ${isBannerVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
                                }`}
                        >
                            Home of Australia’s Finest Floors
                        </span>
                        <span
                            className={`block transform text-[30px] text-[#c7804b] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all delay-[200ms] duration-[1000ms] ease-out lg:inline lg:text-[50px] lg:text-white lg:drop-shadow-none ${isBannerVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
                                }`}
                        >
                            Crafted for the Ultimate Bespoke Experience
                        </span>
                    </h2>

                    <div
                        className={`mt-5 hidden max-w-[1200px] transform text-center text-[clamp(1rem,5vw,24px)] font-medium text-white/90 transition-all delay-[400ms] duration-[1000ms] ease-out lg:block ${isBannerVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}
                    >
                        <p>
                            Precision, elegance, and style in every plank, designed to inspire and built
                            to last. At Prestige Floor, we don’t just lay floors, we create spaces that
                            command attention, reflect your taste, and build legacies that endure.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Approach Section */}
            <section
                className="relative bg-cover bg-center py-20 lg:py-32 bg-[#F9F9F9] overflow-hidden w-full"
            >
                {/* Decorative Pattern Image Overlay (optional) */}
                <div
                    ref={addToRefs}
                    className="absolute left-0 top-0 w-[50vw] h-40  opacity-50 pointer-events-none transition-all duration-[1200ms] transform -translate-x-10 delay-[300ms] left-4 w-[calc(100%-32px)] h-40 sm:left-8 sm:w-[400px] sm:h-[200px] md:left-[64px] md:w-[540px] md:h-[300px]"
                    style={{
                        backgroundImage: "url('https://www.prestigefloor.com.au/cdn/shop/files/bg-pattern_8c2bcc08-ff53-4ddd-a84b-b60e005a4617.png?v=1759794613')",
                    }}
                ></div>

                <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
                    <div className="mb-16 lg:mb-24 text-center max-w-3xl mx-auto flex flex-col items-center">
                        <div
                            ref={addToRefs}
                            className="text-[clamp(1.5rem,5vw,2rem)] font-bold tracking-[0.08em] text-black uppercase mb-6 transition-all duration-1000 transform translate-y-10 opacity-0 delay-[200ms] ease-out"
                        >
                            Our Approach
                        </div>
                        <div
                            ref={addToRefs}
                            className="text-black/70 text-[clamp(1rem,4vw,1.3rem)] font-medium leading-relaxed transition-all duration-1000 transform translate-y-10 opacity-0 delay-[300ms] ease-out"
                        >
                            <p>
                                At Prestige Floor, we don’t just install floors; we create bespoke, luxurious spaces.
                                With top brands and expert installation, we bring style and precision to every project.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                        {/* Left Side: Text and Bullets */}
                        <div className="w-full lg:w-1/2 flex flex-col space-y-10">
                            <div className="space-y-10">
                                {/* Bullet 1 */}
                                <div
                                    ref={addToRefs}
                                    className="flex flex-col border-l-[3px] border-[#c7804b] pl-6 lg:pl-10 transition-all duration-1000 transform translate-y-10 opacity-0 delay-[250ms] ease-out hover:border-black transition-colors"
                                >
                                    <div className="text-[12px] font-bold text-[#c7804b] tracking-[0.15em] uppercase mb-1">
                                        INSPIRATION
                                    </div>
                                    <div className="text-[20px] lg:text-[24px] font-bold uppercase tracking-wide text-black mb-3">
                                        IGNITE YOUR INSPIRATION
                                    </div>
                                    <div className="text-gray-600 leading-relaxed font-medium text-[15px] lg:text-[17px]">
                                        Step into limitless inspiration. From new builds to renovations and extensions,
                                        Prestige Floor delivers premium flooring and expert installation, turning your vision
                                        into a luxurious reality.
                                    </div>
                                </div>

                                {/* Bullet 2 */}
                                <div
                                    ref={addToRefs}
                                    className="flex flex-col border-l-[3px] border-[#c7804b] pl-6 lg:pl-10 transition-all duration-1000 transform translate-y-10 opacity-0 delay-[300ms] ease-out hover:border-black transition-colors"
                                >
                                    <div className="text-[12px] font-bold text-[#c7804b] tracking-[0.15em] uppercase mb-1">
                                        DESIGN
                                    </div>
                                    <div className="text-[20px] lg:text-[24px] font-bold uppercase tracking-wide text-black mb-3">
                                        DESIGN YOUR DREAM FLOOR
                                    </div>
                                    <div className="text-gray-600 leading-relaxed font-medium text-[15px] lg:text-[17px]">
                                        Where precision meets personality. We tailor every detail, from custom skirtings to
                                        elegant stair nosings, ensuring a flawless floor that reflects your style.
                                    </div>
                                </div>

                                {/* Bullet 3 */}
                                <div
                                    ref={addToRefs}
                                    className="flex flex-col border-l-[3px] border-[#c7804b] pl-6 lg:pl-10 transition-all duration-1000 transform translate-y-10 opacity-0 delay-[350ms] ease-out hover:border-black transition-colors"
                                >
                                    <div className="text-[12px] font-bold text-[#c7804b] tracking-[0.15em] uppercase mb-1">
                                        LEGACY
                                    </div>
                                    <div className="text-[20px] lg:text-[24px] font-bold uppercase tracking-wide text-black mb-3">
                                        BRING YOUR LEGACY
                                    </div>
                                    <div className="text-gray-600 leading-relaxed font-medium text-[15px] lg:text-[17px]">
                                        Our expert installers create stunning, durable floors that stand the test of time.
                                        Trusted by homeowners, your home becomes a lasting symbol of luxury.
                                    </div>
                                </div>
                            </div>

                            <Link
                                href="/pages/request-a-free-measure-quote"
                                ref={addToRefs}
                                className="inline-block px-10 py-4 font-bold uppercase tracking-[0.12em] text-[14px] bg-black text-white hover:bg-[#c7804b] transition-all duration-300 w-fit transform translate-y-10 opacity-0 delay-[400ms] ease-out shadow-lg hover:shadow-none"
                            >
                                Lets Get In Touch
                            </Link>
                        </div>

                        {/* Right Side: Image */}
                        <div
                            ref={addToRefs}
                            className="w-full lg:w-1/2 relative transition-all duration-[1200ms] transform translate-y-10 opacity-0 delay-[300ms] ease-out"
                        >
                            <div className="relative group overflow-hidden rounded-[2px] shadow-2xl">
                                <img
                                    src="https://www.prestigefloor.com.au/cdn/shop/files/welcome-overlap_d95f2c56-e5fd-48f7-afa6-15883a13d75e.jpg?v=1762172130&width=800"
                                    alt="Our Approach Luxury Flooring"
                                    className="w-full h-auto max-h-[650px] object-cover transition-transform duration-[4000ms] ease-out group-hover:scale-[1.08] origin-center"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Service;
