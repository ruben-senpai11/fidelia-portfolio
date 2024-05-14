import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  label: string,
  description: string;    
  link: string,
  image: StaticImageData,
  imageAlt: string,
  year: string,
  skills: string[]
}

export default function Project({ label, description, link, image, imageAlt, year, skills }: Props) {

  const [hidden, setHidden] = useState(true)
  const handleHidden = () =>{
    setHidden(!hidden)
  }

  const colors = ["blue", "yellow", "orange", "red", "dark", "purple", "cyan", "green", ""]

  return (
    <>
      <div className="project">
        <Link href={link} target="_blank" >
          <div className="project-image">
            <Image src={image} alt={imageAlt} />
          </div>
        </Link>
        <div className="project-details py-6 flex flex-col gap-4">
          <div className="flex justify-between">
            <p className="text-[20px]  ">{label}</p>
            <p className="">{year}</p>
          </div>
          <div className={(hidden ? "flex justify-end" : "justify-center") + " description"}>
            <p className={(hidden ? "more" : "less") + " text-[15px] description-text"}>{description} </p>
            <p onClick={handleHidden} className={(hidden? "" : "visible ") + " see-more"}> {hidden ? "...voir plus" : "Voir moins" } </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {skills.map((item, index) => (
              <div key={index} className={ (colors) + " skill rounded light "}>{item}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}