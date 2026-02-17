import Creations from "./sections/creations";
import Hero from "./sections/hero";
import Style from "./sections/style";
import Vision from "./sections/vision";


export default function Page({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {


  return (
    <>
      <main className="flex flex-col items-center justify-between ">
        <Hero />
        <Style />
        <Creations />
        <Vision />
      </main>
    </>
  )
}