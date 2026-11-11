'use client';

import CollectionPage from "@/components/collection/CollectionPage";
import type { FiltersConfigType } from "@/components/collection/types";

const FILTERS_CONFIG: FiltersConfigType = {
  "Carpet Types": "product_type",
};

// Chuẩn hoá product_type của nhóm wool carpet về cùng một nhãn
const mapWoolType = (products: any[]) =>
  products.map((p) => ({
    ...p,
    product_type: p.product_type?.includes("Wool") ? "Wool Carpet" : p.product_type,
  }));

export default function CarpetPage() {
  return (
    <CollectionPage
      title="Carpet Flooring"
      bgImageUrl="https://www.prestigefloor.com.au/cdn/shop/files/hero_1_090c1261-ba88-49fb-b8c2-7a1a171cc284.jpg?v=1715186691"
      filtersConfig={FILTERS_CONFIG}
      collectionHandles={["carpets", "wool-carpets"]}
      transformProducts={mapWoolType}
      sidebarWidthClass="lg:w-[30%]"
      listWidthClass="lg:w-[70%]"
    />
  );
}
