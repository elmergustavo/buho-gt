"use client";

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
      </LayoutMain>
    </>
  );
}
