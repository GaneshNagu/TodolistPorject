import React from 'react'
import einstein from '../../Images/einstein.jpg'
function About() {
    return (
        <div style={{textAlign:"center"}}>
        <div style={{marginTop:'10px',width:'auto'}}>
            <img src={einstein} style={{width:'50%',display:'block',margin:'auto',marginTop:'10px'}} alt='not found'/>
            This is developed by Nagu and version is v1.0.0   
        </div>
         </div>
    )
}

export default About;
