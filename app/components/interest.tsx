"use client"
import { useState } from "react";

interface Props {
  interestsList: string[],
  clickedInterests: string[],
  handleInterestClick: (item: string) => void;
  errorMessage? : string
}

export default function Interest({interestsList, clickedInterests, handleInterestClick, errorMessage}:Props) {



  return (
    <>  
      <div className="flex flex-wrap gap-4">
        {interestsList.map((item, index) => (
          <div key={index}  onClick={() => handleInterestClick(item)} className={ (clickedInterests.includes(item as never) ? "clientBudget " : "") + "rounded uppercase cursor-pointer "}>{item}</div>
        ))}
      </div>
      {/* {errorMessage && <span className="error">{errorMessage}</span>} */}
    </>
  )
}