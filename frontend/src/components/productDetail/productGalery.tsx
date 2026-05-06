'use client';

import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Thumbs } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Swiper as SwiperType } from 'swiper';

interface ProductImage {
  src: string;
  [key: string]: any;
}

// Cập nhật Interface Props: Nhận index từ Cha truyền xuống
interface ProductGaleryProps {
  images: ProductImage[];
  activeIndex: number;           // Index do Cha quản lý
  setActiveIndex: (index: number) => void; // Hàm để báo cho Cha khi slide thay đổi
}

export default function ProductGalery({ images, activeIndex, setActiveIndex }: ProductGaleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const swiperRef = useRef<SwiperType | null>(null); // Dùng để điều khiển Swiper từ xa

  // LOGIC QUAN TRỌNG: Khi activeIndex từ Cha thay đổi (do chọn màu), Swiper phải nhảy slide
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.activeIndex !== activeIndex) {
      swiperRef.current.slideTo(activeIndex);
    }
  }, [activeIndex]);

  if (!images || images.length === 0) {
    return <div className="aspect-square bg-gray-100 animate-pulse rounded-lg" />;
  }

  return (
    <div className="flex flex-col gap-4 group">
      {/* MAIN SLIDER */}
      <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-white border border-gray-100">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Gán instance vào ref
          spaceBetween={10}
          autoplay={{
            delay: 3500,
            disableOnInteraction: true, // Dừng autoplay khi người dùng tương tác để tránh bị nhảy loạn khi đang chọn màu
          }}
          navigation={{
            prevEl: '.prev-btn',
            nextEl: '.next-btn',
          }}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[Autoplay, Navigation, Thumbs]}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Báo cho Cha khi slide vuốt tay
          className="h-full w-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img.src}
                alt={`Product slide ${index}`}
                className="h-full w-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button className="prev-btn absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all opacity-0 group-hover:opacity-100">
          <ChevronLeft size={20} />
        </button>
        <button className="next-btn absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all opacity-0 group-hover:opacity-100">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* THUMBNAILS SLIDER */}
      <div className="w-full">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={12}
          slidesPerView={6}
          watchSlidesProgress={true}
          modules={[Navigation, Thumbs]}
          className="thumb-swiper"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="cursor-pointer">
              <div
                className={`relative aspect-square w-full overflow-hidden rounded-sm border-2 transition-all
                  ${activeIndex === index ? 'border-black' : 'border-transparent opacity-60 hover:opacity-100'}`}
              >
                <img
                  src={img.src}
                  alt={`Thumbnail ${index}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>          
    </div>
  );
}