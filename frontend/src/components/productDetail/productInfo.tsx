'use client';

import React, { useState } from 'react';
import { Calculator, FileText, Heart, Share2 } from 'lucide-react';

// Khai báo Interface chuẩn để khớp với Cha (ProductDetailClient)
interface ProductInfoProps {
  product: any;
  selectedVariant: any;
  onVariantChange: (variant: any) => void;
}

export default function ProductInfo({ product, selectedVariant, onVariantChange }: ProductInfoProps) {
  // 1. Logic tính toán diện tích & số hộp
  const [area, setArea] = useState<number>(1);
  const [addWastage, setAddWastage] = useState(true);
  const boxSize = product.perBox || 1.805;

  const totalAreaNeeded = addWastage ? area * 1.1 : area;
  const boxesNeeded = Math.ceil(totalAreaNeeded / boxSize);
  const actualCoveredArea = (boxesNeeded * boxSize).toFixed(3);

  return (
    <div className="flex flex-col gap-y-4">
      {/* Brand & Title */}
      <div className="border-b pb-4">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
          Vendor: <span className="text-black font-semibold">{product.vendor || 'Preference floor'}</span>
        </p>
        <h1 className="text-3xl font-bold text-gray-900 uppercase tracking-tight">
          {product.title}
        </h1>
      </div>

      {/* Description */}
      <div className="text-sm text-gray-600 leading-relaxed italic">
        {product.description}
      </div>

      {/* Warning Policy */}
      <div className="bg-blue-50 p-4 border-l-4 border-blue-500 text-[13px] text-blue-800">
        Please note, supplier policies prevent us from displaying pricing online.
        For pricing inquiries, contact us at <span className="font-bold underline">1300 488 111</span>.
      </div>

      {/* AREA CALCULATOR SECTION */}
      <div className="bg-gray-50 p-6 rounded-sm border border-gray-100 flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row justify-between gap-6 bg-white p-4 rounded-sm border border-gray-100 shadow-sm">
          <div className="flex items-center justify-center gap-3 bg-[rgb(204,139,101)] text-white px-8 py-4 text-sm font-bold uppercase tracking-[0.2em]">
            <Calculator size={18} />
            <span>Area Calculator</span>
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-[11px] font-extrabold text-gray-400 uppercase tracking-widest">
              Enter Total Area Needed (M²)
            </label>
            <div className="flex items-center gap-3">
              <input
                min="1"
                className="w-28 p-3 border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-[rgb(204,139,101)] font-bold text-lg transition-all"
                type="number"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))} // Thêm onChange để tính toán nhảy số
              />
              <span className="font-bold text-gray-900">M²</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="wastage"
            checked={addWastage}
            onChange={() => setAddWastage(!addWastage)}
            className="w-4 h-4 accent-black"
          />
          <label htmlFor="wastage" className="text-sm text-gray-600 cursor-pointer">
            Add 10% for installation wastage.
          </label>
        </div>

        <div className="mt-2 text-sm leading-relaxed">
          <p>
            <span className="font-bold text-lg">{boxesNeeded}</span> boxes of this product will cover{' '}
            <span className="font-bold">{totalAreaNeeded.toFixed(2)} m²</span>
            {addWastage && ' including 10% wastage.'}
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Note: {boxesNeeded} boxes = <strong>{actualCoveredArea} m²</strong>.
            Box size is {boxSize} m²
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 mt-2">
        <button className="w-full bg-black text-white py-4 font-bold uppercase hover:bg-gray-800 transition-all">
          Quick Quote
        </button>

        {/* VARIANTS SELECTOR */}
        {/* VARIANTS SELECTOR - Chỉ hiển thị khi có nhiều hơn 1 lựa chọn */}
        {product.variants && product.variants.length > 1 ? (
          <div className="flex flex-col gap-3 my-6">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">
              Select Color: <span className="text-black ml-1">{selectedVariant?.title}</span>
            </label>

            <div className="flex flex-wrap gap-2">
              {product.variants.map((variant: any) => (
                <button
                  key={variant.id}
                  onClick={() => onVariantChange(variant)}
                  className={`group relative w-12 h-12 border-2 transition-all hover:border-black 
            ${variant.available ? 'opacity-100' : 'opacity-30 cursor-not-allowed'}
            ${selectedVariant?.id === variant.id ? 'border-black scale-110 shadow-sm' : 'border-gray-100 opacity-60'}`}
                  title={variant.title}
                >
                  {variant.featured_image?.src ? (
                    <img
                      src={variant.featured_image.src}
                      alt={variant.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-[8px]">
                      {variant.title}
                    </div>
                  )}

                  {/* Tooltip */}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                    {variant.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* TRƯỜNG HỢP 0 HOẶC 1 VARIANT: Hiển thị một khoảng trống nhỏ hoặc thông tin đơn giản nếu cần */
          <div className="my-4">
            {product.variants?.length === 1 && (
              <p className="text-xs text-gray-400 italic">
                Color: <span className="text-gray-900 font-medium">{product.variants[0].title}</span>
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-2 gap-2">
          <button className="flex items-center justify-center gap-2 border border-gray-200 py-3 text-xs font-bold uppercase hover:bg-gray-50">
            <Share2 size={16} /> Compare
          </button>
          <button className="flex items-center justify-center gap-2 border border-gray-200 py-3 text-xs font-bold uppercase hover:bg-gray-50">
            <Heart size={16} /> Wishlist
          </button>
        </div>

        <a
          href="#"
          className="flex items-center gap-2 text-xs font-bold underline uppercase mt-2 hover:text-gray-600"
        >
          <FileText size={16} /> Download Brochure
        </a>
      </div>
    </div>
  );
}