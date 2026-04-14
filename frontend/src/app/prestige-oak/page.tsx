'use client';

import IntroSection from "@/components/introSection/introSection";
import ProductList from "@/components/productList/ProductList";
import SidebarFilter from "@/components/productList/SidebarFilter";
import { Container } from "@/components/ui/Container";
import { getValueByPath } from "@/helper";
import { useState, useEffect, useMemo } from "react";

// --- INTERFACES ---
export interface SelectedFilters {
  [key: string]: string[];
}

interface FilterOption {
  label: string;
  match: (val: any) => boolean;
}

interface FilterDetail {
  dataPath: string;
  options: FilterOption[];
}

type FilterConfig = Record<string, string | FilterDetail>;


const getValueByLabelFromHtml = (html: any, label: string): number | null => {
  if (typeof html !== 'string') return null;
  // Regex tìm label -> bỏ qua các thẻ HTML -> lấy giá trị số đầu tiên
  const regex = new RegExp(`${label}\\s*(?:\\(mm\\))?.*?(\\d+(\\.\\d+)?)`, 'si');
  const match = html.match(regex);
  return match && match[1] ? parseFloat(match[1]) : null;
};

const matchRangeByLabel = (label: string, min: number, max: number) => (val: any) => {
  const n = getValueByLabelFromHtml(val, label);
  return n !== null && n >= min && n <= max;
};

// --- CONFIGURATION ---
const FILTERS_CONFIG: FilterConfig = {
  "Flooring Types": "product_type",
  "Brand": "vendor",
  "Plank Thickness": {
    dataPath: "body_html",
    options: [
      { label: "10 - 12mm", match: matchRangeByLabel("Plank thickness", 10, 12) },
      { label: "13 - 15mm", match: matchRangeByLabel("Plank thickness", 13, 15) },
      { label: "19 - 21mm", match: matchRangeByLabel("Plank thickness", 19, 21) },
    ]
  },
  "Plank Width": {
    dataPath: "body_html",
    options: [
      { label: "131 - 160mm", match: matchRangeByLabel("Plank width", 131, 160) },
      { label: "175 - 200mm", match: matchRangeByLabel("Plank width", 175, 200) },
      { label: "205 - 300mm", match: matchRangeByLabel("Plank width", 205, 300) }
    ]
  }
};

export default function PrestigeOakPage() {
  const [hideFilter, setHideFilter] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>(() => {
    return Object.keys(FILTERS_CONFIG).reduce((acc, key) => ({ ...acc, [key]: [] }), {});
  });

  // 1. Fetch dữ liệu
  useEffect(() => {
    const fetchData = async () => {
      try {
        const urls = [
          "https://www.prestigefloor.com.au/collections/prestige-oak-flooring/products.json",
          "https://www.prestigefloor.com.au/collections/hardwood-flooring/products.json",
          "https://www.prestigefloor.com.au/collections/hybrid-flooring/products.json",
          "https://www.prestigefloor.com.au/collections/bamboo-flooring/products.json",
          "https://www.prestigefloor.com.au/collections/laminate-flooring/products.json",
          "https://www.prestigefloor.com.au/collections/vinyl-flooring/products.json",
          "https://www.prestigefloor.com.au/collections/parquetry-flooring/products.json",
          "https://www.prestigefloor.com.au/collections/pre-finished-solid-timber/products.json",
          "https://www.prestigefloor.com.au/collections/australian-engineered-timber/products.json",
        ];
        const requests = urls.map(url => fetch(url).then(res => res.json()));
        const responses = await Promise.all(requests);
        const combinedProducts = responses.reduce((acc, current) => acc.concat(current.products || []), []);
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
      return Object.entries(FILTERS_CONFIG).every(([displayTitle, config]) => {
        const activeSelections = selectedFilters[displayTitle];
        if (!activeSelections || activeSelections.length === 0) return true;

        const isAdvanced = typeof config === 'object';
        const dataPath = isAdvanced ? config.dataPath : config;
        const predefinedOptions = isAdvanced ? config.options : null;

        const rawValue = getValueByPath(p, dataPath);
        const productValues = Array.isArray(rawValue) ? rawValue : [rawValue];

        // Kiểm tra xem có bất kỳ lựa chọn nào của người dùng khớp với giá trị sản phẩm không
        return activeSelections.some(selectedLabel => {
          if (predefinedOptions) {
            const option = predefinedOptions.find(o => o.label === selectedLabel);
            return productValues.some(val => option?.match ? option.match(val) : false);
          } else {
            // Lọc chính xác (Type, Brand)
            return productValues.some(val => 
              val && String(val).toLowerCase().trim() === String(selectedLabel).toLowerCase().trim()
            );
          }
        });
      });
    });
  }, [products, selectedFilters]);

  if (loading) return <div className="p-20 text-center font-bold tracking-widest uppercase">Loading Collection...</div>;

  return (
    <div className="pb-20">
      <IntroSection 
        bgImageUrl="https://www.prestigefloor.com.au/cdn/shop/collections/Rectangle-13_2f288848-3a69-487d-8879-79da71c6968b.webp?v=1764072790" 
        title="Our Collections" 
      />
      
      <Container>
        <button
          className="flex items-center pt-10 group outline-none"
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
          <div className={`flex flex-col lg:flex-row transition-all duration-500 ease-in-out ${hideFilter ? 'gap-0' : 'gap-10'}`}>
            
            {/* SIDEBAR COLUMN */}
            <div
              className={`transition-all duration-500 ease-in-out shrink-0 ${
                hideFilter ? 'w-0 opacity-0 pointer-events-none' : 'w-full lg:w-[25%] opacity-100'
              }`}
            >
              <div className="sticky top-[130px] h-fit">
                {!hideFilter && (
                  <SidebarFilter
                    allProducts={products}
                    selectedFilters={selectedFilters}
                    onFilterChange={setSelectedFilters}
                    filtersConfig={FILTERS_CONFIG as any}
                  />
                )}
              </div>
            </div>

            {/* PRODUCT LIST COLUMN */}
            <div className={`transition-all duration-500 ease-in-out flex-grow ${hideFilter ? 'w-full' : 'w-full lg:w-[75%]'}`}>
              <ProductList products={filteredProducts} />
              {filteredProducts.length === 0 && (
                <div className="text-center py-20 text-gray-500 italic">
                  No products found matching your selected filters.
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}