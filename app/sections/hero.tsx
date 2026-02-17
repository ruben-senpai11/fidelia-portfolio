import Image from "next/image";
import harmonyAngel from "../assets/images/super_angel.png"
import Maxime from "../assets/images/Maxime_Dossou_png.png"
import David from "../assets/images/David_Olkarny.png"
import Customer from "../assets/images/profile-pic (12).png"
import RatingStars from "../assets/images/trustpilot_ratings_star.webp"
import BlueDress from "../assets/images/blue_dressing.png"

import "./heroBackground.css"
import Link from "next/link";


export default function Hero() {

  return (
    <>
      <section id="hero" className="w-full overflow-hidden ">
        <div className="hero-container flex justify-between w-full pt-20 ">
          <div className="flex flex-col w-[50%] gap-8 order-2 ">
            <h1 className="text-5xl">Multipliez votre charisme et révélez votre beauté</h1>
            <h2 className="text-2xl">avec une tenue sur mesure, qui fait resplendir votre forme et affirme votre beauté naturelle.</h2>
            <a href="https://wa.me/+22994065204" className="btn cta mt-4 " >
              <span className="cta-text">
                Découvrir mon univers
              </span>
              <span className="cta-transition"></span>
            </a>
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
              <p className="uppercase">+ 200</p>
              <Image src={RatingStars} alt="5 stars" width={100} />
              <p>béninois.es satisfaits</p>
            </div>
          </div>
          <div className="hero-image w-[50%] max-h-[d550px] mt-32 ml-[-25px] order-1 ">
            <Image src={BlueDress} alt="Ravissane femme en robe blue princesse" className="h-100 mt-[-200px] mlr-[-160px]" />
          </div>
        </div>
      </section>
    </>
  )
}