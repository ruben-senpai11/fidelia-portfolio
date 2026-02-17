"use client"

import { useState, useEffect } from 'react';

import designer from "../assets/Illustrations/designer.png"
import developer from "../assets/Illustrations/dev.png"
import leads from "../assets/Illustrations/leads.png"
import marketer from "../assets/Illustrations/marketers.png"
import projects from "../assets/Illustrations/projects.png"
import Image from 'next/image';

interface Props {
  initialImage: string,
  delay: number
}


const ImageCarousel = ({ initialImage, delay }: Props) => {
  const [index, setIndex] = useState(0);

  const images = [designer, developer, marketer]

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, delay);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* <Image src={designer} alt="White Devs Artisans" className='artisanIllustration' /> */}
      <Image src={images[index]} alt="White Devs Artisans" className='artisanIllustration' />
    </>
  );
};

export default ImageCarousel;
