import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleDownClick = ()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleOnchange = (event)=>{
        setText(event.target.value);
    }
    const handleClearClick = ()=>{
      let newText="";
      setText(newText);
  }
  const handleClear=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
  }
    const[text, setText]=useState('Enter Text Here');
    
  return (
      <>
      <h1>{props.heading}</h1>
<div className="mb-3 conatiner">
  <textarea className="form-control" onChange={handleOnchange} value={text} id="MyBox  " rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
<button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lower Case</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear buttom</button>
<button className="btn btn-primary mx-2" onClick={handleClear}>Clear Spaces</button>
<div className="container my-2"></div> 
<h1>Your text Summary</h1>
<p>{text.split(" ").length} Words {text.length} character</p>
<p>{0.008*text.split(" ").length} Minutes read</p>
<h3>
    Preview
</h3>
<p>{text}</p>
</>


  )
}
