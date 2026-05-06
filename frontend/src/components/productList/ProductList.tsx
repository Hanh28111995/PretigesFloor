'use client';

import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { SlidersHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Đổi từ next/router sang next/navigation
import Link from 'next/link';

interface ProductListProps {
    products: any[];
}

export default function ProductList({ products }: ProductListProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const router = useRouter();

    // Logic tính toán số lượng item hiển thị theo màn hình
    useEffect(() => {
        const updateItemsPerPage = () => {
            const width = window.innerWidth;
            if (width >= 1024) setItemsPerPage(9);
            else if (width >= 640) setItemsPerPage(8);
            else setItemsPerPage(6);
        };

        updateItemsPerPage();
        window.addEventListener('resize', updateItemsPerPage);
        return () => window.removeEventListener('resize', updateItemsPerPage);
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [products, itemsPerPage]);

    const totalPages = Math.ceil(products.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = products.slice(startIndex, startIndex + itemsPerPage);

    return (
        <section className="w-full">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 pb-4 border-b border-gray-100 gap-4">
                <div className="flex items-center gap-2">
                    <SlidersHorizontal size={14} className="text-gray-400 lg:hidden" />
                    <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                        Showing <span className="text-gray-900">{currentItems.length > 0 ? startIndex + 1 : 0}–{Math.min(startIndex + itemsPerPage, products.length)}</span> of <span className="text-gray-900">{products.length}</span> results
                    </p>
                </div>
            </div>

            {/* Grid Sản Phẩm */}
            {currentItems.length > 0 ? (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 mb-12">
                        {currentItems.map((item) => (
                            <div
                                key={item.id}
                                className="cursor-pointer" // Quan trọng để người dùng biết là bấm được
                                onClick={(e) => {
                                    // Ngăn chặn các sự kiện lồng nhau không cần thiết
                                    e.preventDefault();

                                    // 1. Lưu vào kho
                                    localStorage.setItem("temp_product", JSON.stringify(item));

                                    // 2. Chuyển trang (dùng đường dẫn tuyệt đối có dấu /)
                                    router.push(`/products/${item.handle || item.id}`);
                                }}
                            >
                                <ProductCard
                                    product={item}                                    
                                />
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-2 pt-8 border-t border-gray-100">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="p-2 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                                <ChevronLeft size={16} />
                            </button>

                            <div className="flex gap-1">
                                {[...Array(totalPages)].map((_, index) => (
                                    <button
                                        key={index + 1}
                                        onClick={() => setCurrentPage(index + 1)}
                                        className={`w-10 h-10 text-[11px] font-bold rounded transition-all ${currentPage === index + 1
                                            ? 'bg-black text-white'
                                            : 'bg-white text-gray-500 border border-gray-200 hover:border-black'
                                            }`}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="p-2 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <div className="py-20 text-center border border-dashed border-gray-200 rounded">
                    <p className="text-sm text-gray-400 font-medium">No products found.</p>
                </div>
            )}
        </section>
    );
}