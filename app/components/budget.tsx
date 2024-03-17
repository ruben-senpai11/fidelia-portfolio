"use client"
import { useState } from "react"

interface Props {
  budgetCFA: string[],
  budgetEUR: string[]
}

export default function Budget({ budgetCFA, budgetEUR }: Props) {

  const [currency, setCurrency] = useState("cfa")

  const handleChange = () => {
    if (currency == "cfa") {
      setCurrency("eur")
    } else {
      setCurrency("cfa")
    }
  }

  const [clickedButton, setClickedButton] = useState(null);

  const handleClick = (value:any) => {
    setClickedButton(value);
  };

  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex relative">
          <h3 className="uppercase flex gap-2 ">
            Your BUDGET IN
            <span className="flex items-center gap-1 currency" onClick={handleChange} >
              <button title="change currency" className="budgetCurrency font-medium">{currency=="eur" ? "EUR" : "CFA"}</button>
              <svg fill="currentColor" width="10px" height="10px" viewBox="0 0 30.727 30.727">
                <path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0 l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"/>
              </svg>
            </span>
          </h3>
        </div>
        <div className={currency=="eur" ? "d-none" : "cfa-budget flex flex-wrap gap-4"} >
          {budgetCFA.map((item, index) => (
            <div key={index} onClick={() => handleClick(index)} className={ (clickedButton===index ? "clientBudget " : "") + "rounded uppercase" }>
              {item}
            </div>
          ))}

        </div>
        <div className={currency=="cfa" ? "d-none" : "euro-budget flex flex-wrap gap-4"} >
          {budgetEUR.map((item, index) => (
            <div key={index} onClick={() => handleClick(index)} className={ (clickedButton===index ? "clientBudget " : "") + "rounded uppercase" }>
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}