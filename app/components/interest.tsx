"use client"
import { useState } from "react";

interface Props {
  interestsList: string[],
}

export default function Interest({interestsList}:Props) {

  const [clickedInterest, setClickedInterest] = useState(null);

  const handleClick = (value:any) => {
    setClickedInterest(value);
  };

  return (
    <>
      <div className="flex flex-wrap gap-4">
        {interestsList.map((item, index) => (
          <div key={index}  onClick={() => handleClick(index)} className={ (clickedInterest===index ? "clientBudget " : "") + "rounded uppercase cursor-pointer "}>{item}</div>
        ))}
      </div>
    </>
  )
}