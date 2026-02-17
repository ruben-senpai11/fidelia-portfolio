import Image from "next/image";
import superWoman from "../assets/images/Dessin 2.png"

import drawing from "../assets/images/Dessin 5.png"
import sewing from "../assets/images/Dessin 14.png"

import Link from "next/link";


export default function Style() {

  return (
    <>
      <section id="style" className="w-full overflow-hidden ">
        <h2 className="w-full text-4xl text-center">L'essence de mon style unique </h2>
        <div className="hero-container flex justify-between w-full pt-32 ">
          <div className="hero-image w-[50%]  ">
            {/* <h1 className="text-5xl">Multipliez votre charisme et révélez votre beauté</h1> */}
            <h2 className="text-2xl">Je crée nnkcn dk lsjjdrkzcln   r sdvcrezdsnk avec une tenue sur mesure, qui fait resplendir votre forme et affirme votre beauté naturelle.</h2>

            <div className="workflow pt-10 flex justify-center gap-24">
              <div className="style-card">
                <Image src={drawing} alt="Drawing a model" />
                <p>Je dessine des modèles uniques à l'encre de mes mains</p>
              </div>
              <div className="style-card">
                <Image src={sewing} alt="Sewing a model" />
                <p>Je les confectionne ou les confie à une struture partenaire compétente</p>
              </div>
            </div>

            <div className="flex justify-centder w-100">
              <a href="https://wa.me/+22994065204" className="btn cta mt-4 " >
                <span className="cta-text">
                  Commander ma tenue sur mesure
                </span>
                <span className="cta-transition"></span>
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[35%] mt-24 gap-8">
            <Image src={superWoman} alt="Harmony Angel" className="h-100 mt-[-200px] mlr-[-160px]" />
          </div>
        </div>
      </section>
    </>
  )
}