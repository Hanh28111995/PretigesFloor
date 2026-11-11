'use client';

import { useState } from 'react';
import IntroSection from '@/components/introSection/introSection';
import ProductList from '@/components/productList/ProductList';
import SidebarFilter from '@/components/productList/SidebarFilter';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';
import FilterToggleButton from './FilterToggleButton';
import LoadingCollection from './LoadingCollection';
import { useProductCollection } from './useProductCollection';
import type { FiltersConfigType } from './types';

interface CollectionPageProps {
  title: string;
  bgImageUrl: string;
  filtersConfig: FiltersConfigType;
  collectionHandles: string[];
  transformProducts?: (products: any[]) => any[];
  sidebarWidthClass?: string;
  listWidthClass?: string;
}

export default function CollectionPage({
  title,
  bgImageUrl,
  filtersConfig,
  collectionHandles,
  transformProducts,
  sidebarWidthClass = 'lg:w-[25%]',
  listWidthClass = 'lg:w-[75%]',
}: CollectionPageProps) {
  const [hideFilter, setHideFilter] = useState(false);
  const { products, loading, selectedFilters, setSelectedFilters, filteredProducts } =
    useProductCollection({
      handles: collectionHandles,
      filtersConfig,
      transform: transformProducts,
    });

  if (loading) return <LoadingCollection />;

  return (
    <div className="pb-20">
      <IntroSection bgImageUrl={bgImageUrl} title={title} />

      <Container>
        <FilterToggleButton active={hideFilter} onToggle={() => setHideFilter((v) => !v)} />

        <div className="py-10">
          <div
            className={cn(
              'flex flex-col lg:flex-row transition-all duration-500 ease-in-out',
              hideFilter ? 'gap-0' : 'gap-10'
            )}
          >
            {/* CỘT FILTER */}
            <div
              className={cn(
                'transition-all duration-500 ease-in-out shrink-0',
                hideFilter
                  ? 'w-0 opacity-0 pointer-events-none'
                  : cn('w-full opacity-100', sidebarWidthClass)
              )}
            >
              <div className="sticky top-[130px] h-fit">
                {!hideFilter && (
                  <SidebarFilter
                    allProducts={products}
                    selectedFilters={selectedFilters}
                    onFilterChange={setSelectedFilters}
                    filtersConfig={filtersConfig}
                  />
                )}
              </div>
            </div>

            {/* CỘT PRODUCT LIST */}
            <div
              className={cn(
                'transition-all duration-500 ease-in-out flex-grow',
                hideFilter ? 'w-full' : cn('w-full', listWidthClass)
              )}
            >
              <ProductList products={filteredProducts} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
