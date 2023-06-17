import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        // let newText = text.toUpperCase();
        // setText(newText;
        setText(text.toUpperCase());
        props.showAlert("Text has been converted to Upper Case", "success");
    }
    const handleLoClick = () => {
        console.log("Uppercase was clicked" + text);
        // let newText = text.toUpperCase();
        // setText(newText;
        setText(text.toLowerCase());
        props.showAlert("Text has been converted to Lower Case", "success");
    }
    const handleClearClick = () => {
        console.log("Uppercase was clicked" + text);
        // let newText = text.toUpperCase();
        // setText(newText;
        setText("");
        props.showAlert("Text has been cleared", "success");
    }
    const handleOnChange = (event) => {
        console.log("On Change fired");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    // text = "I am vaibhav";   wrong way to change state
    //Correct way is given below;
    // setText("New text");
    return (
        <>
        <div className='container'>
            <h1 style={{color : props.mode==="light"?"#212529":"white"}}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==="light"?"white":"#212529", color : props.mode==="light"?"#212529":"white"}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color : props.mode==="light"?"#212529":"white"}}>
            <h2>Your text summary</h2>
            <p><b>{text.trim() === '' ? 0 : text.match(/\S+/g).length}</b> words and <b>{text.length}</b> characters</p>
            <p>{(text.split(" ").length)*0.008} minutes reading</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
