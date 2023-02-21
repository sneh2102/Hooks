import React, { useContext } from "react";
import { FirstName, LastName} from "./UseContext";
const ComB = () => {
const fname = useContext(FirstName);
const lname = useContext(LastName);
return (<h1>MY name is {fname} {lname}</h1>);
};
export default ComB;