import React, { useState } from "react";
// import Alert from "./Alert";

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [myStyle, setMyStyle] = useState({
        color :'black',
        backgroundColor :'white'
    });
    let handleOnChange = (event) => {
        console.log("you entered in text area")
        setText(event.target.value);
    }
    let handleUpclick =()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case" , "success");
    }
    let handleLoclick =()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case" , "success");
    }
    let handleCLearclick =()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text is cleared" , "success");
    }
    let numWords =(text)=>{
        if(text.length===0){
            return 0;
        }else{
            let num = 0;
            for(var i=0;i<text.split(" ").length;i++){
                num+=1;
            }
            return num;
        }
    }
    let handleDupclick =()=>{
        let newText = "";
        for(var i =0;i<text.length;i++){
            if(text[i]===text[i+1]){
                continue;
            }else{
                newText+=text[i];
            }
        }
        setText(newText);
        props.showAlert("Duplicates removed yayy!!" , "success");
    }
   
    let darkMode = ()=>{
        if(myStyle.color === 'black'){
            let newStyle = {
                color :'white',
                backgroundColor :'black'
            }
            setMyStyle(newStyle);
            document.body.style.backgroundColor ='black';
            props.showAlert("Dark mode has been enabled" , "success");
        }
        else{
            let newStyle = {
                color :'black',
                backgroundColor :'white'
            }
            setMyStyle(newStyle);
            document.body.style.backgroundColor ='white';
            props.showAlert("Light mode has been enabled" , "success");
        }
    }
    
    return (
        <>
        <div className="container" style={myStyle}>
            <h2>{props.heading}</h2>
            <div className="my-3">
                <textarea className="form-control" style={myStyle} value={text} onChange={handleOnChange} id="myText" rows="5"></textarea>
            <button className="btn btn-dark my-3 mx-2" onClick={handleUpclick}>Convert To Uppercase</button>
            <button className="btn btn-dark my-3 mx-2" onClick={handleLoclick}>Convert To Lowercase</button>
            <button className="btn btn-dark my-3 mx-2" onClick={handleCLearclick}>Clear Text</button>
            <button className="btn btn-dark my-3 mx-2" onClick={handleDupclick}>Remove Duplicates</button>
            <button className="btn btn-dark my-3 mx-2" onClick={darkMode} >Change Theme</button>
            </div>
        </div>
        <div className="container my-3" style={myStyle}>
            <h2>Your text summary</h2>
            <p id="firstId">{numWords(text)} Words {text.length} Characters  </p>
            <p>This para will takes {0.008 * text.split(" ").length}sec to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter text in above box to preview it here!"}</p>

        </div>
        </>
    );
}
