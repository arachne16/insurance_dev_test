import React, { useState } from "react";
import AgeStep from "./AgeStep";
import EmailStep from "./email-step";
import SummaryStep from "./SummaryStep";
import NameStep from "./nameStep";

interface BuyflowProps {
  productId: ProductIds;
}

export enum ProductIds {
  devIns = "dev_ins",
  designer = "designer_ins"
}

const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: "Developer Insurance",
  [ProductIds.designer]:"Designer Insurance"
};

const Buyflow: React.FC<BuyflowProps> = (props) => {
  const [currentStep, setStep] = useState(PRODUCT_IDS_TO_NAMES[props.productId] === "Designer Insurance" ? "name" : "email");
  const [collectedData, updateData] = useState({
    email: "",
    age: 0,
    name:""
  });
  const getStepCallback = (nextStep: string) => (field: string, value: any) => {
    updateData({ ...collectedData, [field]: value });
    console.log("nextStep",nextStep)
    setStep(nextStep);
  };
  return (
    <div className="flex flex-col items-center">
      <h4 className="mb-6 text-2xl">
        Buying {PRODUCT_IDS_TO_NAMES[props.productId]}
      </h4>
      <div className="flex justify-center w-60">
        {
          (currentStep === "name" && (
            <NameStep cb={getStepCallback("email")} />
          )) || 
        (currentStep === "email" && (
          <EmailStep cb={getStepCallback("age")} />
        )) ||
          (currentStep === "age" && (
            <AgeStep cb={getStepCallback("summary")} />
          )) ||
          (currentStep === "summary" && (
            <SummaryStep collectedData={collectedData} />
          ))
        }
      </div>
    </div>
  );
};

export default Buyflow;
