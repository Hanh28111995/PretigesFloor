'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

interface ProductCardProps {
    product: {
        id: number;
        title: string;
        handle: string;
        images: { src: string }[];
        variants: { price: string }[];
        product_type: string;
    };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    // Trích xuất thông số từ Title (Ví dụ: "15mm" hoặc "190W")
    const thickness = product.title.match(/(\d+(?:\/\d+)?mm)/i)?.[0] || "Standard";
    const width = product.title.match(/(\d+W)/i)?.[0]?.replace('W', 'mm Wide') || "";

    // Format giá (Giả sử giá từ Shopify là string số)
    const price = parseFloat(product.variants[0]?.price).toLocaleString('en-AU', {
        style: 'currency',
        currency: 'AUD',
    });

    // Xử lý tên hiển thị (Bỏ bớt các thông số kỹ thuật để tiêu đề gọn hơn)
    const displayTitle = product.title.split('-')[1]?.trim() || product.title.split(' ').slice(2).join(' ') || product.title;

    return (
        <div className="bg-transparent overflow-hidden flex flex-col h-full px-3">
            {/* Image Container */}
            <div className="group relative aspect-[4/3] overflow-hidden bg-gray-100 border border-gray-100 rounded-[7px] 
            shadow-[0_4px_4px_4px_rgba(0,0,0,0.25)]">
                <Image
                    src={product.images[0]?.src || '/placeholder-floor.jpg'}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* <div className="absolute bottom-3 right-3 flex flex-col gap-1">
                <span className="bg-white/90 backdrop-blur-sm text-[10px] font-bold px-2 py-1 rounded-sm shadow-sm text-gray-700">
                    {thickness} {width && `- ${width}`}
                </span>
            </div> */}

                {/* Overlay khi hover */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" >
                    <Image
                        src={product.images[1]?.src || '/placeholder-floor.jpg'}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1 items-center text-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-2  transition-colors line-clamp-1 uppercase">
                    {displayTitle}
                </h3>
                <span className="text-[10px] text-gray-800 mb-2">
                    {product.product_type}
                </span>

                {/* <div className="mt-auto pt-4 w-full border-t border-gray-50 flex items-center justify-between">
                    <div className="flex flex-col items-start">
                        <span className="text-[9px] text-gray-400 uppercase font-bold">RRP From</span>
                        <span className="text-lg font-black text-gray-900">{price} <span className="text-[10px] font-normal text-gray-500">/m²</span></span>
                    </div>
                    <button className="p-2 rounded-full bg-gray-50 text-gray-400 hover:bg-[#AD6F10] hover:text-white transition-all shadow-sm">
                        <ExternalLink size={18} />
                    </button>
                </div> */}
            </div>
        </div >
    );
};

export default ProductCard;