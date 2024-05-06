import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

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
          <div className="description">
            <p className="text-[15px]">{description} </p>
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