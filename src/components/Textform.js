import React, { useState } from 'react';
import"./Textform.css"
export default function Textform(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text)
        let NewText = text.toUpperCase()
        setText(NewText)
        props.showAlert("Converted to Uppercase","success")
    }
    const handleLoClick = () =>{
        let NewText = text.toLowerCase()
        setText(NewText)
        props.showAlert("Converted to LowerCase","success")

    }
    const handleclearClick = () =>{
        let NewText = ""
        setText(NewText)
        setfontsize(16)
        setfontstyle(null)
        
    }
    const changeFont = (newfont) =>{ 
        setfontsize(newfont) 
        props.showAlert("Font-size Succesfully changed","success")
    }
    const changeStyle = (newstyle) =>{
        setfontstyle(newstyle)
        props.showAlert("Font-style Succesfully changed","success")
    }
    const handleOnChnage = (event) =>{
        // console.log("On change")
        setText(event.target.value)
    }
    const handlecopy = () =>{
      let text = document.getElementById("myBox")
      text.select()
      navigator.clipboard.writeText(text)
      document.getSelection().removeAllRanges()  // To remove the selected part after we press on copy button
      props.showAlert("Text copied to clipboard","success")
    }
    const handleExtraSpaces = () =>{
      let newtext = text.split(/[ ]+/)
      setText(newtext.join(" "))
      props.showAlert("Extra Spaces removed successfully","success")
    }
    const [text, setText] = useState("Enter text here");
    // text = "new text"; // wrong way to change the state
    // setText("new text"); // correct way to change the state
    const [fontsize,setfontsize ] = useState(16);
    const [fonststyle , setfontstyle] = useState('normal');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
      <h1>{props.heading}</h1>
      <div className="mb-3 my-3">
        <textarea className="form-control" value={text} onChange ={handleOnChnage} style={{backgroundColor:props.mode==='dark'?`${props.txtcolor}`:'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className={`btn btn-${props.Danger} my-2`} onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className={`btn btn-${props.Danger} my-2 mx-3`} onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className={`btn btn-${props.Danger} my-2 `} onClick={handleclearClick}>Clear Text</button>
      <button disabled={text.length===0} className={`btn btn-${props.Danger} my-2 mx-3`} onClick={handlecopy}>Copy Text</button>
      <button disabled={text.length===0} className={`btn btn-${props.Danger} my-2 `} onClick={handleExtraSpaces}>Clear space</button>
  
      <div className="btn-group my-2 mx-3">
        <button disabled={text.length===0} className={`btn btn-${props.Danger} dropdown-toggle`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Font-size
        </button>
        <ul className="dropdown-menu">
          <li><button className="dropdown-item" type="button" onClick={() => changeFont(9)}>9</button></li>
          <li><button className="dropdown-item" type="button" onClick={() => changeFont(10)}>10</button></li>
          <li><button className="dropdown-item" type="button" onClick={() => changeFont(12)}>12</button></li>
          <li><button className="dropdown-item" type="button" onClick={() => changeFont(14)}>14</button></li>
          <li><button className="dropdown-item" type="button" onClick={() => changeFont(16)}>16</button></li>
          <li><button className="dropdown-item" type="button" onClick={() => changeFont(18)}>18</button></li>
          <li><button className="dropdown-item" type="button" onClick={() => changeFont(20)}>20</button></li>
          <li><button className="dropdown-item" type="button" onClick={() => changeFont(22)}>22</button></li>
          <li><button className="dropdown-item" type="button" onClick={() => changeFont(24)}>24</button></li>
          <li><button className="dropdown-item" type="button" onClick={() => changeFont(26)}>26</button></li>
          <li><button className="dropdown-item" type="button" onClick={() => changeFont(28)}>28</button></li>
          <li><button className="dropdown-item" type="button" onClick={() => changeFont(30)}>30</button></li>
          <li><button className="dropdown-item" type="button" onClick={() => changeFont(32)}>32</button></li>
          <li><button className="dropdown-item" type="button" onClick={() => changeFont(34)}>34</button></li>
          <li><button className="dropdown-item" type="button" onClick={() => changeFont(36)}>36</button></li>
          <li><button className="dropdown-item" type="button" onClick={() => changeFont(38)}>38</button></li>
          <li><button className="dropdown-item" type="button" onClick={() => changeFont(40)}>40</button></li>
          <li><button className="dropdown-item" type="button" onClick={() => changeFont(46)}>46</button></li>
          <li><button className="dropdown-item" type="button" onClick={() => changeFont(50)}>50</button></li>
        </ul>
      </div>
      <div className="btn-group my-2">
        <button disabled={text.length===0} className={`btn btn-${props.Danger} dropdown-toggle`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Font Style
        </button>
        <ul className="dropdown-menu">
          <li><button className="dropdown-item" type="button" onClick={()=> changeStyle('normal')}>Normal</button></li>
          <li><button className="dropdown-item" type="button" onClick={()=> changeStyle('bold')}>Bold</button></li>
          <li><button className="dropdown-item" type="button" onClick={()=> changeStyle('italic')}>Italic</button></li>
          <li><button className="dropdown-item" type="button" onClick={()=> changeStyle('underline')}>Underline</button></li>
        </ul>
      </div>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 style={{display:"flex" , justifyContent:"center"}} >Your Text Summary</h1>
        <p style={{display:"flex" , justifyContent:"center"}}>{text.replace(/\./g," ").split(" ").filter(value => value!=="").length} Words and {text.trim().length} Characters</p>
        {/* text.split(/\s+/ ).filter((element)=>{return element !== 0}).lenght    we can  also use this  */}
        <p style={{display:"flex" , justifyContent:"center"}}>{0.0008 * text.replace(/\./g," ").split(" ").filter(value => value!=="").length} Minutes to read this text</p>
        <h2 style={{display:"flex" , justifyContent:"center"}}>Preview</h2>
        <div className="preview-box" style={{color:'black'}}>
          <p style={{ fontSize: `${fontsize}px` , fontStyle: fonststyle , fontWeight:fonststyle , textDecoration:fonststyle}}>{text}</p>
        </div>
    </div>
    </>
  );
}
