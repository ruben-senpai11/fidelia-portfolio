"use client"
import { useState } from "react"
import Budget from "./budget"
import Interest from "./interest"

interface Props{
  interestsList: string[],
  budgetEUR: string[],
  budgetCFA: string[]
}

interface FormData {
  name: string;
  email: string;
  interests: string,
  budget: string
}


function ContactForm({interestsList, budgetEUR, budgetCFA}:Props) {

  const [clickedInterests, setClickedInterests] = useState<string[]>([]);

  const handleInterestClick = (value: string) => {

    const isClicked = clickedInterests.includes(value);
  
    const newClickedInterests = isClicked ? clickedInterests.filter((item) => item !== value) : [...clickedInterests, value]; 
  
    setClickedInterests(newClickedInterests);
  
    setFormData((prevFormData) => ({
      ...prevFormData,
      interests: newClickedInterests.join(", "), 
    }));
  };
  
    
  const [budget, setBudget] = useState("");

  const handleBudgetClick = (value:any) => {
    setBudget(value);
    setFormData({ ...formData, budget: value });
  };

  

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    interests: "",
    budget: "",
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData)
    
    try {
      const response = await fetch('/api/mailer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', interests: '', budget: '' });
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    
    <>
      <main className="flex flex-col items-center justify-between ">
        <section id="contact" className="sides-section flex gap-2 py-[50px]">
          <div className="left-side flex flex-col w-[50%] gap-6 ">
            {/* <p className="section-label text-[18px] flex gap-4 items-center"><span className="s-number">05</span><span className="separator"></span><span className="s-label uppercase">Contact</span></p> */}
            <h2 className="text-[48px] "  >Let&#39;s connect</h2>
            <h3 className="uppercase w-[50%] text-[18px] " >IL EST TEMPS DE FAIRE CONNAÎTRE VOTRE ENTREPRISE AU MONDE ENTIER</h3>
            <a href="mailto:contact@whitedevs.agency" className="btn cta w-max">
                <span className="cta-text">Envoyer plutôt un mail</span>
                <span className="cta-transition"></span>
            </a>
          </div>
          <div className="right-side py-4 w-[50%]  ">
            <form onSubmit={handleSubmit} className="contact-container flex flex-col gap-10 p-6 ">
              <div className="flex flex-col gap-4">
                <h3 className="uppercase font-medium ">INFOS DE CONTACT *</h3>
                <div className="contact-infos flex gap-4">
                  <input type="text " name="name" placeholder="VOTRE NOM *" onChange={handleChange} value={formData.name} />
                  <input name="email" type="e-mail" placeholder="VOTRE E-MAIL *" onChange={handleChange} value={formData.email} />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="uppercase font-medium ">Vous êtes intéressez par *</h3>
                <Interest interestsList={interestsList} handleInterestClick={handleInterestClick} clickedInterests={clickedInterests} />
              </div>
              <Budget title="Votre budget en" budgetCFA={budgetCFA} budgetEUR={budgetEUR} budget={budget} handleBudgetClick={handleBudgetClick} />
              <button type="submit" className="btn cta w-max">
                <span className="cta-text font-medium">Commencer l'aventure</span>
                <span className="cta-bottom-transition"></span>
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}

export default ContactForm