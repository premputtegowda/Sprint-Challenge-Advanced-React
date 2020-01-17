import React, { useState } from 'react';
import {useDarkMode} from '../hooks/useDarkMode';


export const toggleMode = (val) => !val;

export default function Nav(){
    const [darkMode, setDarkMode] = useDarkMode(false)
  
      
    return (
       <div>
           <h1>Popular Players</h1>
           <button data-testid="toggle" onClick={()=>setDarkMode(toggleMode(darkMode))}> {darkMode ?  "Light" : "Dark"}</button>
       </div>
    )
}