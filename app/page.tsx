"use client";

import Footer from "@/components/Footer";
import Information from "@/components/Information";
import ShopCard from "@/components/ShopCard";
import Slider from "@/components/Slider";
import Slideshow from "@/components/Slideshow";
import LayoutMain from "@/components/layouts/LayoutMain";


export default function Home() {
  return (
    <>
      <LayoutMain>
        <div className="mt-4">
          <section className="grid grid-cols-3 gap-2">
            <div className="col-span-2">
              <Slider />
            </div>

            <div className="col-span-1 space-y-5">
              <ShopCard />
              <ShopCard />
            </div>
          </section>

          {/* <Slideshow /> */}
        </div>

        <section className="mt-6">
          <div>
            <p className="text-2xl font-semibold underline">Tiendas BUHOGT</p>
            <p className="mt-4">
            Encuentra los mejores articulos 
            </p>
          </div>
        </section>
      </LayoutMain>

      <Information />
      <Footer />
    </>
  );
}
