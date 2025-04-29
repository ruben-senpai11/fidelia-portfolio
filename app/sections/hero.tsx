import Image from "next/image";
import harmonyAngel from "../assets/images/super_angel.png"
import Maxime from "../assets/images/Maxime_Dossou_png.png"
import David from "../assets/images/David_Olkarny.png"
import Customer from "../assets/images/profile-pic (12).png"
import RatingStars from "../assets/images/trustpilot_ratings_star.webp"

import "./heroBackground.css"
import Link from "next/link";


export default function Hero() {

  return (
    <>
      <section id="hero" className="w-full overflow-hidden ">
        <div className="hero-container flex justify-between w-full pt-20 ">
          <div className="flex flex-col w-[50%] gap-8">
            <h1 className="text-5xl">Boostez votre entreprise de +230% en 3 semaines</h1>
            <h2 className="text-2xl">avec une refonte web, du SEO, des automatisations et l'IA</h2>
            <animate href="https://tally.so/r/mOryj7" className="btn cta mt-4 " >
              <span className="cta-text">
                Je veux savoir combien je peux gagner
              </span>
              <span className="cta-transition"></span>
            </animate>
            <div className="inline-flex justify-start items-center flex-wrap gap-2 pt-8">
              <div className="trust flex">
                <div className="trusted-image">
                  <Image src={Customer} alt="Ruben : 1er partnaire" />
                </div>
                <div className="trusted-image ml-[-25px]">
                  <Image src={Maxime} alt="Maxime : 2ème partenaiere" className="max" />
                </div>
                <div className="trusted-image ml-[-25px]">
                  <Image src={David} alt="David : 3ème partenaiere" />
                </div>
              </div>
              <p className="uppercase">+ 100</p>
              <Image src={RatingStars} alt="5 stars" width={100} />
              <p>reviews</p>
            </div>
          </div>
          <div className="hero-image w-[50%] max-h-[350px] ">
            <Image src={harmonyAngel} alt="Harmony Angel" className="h-100 mt-[-200px] mlr-[-160px]" />
          </div>
        </div>
      </section>
    </>
  )
}