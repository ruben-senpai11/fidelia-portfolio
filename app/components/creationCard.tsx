import Image, { StaticImageData } from "next/image"

interface Props {
  imageSrc : StaticImageData
  width : string
  title: string
  descripton : string
}

export default function CreationCard({imageSrc, width, title, descripton}: Props) {


  return (
    <>
      <div className="creationCard">
        <Image src={imageSrc} alt="femme sauvage en tenue de soirée" className={width} />
        <div className="creation-description">
          <h3 className="cteation-title font-bold text-4xl">{title}</h3>
          <p>{descripton} </p>
        </div>
      </div>
    </>
  )
}