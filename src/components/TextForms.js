import React ,{ useState } from 'react'

export default function TextForms(props) {
    
    const handleUpClick=() =>{
      console.log("UpperCase clicked"+ text);
      let newText = text.toUpperCase();
      setText(newText)
    }
     const handleOnChange=(event) =>{
      console.log("on change");
      setText(event.target.value);
    }
    const [text, setText]= useState("enter text here");
  return (
  <div>
   <div className="container">
  <label for="FormControl" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
 
  <h1>{props.heading}</h1>
  <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="3"></textarea>
  <button className="btn btn-primary" onClick={handleUpClick}>convert to uppercase</button>
</div>
<div className="container">
<h1>your text summary</h1>
<p>{text.split(" ").length}words {text.length} characters</p>
<p>{0.008 * text.split(" ").length}minutes read</p>
<h2>preview</h2>
<p>{text}</p>
</div>
</div>
  </div>
  )
}
