'use client';

import React, { useState } from 'react';
import { FileDown, Ruler, Box, ClipboardList } from 'lucide-react';

interface ProductSpecProps {
  // Ở đây htmlContent chính là cái chuỗi HTML ông bốc từ API về
  htmlContent: string;
}

export default function ProductSpec({ htmlContent }: ProductSpecProps) {
  const [activeTab, setActiveTab] = useState('features');
  if (!htmlContent) {
    return (
      <p className="text-gray-400 text-sm italic py-10">
        No technical specifications available for this product.
      </p>
    );
  }


  const tabs = [
    { id: 'features', label: 'Product Features', icon: <ClipboardList size={18} /> },
    { id: 'downloads', label: 'Product Downloads', icon: <FileDown size={18} /> },
    { id: 'measure', label: 'How to Measure', icon: <Ruler size={18} /> },
    { id: 'accessories', label: 'Accessories', icon: <Box size={18} /> },
  ];

  return (
    <div className="w-full">
      <div>
        <p>At <strong>Prestige Floor</strong>, we take pride in being the home of stylish and durable flooring solutions designed to transform your space. With over 30 years of industry expertise and a legacy spanning three generations, we are Western Sydney’s trusted flooring specialists.<br /><br />Explore our expansive Penrith showroom the largest in the region featuring a premium selection of wall-to-wall carpet, hybrid, timber, and laminate. Each product is supported by detailed installation guides, warranty information, and product brochures to ensure a seamless experience from selection to installation.<br /><br />Our dedication to quality and service has earned us four Local Business Awards and the Australian Small Business Champion Award.<br /><br /><strong>Experience the Prestige Floor difference today.</strong></p>
      </div>

      <div className="w-full mt-16 border-t pt-10">
        {/* Tab Headers */}
        <div className="flex flex-wrap border-b border-gray-200 gap-1 md:gap-8 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 py-4 px-2 text-xs md:text-sm font-bold uppercase tracking-widest transition-all relative
              ${activeTab === tab.id
                  ? 'text-black after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black'
                  : 'text-gray-400 hover:text-black'}`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[300px] animate-in fade-in slide-in-from-bottom-2 duration-500">

          {/* TAB 1: FEATURES (Dạng Table) */}
          {activeTab === 'features' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
              <div className="body-html" dangerouslySetInnerHTML={{ __html: htmlContent }} />
              {/* Nếu ông muốn map thủ công từ bảng HTML ông đưa, dùng dangerouslySetInnerHTML là nhanh nhất */}
            </div>
          )}

          {/* TAB 2: DOWNLOADS */}
          {activeTab === 'downloads' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Mockup logic cho danh sách file đính kèm */}
              <div className="border p-4 flex items-center justify-between group hover:border-black transition-all">
                <div className="flex flex-col">
                  <span className="text-sm font-bold uppercase">Brochure - Prestige Oak</span>
                  <span className="text-xs text-gray-400">3.74 MB</span>
                </div>
                <FileDown size={20} className="text-gray-300 group-hover:text-black" />
              </div>
              {/* Ông có thể map qua product.attachments ở đây */}
            </div>
          )}

          {/* TAB 3: HOW TO MEASURE */}
          {activeTab === 'measure' && (
            <div className="max-w-4xl">
              <h3 className="text-xl font-bold italic uppercase mb-4 text-[rgb(204,139,101)]">
                Measure twice, cut once
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8 italic">
                We strongly recommend adding 10% wastage to your order.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl text-[rgb(204,139,101)]">1</div>
                  <h4 className="font-bold uppercase mb-2">Get Prepared</h4>
                  <p className="text-xs text-gray-500">Use a tape measure or laser meter.</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl text-[rgb(204,139,101)]">2</div>
                  <h4 className="font-bold uppercase mb-2">Measure</h4>
                  <p className="text-xs text-gray-500">Measure length and width wall-to-wall.</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl text-[rgb(204,139,101)]">3</div>
                  <h4 className="font-bold uppercase mb-2">Total Area</h4>
                  <p className="text-xs text-gray-500">Multiply length by width for each area.</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ACCESSORIES */}
          {activeTab === 'accessories' && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Alloy Trims', 'Underlays', 'Stair Nosing', 'Scotia'].map((item) => (
                <div key={item} className="group cursor-pointer">
                  <div className="aspect-[4/3] bg-gray-100 mb-3 overflow-hidden">
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">Img</div>
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-widest group-hover:text-[rgb(204,139,101)]">{item}</h4>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* Note phụ bên dưới vẫn giữ nguyên để đảm bảo thông tin pháp lý */}
      <div className="mt-10 p-5 bg-gray-50 rounded-sm border border-gray-100">
        <div className="flex gap-3">
          <div className="w-1 h-auto bg-gray-300 rounded-full" />
          <p className="text-[11px] text-gray-500 leading-relaxed">
            <strong className="text-gray-700 uppercase mr-1">Note:</strong>
            Specifications are subject to change without notice.
            Please refer to the physical product samples for the most accurate color representation.
          </p>
        </div>
      </div>

      {/* CSS dành riêng cho nội dung HTML đổ vào */}
      <style jsx global>{`
        .body-html ul {
          list-style-type: none;
          padding: 0;
          border-top: 1px solid #e5e7eb;
        }
        .body-html li {
          display: flex;
          justify-content: space-between;
          padding: 1rem 0.5rem;
          border-bottom: 1px solid #f3f4f6;
        }
        /* Style cho nhãn (thường là thẻ strong hoặc span đầu tiên) */
        .body-html li strong, 
        .body-html li b {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #9ca3af;
          font-weight: 800;
        }
        .body-html p {
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
}