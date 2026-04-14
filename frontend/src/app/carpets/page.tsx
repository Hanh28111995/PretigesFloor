'use client';

import { useState, useEffect, useMemo } from "react";
import IntroSection from "@/components/introSection/introSection";
import ProductList from "@/components/productList/ProductList";
import SidebarFilter from "@/components/productList/SidebarFilter";
import { Container } from "@/components/ui/Container";

export interface SelectedFilters {
  [key: string]: string[];
}

const FILTERS_CONFIG = {
  "Carpet Types": "product_type",
};

export default function CarpetPage() {
  const [hideFilter, setHideFilter] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>(() => {
    return Object.keys(FILTERS_CONFIG).reduce((acc, key) => ({ ...acc, [key]: [] }), {});
  });

  // 1. Fetch dữ liệu và xử lý chuẩn hóa ban đầu
  useEffect(() => {
    const fetchData = async () => {
      try {
        const urls = [
          "https://www.prestigefloor.com.au/collections/carpets/products.json",
          "https://www.prestigefloor.com.au/collections/wool-carpets/products.json"
        ];
        const requests = urls.map(url => fetch(url).then(res => res.json()));
        const responses = await Promise.all(requests);
        
        const combinedProducts = responses.reduce((acc: any[], current: any) => {
          return acc.concat(
            (current.products || []).map((p: any) => ({
              ...p,
              product_type: p.product_type?.includes("Wool")
                ? "Wool Carpet"
                : p.product_type
            }))
          );
        }, []);
        setProducts(combinedProducts);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // 2. Logic Lọc sản phẩm động
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      return Object.entries(FILTERS_CONFIG).every(([displayTitle, dataPath]) => {
        const activeSelections = selectedFilters[displayTitle];
        if (!activeSelections || activeSelections.length === 0) return true;

        const productValue = p[dataPath];
        if (Array.isArray(productValue)) {
          return productValue.some(val => activeSelections.includes(val));
        }
        return activeSelections.includes(productValue);
      });
    });
  }, [products, selectedFilters]);

  if (loading) return <div className="p-20 text-center font-bold tracking-widest uppercase">Loading Collection...</div>;

  return (
    <div className="pb-20">
      <IntroSection
        bgImageUrl="https://www.prestigefloor.com.au/cdn/shop/files/hero_1_090c1261-ba88-49fb-b8c2-7a1a171cc284.jpg?v=1715186691"
        title="Carpet Flooring"
      />

      <Container>
        {/* Nút bấm Toggle Filter */}
        <button 
          className="flex items-center pt-10 group" 
          onClick={() => setHideFilter(!hideFilter)}
        >
          <div className="p-2 border border-gray-200 rounded-md group-hover:bg-gray-50 transition-colors">
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 5L10 5M10 5C10 6.10457 10.8954 7 12 7C13.1046 7 14 6.10457 14 5M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5M14 5L20 5M4 12H16M16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12ZM8 19H20M8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21C7.10457 21 8 20.1046 8 19Z" stroke="#AD6F10" strokeWidth="2" strokeLinecap="round"></path>
            </svg>
          </div>
          <span className="ml-3 font-black uppercase text-[12px] tracking-widest text-gray-800">
            {hideFilter ? "Show" : "Hide"} Filters
          </span>
        </button>

        <div className="py-10">
          {/* Wrapper chính: Điều khiển Gap khi ẩn/hiện */}
          <div className={`flex flex-col lg:flex-row transition-all duration-500 ease-in-out ${hideFilter ? 'gap-0' : 'gap-10'}`}>
            
            {/* CỘT FILTER: Lớp bọc điều khiển chiều rộng (Width) */}
            <div 
              className={`transition-all duration-500 ease-in-out shrink-0 ${
                hideFilter ? 'w-0 opacity-0 pointer-events-none' : 'w-full lg:w-[30%] opacity-100'
              }`}
            >
              {/* LỚP STICKY: Nằm bên trong để trượt theo màn hình */}
              <div className="sticky top-[130px] h-fit">
                {/* Ẩn hẳn nội dung khi width = 0 để tránh bị lỗi hiển thị đè lên ProductList */}
                <div className={hideFilter ? "hidden" : "block"}>
                  <SidebarFilter
                    allProducts={products}
                    selectedFilters={selectedFilters}
                    onFilterChange={setSelectedFilters}
                    filtersConfig={FILTERS_CONFIG}
                  />
                </div>
              </div>
            </div>

            {/* CỘT PRODUCT LIST: Tự động giãn ra chiếm 100% */}
            <div className={`transition-all duration-500 ease-in-out flex-grow ${
              hideFilter ? 'w-full' : 'w-full lg:w-[70%]'
            }`}>
              <ProductList
                products={filteredProducts}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}