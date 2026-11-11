// app/product/[slug]/page.tsx

import ProductDetailClient from "@/components/productDetail/productDetailClient";
import { Container } from "@/components/ui/Container";


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