import React from 'react'
import  './cssfile.css'

class Header extends React.Component{
    
    render(){
        return(
            <div class="firebox container-fluid">
                <div class="header-background row ">
                    <div class="mlclass container-fluid">
                        <div class="content">
                            <h1 ><b>Storage</b></h1>
                            <p style={{fontSize: "20px"}}>Store and retrieve user-generated files like images, audio, and video without server-side code</p>
                            <button  style={{fontFamily:"sans-serif", backgroundColor: "white",color: "teal",padding: "10px",borderRadius: "9px", width: "fit-content",paddingLeft: "18px",paddingRight: "18px",border: "transparent"}}><a href="" style={{textDecoration: "none"}}><b>Get Started</b></a></button>
                        </div>
                    </div>
                </div>
            </div>                   
    )
}
}
export default Header