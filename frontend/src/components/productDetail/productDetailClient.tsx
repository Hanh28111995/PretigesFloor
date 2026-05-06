'use client';
import { useEffect, useState } from 'react';
import ProductGalery from './productGalery';
import ProductInfo from './productInfo';
import ProductSpec from './productSpec';

export default function ProductDetailClient({ slug }: { slug: string }) {
  const [product, setProduct] = useState<any>(null);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0); // State này sẽ truyền xuống Galery

  useEffect(() => {
    // 1. Lấy dữ liệu từ kho
    const savedData = localStorage.getItem('temp_product');

    if (savedData) {
      const item = JSON.parse(savedData);

      // 2. Log ra để debug - cực kỳ quan trọng
      console.log("Slug từ URL:", slug);
      console.log("Handle từ LocalStorage:", item.handle);

      // 3. Kiểm tra khớp mã. 
      // Lưu ý: Next.js đôi khi decode URL nên 'tan-ab' có thể khác 'tan%20ab'
      if (decodeURIComponent(slug) === item.handle || item.id?.toString() === slug) {
        setProduct(item);
      } else {
        console.error("Dữ liệu trong kho không khớp với URL này!");
      }
    }
  }, [slug]);

  useEffect(() => {
    const savedData = localStorage.getItem('temp_product');
    if (savedData) {
      const item = JSON.parse(savedData);
      setProduct(item);
      setSelectedVariant(item.variants[0]);
    }
  }, []);

  const handleVariantChange = (variant: any) => {
    setSelectedVariant(variant);
    // Tìm vị trí ảnh của variant này trong mảng images của product
    if (variant.featured_image) {
      const imgIndex = product.images.findIndex(
        (img: any) => img.src === variant.featured_image.src
      );
      if (imgIndex !== -1) {
        setActiveIndex(imgIndex); // Cập nhật để Galery nhảy ảnh
      }
    }
  };

  if (!product) {
    return (
      <div className="py-20 text-center">
        <p>Không tìm thấy dữ liệu trong kho local cho: {slug}</p>
        <button onClick={() => window.location.href = '/'} className="underline">
          Quay lại trang danh sách
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-wrap mx-4 md:mx-[10rem]">
        <div className="w-full lg:w-2/5 px-4 mb-8">
          <ProductGalery
            images={product.images || []}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>
        <div className="w-full lg:w-3/5 px-4">
          <ProductInfo
            product={product}
            selectedVariant={selectedVariant}
            onVariantChange={handleVariantChange}
          />
        </div>
      </div>
      <div className="mt-16 border-t pt-10 mx-4 md:mx-[10rem]">
        <h2 className="text-2xl font-bold mb-6 italic uppercase">Technical Specifications</h2>
        <ProductSpec htmlContent={product.body_html} />
      </div>
    </>
  );
}