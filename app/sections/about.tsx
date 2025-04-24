import Argument from "../components/argument";


export default function About() {

  return (
    <>
      <section id="about-us" className="flex flex-col gap-2 pt-[180px]">
        {/* <h2 className=" text-center pb-4">Pourquoi nous choisir?</h2> */}
        <p className="section-label text-[18px] flex gap-4 items-center"><span className="s-number">03</span><span className="separator"></span><span className="s-label uppercase">Pourquoi nous choisir ?</span></p>
        <div className="sides-section flex justify-between min-w-100 gap-32">
          <div className="left-side py-0 w-[50%] flex flex-col gap-6">
            <p className="text-[32px]">Votre première option <br className="desktop" /> pour une valeur exceptionnelle.</p>
            <a href="#contact" className="learn-cta btn cta w-max">
              <span className="cta-text">
                En savoir plus
                <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5L9.88889 5M9.88889 5L5.88889 1M9.88889 5L5.88889 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </span>
              <span className="cta-transition"></span>
            </a>
          </div>
          <div className="right-side py-2 w-[100%] flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <p className="">
                Au lieu de vous parler un français fastidieux, nous irons en termes simples. Nous sommes une équipe dynamique de 3 artisans qui ont fait leur preuves et s'unissent à présent pour donner de l'impact. Nous sommes, un designer, un developpeur et un expert en marketing.
                {/* Nous avons foi en quelque chose : le potentiel illimité de nos clients. Passionés de l'entrepreneuriat, nous sommes convaincus que chaque entreprise détient en elle les graines du succès. Notre mission est simple : nourrir ces graines et les aider à germer, à grandir et à s'épanouir atteindre des sommets insoupçonnés. Nous ne sommes pas une simple agence, nous ne créons pas juste des sites et des stratégies NOUS CRÉONS DES RÉSULTATS.  */}
              </p>
              <p className="">
                Nous n'avons foi qu'en une chose, le potentiel de votre marque. Du moment que vous apportez de la valeur à vos clients, à coup sûr nous exploiterons la puissance d'internet pour vous faire grandir.
                Nous faisons concert de nos expertises pour vous garantir du résultat. Tout ce que vous avez à faire, c'est d'exprimer vos souhaits pour que nous les réalisions.
              </p>
            </div>
            <div className="arguments-col flex gap-16 pt-8">
              <Argument icon={3} label="Design Innovant" description="En adoptant une approche holistique, nous donnons vie à des créations cohérentes et mémorables qui marquent durablement le public." />
              <Argument icon={1} label="Développement axé utilisateur" description="Nous créons des interfaces fluides, une navigation intuitive, une expérience utilisateur optimale pour guider vos prospects et les convertir en clients." />
            </div>
            <div className="arguments-col flex gap-16">
              <Argument icon={2} label="Marketing Ciblé" description="Avec la stratégie adaptée, nous touchons les bonnes personnes, au bon moment avec le bon message sur le canal approprié. Nous comprenons les besoins de vos clients et les satisfont." />
              <Argument icon={4} label="Rapport Price-value" description="Nos solutions s'adaptent à votre budget. Nous utilisons les meilleures technologies et produisons du résultat sans casser votre tirelire. " />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}