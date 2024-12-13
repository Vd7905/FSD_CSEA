import React, { useState } from 'react'
import bulb from './bulb.png'

const ImageManipulation = () => {
    const [height,setHeight] = useState(150);
    const [width,setWidth] = useState(80);
    const [r,setr] = useState();
    const [g,setg] = useState();
    const [b,setb] = useState();
    const [imgrotate,setimgrotate] = useState(0);

    function increaseHeight(){
        setHeight(height+5)
    }
    function increaseWidth(){
        setWidth(width+5)
    }

    function setbg(){
        setr(Math.random()*255);
        setg(Math.random()*255);
        setb(Math.random()*255);
    }

    function dorotate(){
        if(imgrotate + 30 > 360)
            
            setimgrotate(30)
        else
        setimgrotate(imgrotate + 30)
        
    }
  

  return (
    <div style={{height:'400px',width:'400px', border:'2px solid red',marginLeft:'100px',marginTop:'80px',backgroundColor: `RGB(${r},${g},${b})`}}>
      
      <div style={{marginLeft:'150px',marginTop:'30px', transform: `rotate(${imgrotate}deg)`}}> <img src={bulb} alt=""  height={height} width={width}/></div>
      <div style={{marginTop:'10px', display:'flex', gap:'5px'}}>
        <button onClick={increaseWidth}>Enhance Width</button>
        <button onClick={increaseHeight}>Enhance Height</button>
        <button onClick={dorotate}>Rotate</button>
        <button onClick={setbg}>Background Color Change</button>
      </div>
    </div>
  )
}

export default ImageManipulation
