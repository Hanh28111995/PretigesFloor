'use client';

import React, { useState, useMemo, useEffect } from 'react';
import ProductCard from './ProductCard';
import { SlidersHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductListProps {
    products: any[];
}

export default function ProductList({ products }: ProductListProps) {    
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(9); // Mặc định là 9 (3 cột)

    // 1. Theo dõi kích thước màn hình để điều chỉnh số lượng item mỗi trang
    useEffect(() => {
        const updateItemsPerPage = () => {
            const width = window.innerWidth;
            if (width >= 1024) { // lg breakpoint
                setItemsPerPage(9); // 3 cột -> 9 sp
            } else if (width >= 640) { // sm breakpoint
                setItemsPerPage(8); // 2 cột -> 8 sp
            } else {
                setItemsPerPage(6); // Mobile 1 cột -> 6 sp cho gọn
            }
        };

        updateItemsPerPage(); // Chạy lần đầu
        window.addEventListener('resize', updateItemsPerPage);
        return () => window.removeEventListener('resize', updateItemsPerPage);
    }, []);

    // Reset về trang 1 khi danh sách hoặc số lượng item mỗi trang thay đổi
    useEffect(() => {
        setCurrentPage(1);
    }, [products,  itemsPerPage]);
    
    // 2. Tính toán phân trang dựa trên itemsPerPage linh hoạt
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

            {/* Grid: Lưu ý các breakpoint phải khớp với logic useEffect ở trên */}
            {currentItems.length > 0 ? (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 mb-12">
                        {currentItems.map((item) => (
                            <ProductCard key={item.id} product={item} />
                        ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-2 pt-8 border-t border-gray-100">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="p-2 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                            >
                                <ChevronLeft size={16} />
                            </button>

                            <div className="flex gap-1">
                                {/* Hiển thị số trang */}
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
                                className="p-2 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
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