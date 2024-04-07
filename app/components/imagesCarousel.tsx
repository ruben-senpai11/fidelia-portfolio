"use client"

import { useState, useEffect } from 'react';

import designer from "../assets/Illustrations/designer.png"
import developer from "../assets/Illustrations/dev.png"
import leads from "../assets/Illustrations/leads.png"
import marketer from "../assets/Illustrations/marketers.png"
import Image, { StaticImageData } from 'next/image';

interface Props {
  initialImage: StaticImageData,
  delay: number
}


const ImageCarousel = ({ initialImage, delay }: Props) => {
  const [index, setIndex] = useState(0);

  const images = [designer, developer, leads, marketer]

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, delay);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Image src={images[index]} alt="White Devs Artisans" className='artisanIllustration' />
    </>
  );
};

export default ImageCarousel;
