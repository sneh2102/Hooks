import React from 'react'
import { useState, useEffect } from 'react'
const colors = {
  Sea: '#a2ccb6',
  Sand: '#fceeb5',
  Peach: '#ee786e',
}

export default function UseEffect() {
    const [color, setColor] = useState(colors.Sea)
    useEffect(
      () => {
        document.body.style.background = color
      }
      
    )


    const changeColor=(e)=>{
      setColor(e.target.value);
      

    }
    return(
<>
        <select value={color} onChange={changeColor}>
          <option value={colors.Sea}>Sea</option>
          <option value={colors.Sand}>Sand</option>
          <option value={colors.Peach}>Peach</option>
        </select>
        <h1>{color}</h1>
          </>
    )
}
