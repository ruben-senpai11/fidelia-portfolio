"use client"
import { useState } from "react";

interface Props {
  interestsList: string[],
}

export default function Interest({interestsList}:Props) {

  const [clickedInterests, setClickedInterests] = useState([]);

  const handleClick = (index: number, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault(); // Prevents the default behavior of the click event

    // Check if the item is already clicked
    const isClicked = clickedInterests.includes(index);

    // If it's already clicked, remove it from the array
    if (isClicked) {
      setClickedInterests((prevState) => prevState.filter(item => item !== index));
    } else {
      // If it's not clicked, add it to the array
      setClickedInterests((prevState) => [...prevState, index]);
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-4">
        {interestsList.map((item, index) => (
          <div key={index}  onClick={(e) => handleClick(index, e)} className={ (clickedInterests.includes(index) ? "clientBudget " : "") + "rounded uppercase cursor-pointer "}>{item}</div>
        ))}
      </div>
    </>
  )
}