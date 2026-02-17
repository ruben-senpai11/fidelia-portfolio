import Image from "next/image";

import dress1 from "../assets/images/Dessin 1.png"
import dress2 from "../assets/images/Dessin 2.png"
// import dress3 from "../assets/images/Dessin 3.heic"
import dress4 from "../assets/images/Dessin 4.png"
import dress5 from "../assets/images/Dessin 5.png"
import dress6 from "../assets/images/Dessin 6.png"
import dress7 from "../assets/images/Dessin 7.png"
import dress8 from "../assets/images/Dessin 8.png"
import dress9 from "../assets/images/Dessin 9.png"
import dress10 from "../assets/images/Dessin 10.png"
import dress11 from "../assets/images/Dessin 11.png"
import dress12 from "../assets/images/Dessin 12.png"
import dress13 from "../assets/images/Dessin 13.png"
import dress14 from "../assets/images/Dessin 14.png"
import dress15 from "../assets/images/Dessin 15.png"
import dress16 from "../assets/images/Dessin 16.png"
import dress17 from "../assets/images/Dessin 17.png"
import dress18 from "../assets/images/Dessin 18.png"
import dress19 from "../assets/images/Dessin 19.png"
import dress20 from "../assets/images/Dessin 20.png"
import dress21 from "../assets/images/Dessin 21.png"
import CreationCard from "../components/creationCard";

export default function Creations() {

  return (
    <>
      <section id="creations" className="w-full overflow-hidden ">

        <div className="flex flex-col gap-12 border-solid w-100">
          <h2 className="w-full text-4xl text-center">Mes Créations</h2>
          <div className="creation-container">
            <CreationCard
              imageSrc={dress1}
              width="w-[300px]"
              title="Femme Sauvage"
              descripton="Robe de soirée confortable faite à base de laine et de velour pour un confort un éclat et une beauté sans pareilles"
            />
            <CreationCard
              imageSrc={dress2}
              width="w-[400px]"
              title="Femme Sauvage"
              descripton="Robe de soirée confortable faite à base de laine et de velour pour un confort un éclat et une beauté sans pareilles"
            />
            <CreationCard
              imageSrc={dress13}
              width="w-[400px]"
              title="Femme Sauvage"
              descripton="Robe de soirée confortable faite à base de laine et de velour pour un confort un éclat et une beauté sans pareilles"
            />
            <CreationCard
              imageSrc={dress4}
              width="w-[300px]"
              title="Femme Sauvage"
              descripton="Robe de soirée confortable faite à base de laine et de velour pour un confort un éclat et une beauté sans pareilles"
            />
          </div>
          <div className="flex justify-center w-100">
            <a href="https://wa.me/+22994065204" className="btn cta mt-4 " >
              <span className="cta-text">
                Voir toutes mes Créations
              </span>
              <span className="cta-transition"></span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}