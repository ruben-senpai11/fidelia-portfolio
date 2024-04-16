"use client"
import { useState } from "react";

interface Props {
  interestsList: string[],
}

export default function Interest({interestsList}:Props) {

  const [clickedInterests, setClickedInterests] = useState([]);

  const handleClick = (index: string , e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault(); 

    const isClicked = clickedInterests.includes(index as never);

    if (isClicked) {
      setClickedInterests((prevState) => prevState.filter(item => item !== index));
    } else {
      setClickedInterests((prevState) => [...prevState, index as never]);
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-4">
        {interestsList.map((item, index) => (
          <div key={index}  onClick={(e) => handleClick(item, e)} className={ (clickedInterests.includes(item as never) ? "clientBudget " : "") + "rounded uppercase cursor-pointer "}>{item}</div>
        ))}
      </div>
    </>
  )
}