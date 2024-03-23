import { StaticImageData } from "next/image";
import Image from "next/image";

interface Props {
  label: string,
  image : StaticImageData,
  imageAlt: string,
  year: string,
  skills: string[]
}

export default function Project({label, image, imageAlt, year, skills}:Props) {
  return (
    <>
      <div className="project">
        <div className="project-image">
          <Image src={image} alt={imageAlt} />
        </div>
        <div className="project-details py-6 flex flex-col gap-4">
          <div className="flex justify-between">
            <p className="text-[20px]  ">{label}</p>
            <p className="">{year}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {skills.map((item, index) => (
              <div key={index} className=" skill rounded">{item}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}