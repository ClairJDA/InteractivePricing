"use client";

import { useEffect, useState } from "react";
import PriceRange from "@/components/price-range";
import BillingOption from "@/components/billing-option";
import CTA from "@/components/cta";

export default function Home() {
  const [views, setViews] = useState(50);
  const [price, setPrice] = useState(24);
  const [discount, setDiscount] = useState(1.0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    isActive ? setDiscount(0.75) : setDiscount(1.0);
    calcPrice(views, discount);
  }, [views, discount, isActive]);

  const calcPrice = (views, discount) => {
    if (views >= 100) {
      setPrice(36 * discount);
    } else if (views >= 50 && views < 99) {
      setPrice(24 * discount);
    } else if (views >= 10 && views < 50) {
      setPrice(16 * discount);
    } else if (views >= 5 && views < 10) {
      setPrice(12 * discount);
    } else if (views < 5) {
      setPrice(8 * discount);
    }
  };

  return (
    <div className="w-full h-dvh flex items-center" style={{"background": "var(--very-pale-blue) url('/images/bg-pattern.svg') no-repeat"}}>
      <div className="md:w-[500px] h-fit mx-auto flex flex-col justify-between bg-white" style={{"boxShadow" : "10px 10px 10px var(--light-grayish-blue)"}}>
        <PriceRange views={views} setViews={setViews} price={price} />
        <BillingOption setIsActive={setIsActive} isActive={isActive} />
        <hr className="text-light-grayish-blue" />
        <CTA />
      </div>
    </div>
  );
}
