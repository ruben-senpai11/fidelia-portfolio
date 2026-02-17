import Image from "next/image";
import superWoman from "../assets/images/Dessin 2.png"

import drawing from "../assets/images/20260128_131839.png"
import sewing from "../assets/images/20260128_132015.png"

import Link from "next/link";


export default function Vision() {

  return (
    <>
      <section id="style" className="w-full overflow-hidden ">
        <h2 className="w-full text-4xl text-center">Ma Vision</h2>
        <div className="hero-container flex justify-between w-full pt-32 ">
          <div className="hero-image w-[50%]  ">
            {/* <h1 className="text-5xl">Multipliez votre charisme et révélez votre beauté</h1> */}
            <h2 className="text-2xl">A la question "Pourquoi vous vous battez, que voulez-vous accomplir avec Harmony?" <br /> je réponds ceci : </h2>
            <ol className="faq mt-4">
              <li>Redorer l'image de la mode</li>
              <li>Créer une entreprise responsable des valeurs</li>
              <li>Redonner à la femme sa valeur et sa dignité</li>
              <li>Contribuer à  l'émancipation du tourisme au Bénin</li>
            </ol>          
            <p className="pt-6">Et surtout, satisfaire mes précieux client et leur ravir un sourire et une joie profonde à chaque fois qu'ils portent mes créations</p>

            <div className="flex justify-centder w-100">
              <a href="https://wa.me/+22994065204" className="btn cta mt-4 " >
                <span className="cta-text">
                  Moi aussi, je veux créer mon syle harmonieux
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