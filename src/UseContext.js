import React, { createContext, } from "react";
import ComB from "./ComB";
const FirstName = createContext();
const LastName = createContext();

const UseContext=()=> {
  return (
    <>  
<FirstName.Provider value={"Sneh"}>
<LastName.Provider value={"Patel"}>
  <ComB/>
</LastName.Provider>
</FirstName.Provider>
</>
  )
}
export default UseContext
export { FirstName, LastName };