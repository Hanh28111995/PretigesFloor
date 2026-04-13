import IntroSection from "@/components/introSection/introSection";
import { Container } from "@/components/ui/Container";
import { Filter } from "lucide-react";
import Link from "next/link";

export default function CarpetPage() {
  return (
    <>
      <IntroSection bgImageUrl="https://www.prestigefloor.com.au/cdn/shop/files/hero_1_090c1261-ba88-49fb-b8c2-7a1a171cc284.jpg?v=1715186691" title="Carpet Flooring" />
      <Container className="py-16">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Sidebar Filters */}
          <aside className="w-full lg:w-[25%] shrink-0">
            <div className="sticky top-[130px] bg-white p-6 border border-gray-100 rounded shadow-sm">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                <Filter size={20} className="text-[#AD6F10]" />
                <h3 className="text-lg font-bold text-gray-800 uppercase tracking-widest">Filter By Categories</h3>
              </div>

              <div className="space-y-4">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 accent-[#AD6F10]" />
                  <span className="font-medium text-gray-600 group-hover:text-[#AD6F10] transition-colors">Australian Engineered Timber</span>
                  <span className="ml-auto text-xs bg-gray-100 px-2 py-1 rounded text-gray-500">93</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 accent-[#AD6F10]" />
                  <span className="font-medium text-gray-600 group-hover:text-[#AD6F10] transition-colors">European Oak</span>
                  <span className="ml-auto text-xs bg-gray-100 px-2 py-1 rounded text-gray-500">45</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 accent-[#AD6F10]" />
                  <span className="font-medium text-gray-600 group-hover:text-[#AD6F10] transition-colors">Laminate</span>
                  <span className="ml-auto text-xs bg-gray-100 px-2 py-1 rounded text-gray-500">28</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 accent-[#AD6F10]" />
                  <span className="font-medium text-gray-600 group-hover:text-[#AD6F10] transition-colors">Hybrid Flooring</span>
                  <span className="ml-auto text-xs bg-gray-100 px-2 py-1 rounded text-gray-500">55</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Product Grid Area */}
          <section className="w-full xl:w-[75%]">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 pb-4 border-b border-gray-100 gap-4">
              <p className="text-gray-500">Showing <span className="font-bold text-gray-800">59</span> products</p>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span className="font-medium">Sort by:</span>
                <select className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-[#AD6F10] bg-white cursor-pointer">
                  <option>Featured</option>
                  <option>Best selling</option>
                  <option>Alphabetically, A-Z</option>
                  <option>Price, low to high</option>
                  <option>Price, high to low</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Link href="#" key={item} className="group">
                  <div className="relative aspect-square overflow-hidden bg-gray-100 mb-4 rounded-sm shadow-sm flex items-center justify-center">
                    {/* Placeholder image representation */}
                    <div className="absolute inset-0 bg-gray-200 group-hover:scale-105 transition-transform duration-500 ease-out"></div>
                    <span className="relative z-10 text-gray-400 font-medium tracking-wider">PRODUCT IMAGE</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 group-hover:text-[#AD6F10] transition-colors line-clamp-2">
                    Prestige Oak Classic Collection {item}
                  </h4>
                  <p className="text-gray-500 mt-2 font-medium">From $55.00 / sqm</p>
                </Link>
              ))}
            </div>

            {/* Pagination Placeholder */}
            <div className="mt-16 flex justify-center gap-2">
              <button className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors rounded-sm text-gray-500">1</button>
              <button className="w-10 h-10 border border-[#AD6F10] bg-[#AD6F10] text-white flex items-center justify-center rounded-sm">2</button>
              <button className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors rounded-sm text-gray-500">3</button>
            </div>
          </section>

        </div>
      </Container>
    </>
  );
}
