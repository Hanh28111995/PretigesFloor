'use client';

import CollectionPage from "@/components/collection/CollectionPage";
import type { FiltersConfigType } from "@/components/collection/types";
import { matchRangeByLabel } from "@/helper";

const FILTERS_CONFIG: FiltersConfigType = {
  "Flooring Types": "product_type",
  "Brand": "vendor",
  "Plank Thickness": {
    dataPath: "body_html",
    options: [
      { label: "10 - 12mm", match: matchRangeByLabel("Plank thickness", 10, 12) },
      { label: "13 - 15mm", match: matchRangeByLabel("Plank thickness", 13, 15) },
      { label: "19 - 21mm", match: matchRangeByLabel("Plank thickness", 19, 21) },
    ],
  },
  "Plank Width": {
    dataPath: "body_html",
    options: [
      { label: "131 - 160mm", match: matchRangeByLabel("Plank width", 131, 160) },
      { label: "175 - 200mm", match: matchRangeByLabel("Plank width", 175, 200) },
      { label: "205 - 300mm", match: matchRangeByLabel("Plank width", 205, 300) },
    ],
  },
};

const COLLECTION_HANDLES = [
  "prestige-oak-flooring",
  "hardwood-flooring",
  "hybrid-flooring",
  "bamboo-flooring",
  "laminate-flooring",
  "vinyl-flooring",
  "parquetry-flooring",
  "pre-finished-solid-timber",
  "australian-engineered-timber",
];

export default function PrestigeOakPage() {
  return (
    <CollectionPage
      title="Our Collections"
      bgImageUrl="https://www.prestigefloor.com.au/cdn/shop/collections/Rectangle-13_2f288848-3a69-487d-8879-79da71c6968b.webp?v=1764072790"
      filtersConfig={FILTERS_CONFIG}
      collectionHandles={COLLECTION_HANDLES}
    />
  );
}
