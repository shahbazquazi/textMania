import React from 'react'

export default function About(props) {

    let myStyle = {
        color: props.mode==="dark"?"white":"#161659",
        backgroundColor: props.mode==="dark"?"#161659":"white"
    } 
   

    return (
    <>
      <div className="container">
        <h2 style={myStyle}>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            About textMania
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"  style={myStyle}>
                        <div className="accordion-body">
                            <strong>Use textMania to play with your text</strong> This app can use to write your text, Uppercase and Lowercase your text and Copy the text to the clipboard and Remove the extra spaces in between your text.
                        </div>
                    </div>
                </div>
               
               
            </div>
        </div>
    </>
    )
}
