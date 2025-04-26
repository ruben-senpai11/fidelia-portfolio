import Hero from "./sections/hero";


export default function Page({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {

  const interestsList: string[] = ["Web design", "Dévelopment web", "Branding", "Marketing", "Autres"];
  const budgetEUR: string[] = ["<2k", "2-5K", "5-10K", ">10K", "JE NE SAIS PAS ENCORE"];
  const budgetCFA: string[] = ["<500.000", "500.000-2M", "2M-10M", ">10M", "JE NE SAIS PAS ENCORE"]

  return (
    <>
      <main className="flex flex-col items-center justify-between ">
        <Hero />
        
      </main>
    </>
  )
}