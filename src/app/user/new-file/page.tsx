"use client";

import Header from "@/components/Dashboard/Header";
import VerticalStepBar from "@/components/NewFile/VerticalStepbar";
import React, { useState } from "react";
import { PiFileTextBold } from "react-icons/pi";

const steps = [
  { label: "Collection", number: 1 },
  { label: "Location", number: 2 },
  { label: "Lead", number: 3 },
  { label: "Checkout", number: 4 },
];

export default function NewFile() {
    const [stepNumber, setStepNumber] = useState(2)

  // Example usage of setStepNumber
  const handleNextStep = () => {
    setStepNumber((prevStep) => prevStep + 1);
  };

  return (
    <div>
      <Header icon={<PiFileTextBold />} label="New File" />

      <div className="bg-light-gray flex">
        <div className="p-8 border-r border-light-gray1">
          <VerticalStepBar steps={steps} stepNumber={stepNumber} />
        </div>

        <div className="flex flex-col flex-1 border-r border-light-gray1">
          <div className="px-8 py-4 border-b border-light-gray1 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <button>Back</button>
              <button onClick={handleNextStep}>Next</button>
            </div>

            <div className="flex items-center gap-2">
              <button>Skip to checkout</button>
              <button>Cart</button>
            </div>
          </div>

          <div className="p-8 flex flex-col gap-4">
            <div className="bg-white border border-light-gray1 rounded-lg flex flex-col">
              <div className="p-2 border-b border-dashed border-light-gray1">
                Type
              </div>
              <div className="p-4 flex items-center justify-start">
                <button>Particular</button>
                <button>EnterPrise</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
