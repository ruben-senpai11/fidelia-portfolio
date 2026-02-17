import { StaticImageData } from "next/image";
import Image from "next/image";

interface Props {
  image: StaticImageData,
  imageAlt: string,
  label: string,
  description: string,
  className: string
}

export default function Principle({ image, imageAlt, label, description, className }: Props) {
  return (
    <>
      <div className={className}>
        <div className={(" principle flex flex-col gap-8")}>
          <div className="principle-img">
            <Image src={image} alt={imageAlt} />
          </div>
          <div className="principle-info flex flex-col gap-2 ">
            <h4 className="text-[24px] ">{label}</h4>
            <p>{description}</p>
          </div>
        </div>

      </div>
    </>
  )
}