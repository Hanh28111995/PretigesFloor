'use client';

import CollectionPage from "@/components/collection/CollectionPage";
import type { FiltersConfigType } from "@/components/collection/types";

const FILTERS_CONFIG: FiltersConfigType = {
  "Rug Types": "product_type",
};

export default function RugsPage() {
  return (
    <CollectionPage
      title="Rugs"
      bgImageUrl="https://www.prestigefloor.com.au/cdn/shop/products/dream_5169a_ivory-beige-6_550x.jpg?v=1669814987"
      filtersConfig={FILTERS_CONFIG}
      collectionHandles={["rugs"]}
    />
  );
}
