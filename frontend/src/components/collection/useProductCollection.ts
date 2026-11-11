'use client';

import { useEffect, useMemo, useState } from 'react';
import { getProductsInCollection } from '@/server/shopifyApi';
import { getValueByPath } from '@/helper';
import type { FilterDetail, FiltersConfigType, SelectedFilters } from './types';

interface UseProductCollectionOptions {
  handles: string[];
  filtersConfig: FiltersConfigType;
  transform?: (products: any[]) => any[];
}

/**
 * Gom logic fetch + lọc sản phẩm dùng chung cho các trang collection
 * (carpets / rugs / prestige-oak).
 */
export function useProductCollection({
  handles,
  filtersConfig,
  transform,
}: UseProductCollectionOptions) {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>(() =>
    Object.keys(filtersConfig).reduce(
      (acc, key) => ({ ...acc, [key]: [] as string[] }),
      {} as SelectedFilters
    )
  );

  useEffect(() => {
    let isActive = true;

    const fetchData = async () => {
      try {
        const responses = await Promise.all(handles.map((handle) => getProductsInCollection(handle)));
        let combined = responses.reduce(
          (acc: any[], current: any) => acc.concat(current.products || []),
          [] as any[]
        );
        if (transform) combined = transform(combined);
        if (isActive) setProducts(combined);
      } catch (err) {
        console.error('Fetch error:', err);
      } finally {
        if (isActive) setLoading(false);
      }
    };

    fetchData();
    return () => {
      isActive = false;
    };
    // handles/filtersConfig/transform là cấu hình tĩnh, chỉ fetch 1 lần khi mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((p) =>
      Object.entries(filtersConfig).every(([displayTitle, config]) => {
        const activeSelections = selectedFilters[displayTitle];
        if (!activeSelections || activeSelections.length === 0) return true;

        const isAdvanced = typeof config !== 'string';
        const dataPath = isAdvanced ? (config as FilterDetail).dataPath : (config as string);
        const predefinedOptions = isAdvanced ? (config as FilterDetail).options : null;

        const rawValue = getValueByPath(p, dataPath);
        const productValues = Array.isArray(rawValue) ? rawValue : [rawValue];

        return activeSelections.some((selectedLabel) => {
          if (predefinedOptions) {
            const option = predefinedOptions.find((o) => o.label === selectedLabel);
            return productValues.some((val) => (option?.match ? option.match(val) : false));
          }
          return productValues.some(
            (val) =>
              val &&
              String(val).toLowerCase().trim() === String(selectedLabel).toLowerCase().trim()
          );
        });
      })
    );
  }, [products, selectedFilters, filtersConfig]);

  return { products, loading, selectedFilters, setSelectedFilters, filteredProducts };
}
