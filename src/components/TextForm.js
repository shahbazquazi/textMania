import React, {useState} from 'react';


export default function TextForm(props) {
    const handleOnChange = (event)=>{
    //   console.log('On change');
      setText(event.target.value);
    };
    const handleUpClick = ()=>{
        //  console.log('button is clicked '+ Text);
         let makeUpperCase = Text.toUpperCase();
         setText(makeUpperCase);
         props.showAlert("Converted to Uppercase","success");
    };
    const handleLoClick = ()=>{
        let makeLowerCase = Text.toLowerCase();
        setText(makeLowerCase);
        props.showAlert("Converted to Lowercase","success");
    };
    const handleClearClick =()=>{
        setText('');
        props.showAlert("Cleared your text","success");
    };
    const handleCopyClick =()=>{
        let copyText = document.getElementById('mytextbox');
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard","success");
    };
    const handleRemoveSpacesClick =()=>{
        let newText = Text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed all the unwanted spaces","success");
    };
    
   
    const [Text, setText] = useState('');
    return (
        <>
        <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#161659':'white',color: props.mode==='dark'?'white':'black'}} value={Text} id="mytextbox" rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-primary btn-sm" onClick={handleUpClick}>UpperCase</button>
            <button type="button" className="btn btn-primary btn-sm m-3" onClick={handleLoClick}>LowerCase</button>
            <button type="button" className="btn btn-primary btn-sm " onClick={handleClearClick}>ClearAll</button>
            <button type="button" className="btn btn-primary btn-sm m-3 " onClick={handleCopyClick}>Copy</button>
            <button type="button" className="btn btn-primary btn-sm  " onClick={handleRemoveSpacesClick}>Remove Spaces</button>


        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
          <h2>Your text summary</h2>
          <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {Text.length} characters and {0.008 * (Text.split(/\s+/).filter((element)=>{return element.length!==0}).length)} minutes to read</p>
          <h3>Preview</h3>
         <span className="border border-dark">
          <p>{Text.length>0?Text:'Write Something Above To Preview'}</p>
         </span>
        </div>
        </>
    )
}
