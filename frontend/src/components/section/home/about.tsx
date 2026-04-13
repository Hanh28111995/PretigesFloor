"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export const About = () => {
    const refs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('translate-y-0', 'opacity-100');
                        entry.target.classList.remove('translate-y-10', 'opacity-0');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        refs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const addToRefs = (el: HTMLElement | null) => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    };

    return (
        <section className="font-sans overflow-hidden w-full">
            {/* About Split Section */}
            <section className="bg-[#f5f5f5] py-12 lg:py-[50px]">
                <div className="container mx-auto px-6 max-w-[1200px]">
                    <div className="flex flex-col lg:flex-row items-start gap-[40px] lg:gap-[100px]">
                        {/* Image Column */}
                        <div
                            ref={addToRefs}
                            className="w-full lg:w-1/2 relative transition-all duration-1000 transform translate-y-10 opacity-0 rounded-sm overflow-hidden"
                        >
                            <img
                                src="//www.prestigefloor.com.au/cdn/shop/files/image_25.png?v=1762172833&width=800"
                                alt="Main Image"
                                className="w-full h-auto max-h-[494px] object-cover origin-bottom transition-transform duration-[3000ms] hover:scale-125"
                            />
                        </div>

                        {/* Text Column */}
                        <div
                            ref={addToRefs}
                            className="w-full lg:w-1/2 transition-all duration-1000 delay-200 transform translate-y-10 opacity-0 text-left"
                        >
                            <span className="text-[clamp(1.5rem,5vw,2rem)] font-semibold tracking-[0.08em] uppercase text-[#C7804B] mb-[10px] block text-center lg:text-left">
                                Australian Small Business CHAMPIONS
                            </span>
                            <h2 className="text-[clamp(2.5rem,5vw,3rem)] font-bold mb-5 text-black leading-[1.3] text-center lg:text-left">
                                Awards 2025 Winner
                            </h2>
                            <div className="text-black font-medium text-[clamp(1rem,4vw,1.2rem)] space-y-4 mb-8 leading-[25px] font-light lg:font-medium">
                                <p>
                                    Prestige Floor, winner of the 2025 Australian Small Business Champions Award,
                                    is dedicated to quality flooring solutions. With decades of expertise, we offer
                                    precise installations in hybrid, timber, vinyl, and carpet, blending style and
                                    durability. Experience the difference with our trusted, Australian-owned store.
                                </p>
                            </div>
                            <Link
                                href="/pages/about-us"
                                className="block mt-9 mb-8 font-medium text-[14px] mx-auto lg:mx-0 tracking-[0.11em] uppercase text-black underline underline-offset-4 hover:text-[#c7804b] hover:bg-transparent transition duration-300 w-fit"
                            >
                                About us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features 3-Column Section */}
            <section className="bg-[#f1f1f1] py-[35px]">
                <div className="container mx-auto px-6 max-w-[1200px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[27px]">
                        {/* Feature 1 */}
                        <div
                            ref={addToRefs}
                            className="bg-transparent p-5 shadow-[0_0_16px_6px_#e5e5e6] transition-all duration-1000 transform translate-y-10 opacity-0"
                        >
                            <div className="flex flex-row items-center gap-[15px] pb-4 border-b border-white lg:border-none">
                                <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center p-[10px] shrink-0">
                                    <img
                                        src="//www.prestigefloor.com.au/cdn/shop/files/quality_6403994_small.png?v=1765800907"
                                        alt="High Quality"
                                        className="max-w-full max-h-full align-middle"
                                    />
                                </div>
                                <div className="text-center">
                                    <p className="font-bold text-[clamp(1rem,5vw,26px)] tracking-[0.11em] uppercase text-black leading-tight text-center">
                                        HIGH QUALITY
                                    </p>
                                    <p className="font-medium text-black/50 text-[clamp(1rem,5vw,20px)] leading-tight mt-1 text-center capitalize">
                                        100% Ethically
                                    </p>
                                </div>
                            </div>
                            <div className="mt-[23px]">
                                <p className="text-black/70 text-[clamp(1rem,5vw,14px)] tracking-[0.11em] capitalize font-normal text-left">
                                    Enjoy premium quality at competitive prices at Prestige Floor, luxury without breaking the bank.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div
                            ref={addToRefs}
                            className="bg-transparent p-5 shadow-[0_0_16px_6px_#e5e5e6] transition-all duration-1000 delay-200 transform translate-y-10 opacity-0"
                        >
                            <div className="flex flex-row items-center gap-[15px] pb-4 border-b border-white lg:border-none">
                                <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center p-[10px] shrink-0">
                                    <img
                                        src="//www.prestigefloor.com.au/cdn/shop/files/team_95bf43a9-1875-4459-b34b-37e3f936a0dd_small.png?v=1765800907"
                                        alt="Expert team"
                                        className="max-w-full max-h-full align-middle"
                                    />
                                </div>
                                <div className="text-center">
                                    <p className="font-bold text-[clamp(1rem,5vw,26px)] tracking-[0.11em] uppercase text-black leading-tight text-center">
                                        Expert team
                                    </p>
                                    <p className="font-medium text-black/50 text-[clamp(1rem,5vw,20px)] leading-tight mt-1 text-center capitalize">
                                        Decades of Expertise
                                    </p>
                                </div>
                            </div>
                            <div className="mt-[23px]">
                                <p className="text-black/70 text-[clamp(1rem,5vw,14px)] tracking-[0.11em] capitalize font-normal text-left">
                                    Our expert team is dedicated to delivering top-quality craftsmanship and attention to detail.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div
                            ref={addToRefs}
                            className="bg-transparent p-5 shadow-[0_0_16px_6px_#e5e5e6] transition-all duration-1000 delay-400 transform translate-y-10 opacity-0"
                        >
                            <div className="flex flex-row items-center gap-[15px] pb-4 border-b border-white lg:border-none border-b-0">
                                <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center p-[10px] shrink-0">
                                    <img
                                        src="//www.prestigefloor.com.au/cdn/shop/files/award_small.png?v=1765800907"
                                        alt="AWARD WINNING"
                                        className="max-w-full max-h-full align-middle"
                                    />
                                </div>
                                <div className="text-center">
                                    <p className="font-bold text-[clamp(1rem,5vw,26px)] tracking-[0.11em] uppercase text-black leading-tight text-center">
                                        AWARD WINNING
                                    </p>
                                    <p className="font-medium text-black/50 text-[clamp(1rem,5vw,20px)] leading-tight mt-1 text-center capitalize">
                                        Australian Awards
                                    </p>
                                </div>
                            </div>
                            <div className="mt-[23px]">
                                <p className="text-black/70 text-[clamp(1rem,5vw,14px)] tracking-[0.11em] capitalize font-normal text-left">
                                    When you choose us, you’re choosing a company that sets the standard for excellence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};