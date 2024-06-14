import React from "react";
import Link from "next/link";

interface SummaryStepProps {
  collectedData: {
    email: string;
    age: number;
    name:string;
  };
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2 items-start">
        {props.collectedData.name && <div>First Name:{props.collectedData.name}</div>}
        <div className="whitespace-nowrap">Email: {props.collectedData.email}</div>
        <div>Age: {props.collectedData.age}</div>
      </div>
      <Link className="btn btn-primary" href="/purchased=dev_ins">
        Purchase
      </Link>
    </div>
  );
};

export default SummaryStep;
