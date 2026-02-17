import Image, { StaticImageData } from "next/image"

interface Props {
  title: string
  description : string
  imageSrc : StaticImageData
  imageAlt : string
}

export default function Crea({title, description, imageSrc, imageAlt}:Props) {


  return (
    <>


      <div className="crea flex">
        <div className="crea-overlay">
          <div className="crea-hover-text p-8">
            <div className="flex flex-col gap-3">
              <h3 className="text-4xl">{title}</h3>
              <p className="text-sm">{description} </p>
            </div>
          </div>
        </div>
        <div className="crea-image">
          <Image src={imageSrc} alt={imageAlt} />
        </div>
      </div>

    </>
  )
}