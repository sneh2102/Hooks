import React from 'react'
import { useState, useMemo} from 'react';

export default function UseMemo() {
    const [myNum, setMyNum] = useState(0);
    const [show, setShow]=useState(false);
    const getValue = ()=> {
    return setMyNum(myNum + 1);
    };
    const countNumber = (num) => {
    for (let i = 0; i < 1000000000; i++) {}
    return num;
    };

    const CheckData = useMemo(()=>{return countNumber(myNum);},[myNum]);

    
  return (
   <>
<button onClick={getValue} style={{ backgroundColor: "red" }}>
Counter
</button>
<p> My new number {CheckData} </p>
<button onClick={()=>setShow(!show) }>
{show? "You clicked me" : "Click me plz"}
</button>
   </>
  )
}
