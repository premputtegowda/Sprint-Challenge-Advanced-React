import {useEffect, useState} from 'react';



export const useDarkMode = ()=>{
    const [value, setValue] = useState(false);
    useEffect( ()=> {
        const body = document.querySelector('body')
        value ? body.classList.add('dark-mode') :
        body.classList.remove('dark-mode')
    },[value])
    return [value,setValue]
}