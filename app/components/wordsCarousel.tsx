"use client"
import { useState, useEffect } from 'react';

interface Props {
  initialWord: string,
  delay?: number,
}


const WordCarousel = ({ initialWord, delay }: Props) => {

  const [index, setIndex] = useState(0);
  const words: string[] = ["designers", "développeurs", "marketers"]

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, delay);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <span className={(index === 0 ? "bg-blue-400 " : index === 1 ? "bg-orange-300 text-slate-900 " : index === 2 ? "bg-green-300 " : index === 3 ? "bg-purple-400 " : "bg-blue-400 ") + "artisan-role font-playfair italic px-4 text-[72px] text-black "} >
        {words[index]}
      </span>
    </>
  );
};

export default WordCarousel;
