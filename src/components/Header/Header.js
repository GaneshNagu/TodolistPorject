import React from 'react'
import {Link} from 'react-router-dom';
import headerimage from '../../Images/brandhub.png';

function Header() {
    return (
        <div style={headerstyle}>
        <div style={imgalign} ><img src={headerimage} alt="not found" style={imgstyle}/>   </div>
         <Link style={linkStyle} to='/'>Home</Link> | <Link style={linkStyle} to='/about'>About</Link>
         </div>
    )
} 

// <Link style={linkStyle} to='/userid'>UserId</Link> |

const headerstyle={
    backgroundColor:'#333',
    margin:'0 auto',
    padding:'10px',
    textAlign:'center'

}

const linkStyle={
    textAlign:'center',
    color:'white',
    textDecoration:'none'
}

const imgalign={
    textAlign:'center'
}

const imgstyle={
    height:'100px',
    margin:'auto'

}

export default Header
