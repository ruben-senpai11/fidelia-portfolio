"use client"
import { useState } from "react"

interface Props {
  title: string,
  budgetCFA: string[],
  budgetEUR: string[],
  budget: string,
  handleBudgetClick: (item:string) => void;
}

export default function Budget({ title, budgetCFA, budgetEUR, budget, handleBudgetClick }: Props) {

  const [currency, setCurrency] = useState("eur")

  const handleChange = () => {
    if (currency == "cfa") {
      setCurrency("eur")
    } else {
      setCurrency("cfa")
    }
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex relative">
          <h3 className="uppercase flex gap-2 font-medium ">
            {title}
            <span className="flex items-center gap-1 currency" onClick={handleChange} >
              <button type="button" title="change currency" className="budgetCurrency font-medium">{currency=="eur" ? "EUR" : "CFA"}</button>
              <svg fill="currentColor" width="10px" height="10px" viewBox="0 0 30.727 30.727">
                <path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0 l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"/>
              </svg>
            </span>
          </h3>
        </div>
        <div className={currency=="eur" ? "d-none" : "cfa-budget flex flex-wrap gap-4"} >
          {budgetCFA.map((item, index) => (
            <div key={index} onClick={() => handleBudgetClick(item)} className={ (budget===item ? "clientBudget " : "") + "rounded uppercase cursor-pointer " }>
              {item}
            </div>
          ))}

        </div>
        <div className={currency=="cfa" ? "d-none" : "euro-budget flex flex-wrap gap-4"} >
          {budgetEUR.map((item, index) => (
            <div key={index} onClick={() => handleBudgetClick(item)} className={ (budget===item ? "clientBudget " : "") + "rounded uppercase cursor-pointer " }>
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}