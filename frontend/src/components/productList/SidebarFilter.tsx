'use client';

import React, { useState, useMemo } from 'react';
import { Filter, ChevronDown, ChevronUp } from 'lucide-react';

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

export type FiltersConfigType = Record<string, string | FilterDetail>;

interface SidebarFilterProps {
  allProducts: any[];
  selectedFilters: SelectedFilters;
  onFilterChange: React.Dispatch<React.SetStateAction<SelectedFilters>>;
  filtersConfig: FiltersConfigType;
}

export default function SidebarFilter({
  allProducts,
  selectedFilters,
  onFilterChange,
  filtersConfig
}: SidebarFilterProps) {

  // Khởi tạo trạng thái đóng/mở
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() =>
    Object.keys(filtersConfig).reduce((acc, key) => ({ ...acc, [key]: true }), {})
  );

  // Helper: Lấy dữ liệu từ path
  const getValueByPath = (obj: any, path: string) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  };

  // Helper: Chuẩn hóa text
  const normalize = (str: string) =>
    String(str)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "")
      .trim();

  const filterSections = useMemo(() => {
    if (!allProducts.length) return [];

    return Object.entries(filtersConfig).map(([displayTitle, config]) => {
      const isAdvanced = typeof config !== 'string';
      const dataPath = isAdvanced ? (config as FilterDetail).dataPath : (config as string);
      const predefinedOptions = isAdvanced ? (config as FilterDetail).options : null;

      const countsMap: Record<string, { label: string, count: number }> = {};

      // Khởi tạo options cố định với count = 0
      if (predefinedOptions) {
        predefinedOptions.forEach(opt => {
          countsMap[opt.label] = { label: opt.label, count: 0 };
        });
      }

      allProducts.forEach(p => {
        const rawValue = getValueByPath(p, dataPath);
        
        // Nếu là body_html (chuỗi dài), không nên biến thành mảng ký tự
        // Chỉ mảng thực sự (như tags) mới cần giữ nguyên mảng
        const valuesArray = Array.isArray(rawValue) ? rawValue : [rawValue];

        valuesArray.forEach(val => {
          if (!val) return;

          if (predefinedOptions) {
            // Logic cho các khoảng (Thickness, Width) lọc qua Regex/Match
            predefinedOptions.forEach(opt => {
              if (opt.match(val)) {
                countsMap[opt.label].count += 1;
              }
            });
          } else {
            // Logic khớp chính xác (Brand, Type)
            const key = normalize(val);
            if (countsMap[key]) {
              countsMap[key].count += 1;
            } else {
              countsMap[key] = { label: val, count: 1 };
            }
          }
        });
      });

      return {
        id: displayTitle,
        title: displayTitle,
        options: Object.values(countsMap).filter(opt => opt.count > 0)
      };
    });
  }, [allProducts, filtersConfig]);

  const handleCheckbox = (sectionId: string, label: string) => {
    onFilterChange((prev: SelectedFilters) => {
      const current = [...(prev[sectionId] || [])];
      const index = current.indexOf(label);

      const newSelections = index > -1
        ? current.filter((_, i) => i !== index)
        : [...current, label];

      return { ...prev, [sectionId]: newSelections };
    });
  };

  if (!allProducts.length) return null;

  return (
    <aside className="w-full shrink-0 px-3">
      <div className="bg-white border border-gray-100 rounded-[7px] shadow-[0_4px_4px_4px_rgba(0,0,0,0.15)] overflow-hidden">
        <div className="p-5 border-b flex items-center gap-2 bg-gray-50/50">
          <Filter size={18} className="text-[#AD6F10]" />
          <h3 className="font-bold text-gray-800 text-lg tracking-widest uppercase">Filter By</h3>
        </div>

        {filterSections.map(section => (
          <div key={section.id} className="p-5 border-b last:border-b-0">
            <button
              onClick={() => setOpenSections(prev => ({ ...prev, [section.id]: !prev[section.id] }))}
              className="flex items-center justify-between w-full mb-4 group outline-none"
            >
              <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-[#AD6F10] transition-colors">
                {section.title}
              </span>
              {openSections[section.id] ? 
                <ChevronUp size={14} className="text-gray-400" /> : 
                <ChevronDown size={14} className="text-gray-400" />
              }
            </button>

            {openSections[section.id] && (
              <div className="space-y-3">
                {section.options.map((opt) => {
                  const isChecked = selectedFilters[section.id]?.includes(opt.label);
                  return (
                    <label key={opt.label} className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleCheckbox(section.id, opt.label)}
                          className="w-4 h-4 accent-[#AD6F10] rounded cursor-pointer border-gray-300 shadow-none focus:ring-0"
                        />
                      </div>
                      <span className={`text-sm transition-colors ${
                        isChecked ? 'text-[#AD6F10] font-semibold' : 'text-gray-600 group-hover:text-gray-900'
                      }`}>
                        {opt.label}
                      </span>
                      <span className="ml-auto text-[10px] text-gray-400 font-mono italic">
                        ({opt.count})
                      </span>
                    </label>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}