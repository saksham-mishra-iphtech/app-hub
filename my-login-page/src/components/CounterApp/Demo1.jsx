import React from "react";
import Header from "../Header";
import CounterCard from "./CounterCard";

const Demo1 = () => {
  return (
    <div className="bg-white pt-22 text-black h-screen w-screen overflow-hidden flex flex-col items-center">
      <Header heading="Counter App" />
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mt-10 sm:mt-16 w-full px-4">
        <CounterCard name="Integer Counter" type="integer" className="w-full max-w-xs sm:max-w-sm md:max-w-md" />
        <CounterCard name="Decimal Counter" type="decimal" className="w-full max-w-xs sm:max-w-sm md:max-w-md" />
      </div>
    </div>
  );
};

export default Demo1;
