"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Container } from "../ui/Container";


const PARTNERS = [
  { src: "//www.prestigefloor.com.au/cdn/shop/files/preference-floors-logo.png?v=1693065300", alt: "Preference Floors" },
  { src: "//www.prestigefloor.com.au/cdn/shop/files/2560px-Quick_Step_Logo_svg.png?v=1716982032", alt: "Quick Step Logo" },
  { src: "//www.prestigefloor.com.au/cdn/shop/files/logo_814d7803-bd36-4aad-a241-f59d1c5b4659.png?v=1722344791", alt: "Partner Logo" },
  { src: "//www.prestigefloor.com.au/cdn/shop/files/ATFA-member-ISO-logo-rgb.png?v=1765804319", alt: "ATFA Member ISO" },
  { src: "//www.prestigefloor.com.au/cdn/shop/files/Homepage_OrigLogo_resizeimage.webp?v=1735039172", alt: "Original Logo" },
  { src: "//www.prestigefloor.com.au/cdn/shop/files/Shopping_Cart.svg?v=1722344574", alt: "Partner Box" }
];
const extendedPartners = [...PARTNERS, ...PARTNERS];

export function PartnerCarousel() {
  return (
    <section className="bg-[#f1f1f1] py-16 w-full overflow-hidden">
      <Container className="px-4 md:px-8 lg:px-[10rem]">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40} // Khoảng cách mặc định (Mobile)
          slidesPerView={2} // Số lượng hiển thị mặc định (Mobile)
          loop={true}       // Chạy vô tận
          speed={1000}      // Tốc độ lướt (1 giây)
          autoplay={{
            delay: 1000,    // Đợi 3 giây rồi nhảy
            disableOnInteraction: false,
          }}
          // Logic Responsive thay cho Grid/Col
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5, // Desktop hiển thị 6 cái
              spaceBetween: 50, // Lề giữa các item 100px
            },
          }}
          className="w-full flex items-center"
        >
          {extendedPartners.map((partner, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <div className="w-full h-[120px] flex items-center justify-center mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="h-full w-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}