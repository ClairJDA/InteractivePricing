import React from "react";
import Toggle from "@/components/toggle";

function BillingOption({setIsActive, isActive}) {
  return (
    <div className="relative py-4 px-8 flex justify-center items-center gap-x-4 text-sm text-grayish-blue">
      <p>Monthly Billing</p>
      <Toggle setIsActive={setIsActive} isActive={isActive} />
      <p>
        Yearly Billing
        <span className="hidden md:inline-block ml-1 p-1 px-2 text-xs text-light-red font-bold bg-light-grayish-red rounded-full">
          25% discount
        </span>
        <span className="md:hidden ml-1 p-1 px-2 text-xs text-light-red font-bold bg-light-grayish-red rounded-full">
          - 25%
        </span>
      </p>
    </div>
  );
}

export default BillingOption;
