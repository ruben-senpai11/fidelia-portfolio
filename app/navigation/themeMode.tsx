"use client";

import { useEffect, useState } from 'react';
import "./themeMode.css"

function ThemeMode(){
  
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("theme") as string || "light"
  );

  const handleToggle = ()=>{  
    if(themeMode==='light'){
      setThemeMode('dark')
    }else{
      setThemeMode('light')
    }

    console.log(themeMode)
  }
  useEffect(()=>{
    localStorage.setItem("theme", themeMode);
    const userTheme:string = localStorage.getItem("theme") as string;
    document.querySelector('html')?.setAttribute('data-theme', userTheme)
  }, [themeMode])

  return(
    <>
      <div className="theme">
        <label className="theme-switch">
          <input type="checkbox" value={themeMode} onChange={handleToggle} defaultChecked={themeMode === "dark" ? true : false}/>
          <span className="theme-slider round"></span>
        </label>
      </div>
    </>
  )
}

export default ThemeMode;