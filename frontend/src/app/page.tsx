"use client";

import { About } from "@/components/section/home/about";
import Product from "@/components/section/home/product";
import Service from "@/components/section/home/service";
import Social from "@/components/section/home/social";
import Welcome from "@/components/section/home/welcome";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen overflow-x-hidden">
      <Welcome />
      <Service />
      <Product />
      <About />
      <Social />
    </main>
  );
}
