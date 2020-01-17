import React, { useState } from 'react';
import {useDarkMode} from '../hooks/useDarkMode';


export default function Nav(){
    const [darkMode, setDarkMode] = useDarkMode(false)
    const toggleMode = (e) => {
        e.preventDefault();
        console.log(darkMode);
        setDarkMode(!darkMode);
        
    }
    return (
       <div>
           <h1>Popular Players</h1>
           <button onClick={toggleMode}>Toggle Light or Dark Mode</button>
       </div>
    )
}