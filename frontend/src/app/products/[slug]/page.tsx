// app/product/[slug]/page.tsx

import ProductDetailClient from "@/components/productDetail/productDetailClient";
import { Container } from "@/components/ui/Container";
import { div } from "framer-motion/client";


export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <div className="py-[150px]">
    <Container>
       <ProductDetailClient slug={slug}/>
    </Container>
    </div>
  );
}