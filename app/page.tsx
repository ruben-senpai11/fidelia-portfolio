import Service from "./components/service";
import dynamic from 'next/dynamic';


const OurWorks = dynamic(() => import('./sections/works'), { ssr: true });
const Principles = dynamic(() => import('./sections/principles'), { ssr: true });
const Marquee = dynamic(() => import('./sections/marquee'), { ssr: true });
const BookJourney = dynamic(() => import('./sections/bookJourney'), { ssr: true });


import './sections/heroBackground.css'
import Footer from "./navigation/footer"

import Argument from "./components/argument";
import ContactForm from "./sections/contact";
import Image from "next/image";
import WordCarousel from "./components/wordsCarousel";
import ImageCarousel from "./components/imagesCarousel";

import developer from "./assets/Illustrations/designer.png"
import Hero from "./sections/hero";
import Services from "./sections/services";
import About from "./sections/about";


export default function Page({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {

  const interestsList: string[] = ["Web design", "Dévelopment web", "Branding", "Marketing", "Autres"];
  const budgetEUR: string[] = ["<2k", "2-5K", "5-10K", ">10K", "JE NE SAIS PAS ENCORE"];
  const budgetCFA: string[] = ["<500.000", "500.000-2M", "2M-10M", ">10M", "JE NE SAIS PAS ENCORE"]

  return (
    <>
      <main className="flex flex-col items-center justify-between ">
        <Hero />
        {/* <Services />    
        <OurWorks title="Projets récents" />
        <About/>
        <Principles title="Nos principes" /> */}
      </main>

      {/* <Marquee marquee1Content={["Business2Business", "Ecomerce", "SaaS", "Développement Web", "Busniness2Consumers", "CMS", "No-code", "Responsive", "Ecomerce", "SaaS"]} marquee2Content={["CMS", "No-code", "Responsive design", "Ecomerce", "Dévelopment web", "SaaS", "Business2Business"]} /> */}

      <ContactForm interestsList={interestsList} budgetCFA={budgetCFA} budgetEUR={budgetEUR} />

    </>
  )
}