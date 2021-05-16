import React from 'react'
import  './cssfile.css'

class Navbar extends React.Component{
    
    render(){
        return(
            <header class="headpart">
                <div class="col1">
                    <li class="dropdown" style={{padding: "20px"}}><a style={{color: "rgb(250, 248, 248)", textDecoration: "none",paddingTop: "30px"}}  class="dropdown-toggle " data-toggle="dropdown" href="#">Project Name </a>
                        <ul class="dropdown-menu">
                            <li><a href="#">See all projects</a></li>
                            <li><a href="#">Add a project</a></li>
                            <li role="separator" class="divider"></li>
                            <li style={{opacity: "0.5"}}><a href="#">All projects</a></li>
                        </ul>
                    </li>
                </div>
                <div class="col2">
                    <a style={{color: "rgb(255, 254, 254)",marginTop: "13px"}} href="#"> Go to docs</a>
                    <a class="navbar-brand" href="#" style={{color: "rgb(248, 245, 245)"}}>
                        <span class="glyphicon glyphicon-bell"></span>
                    </a>
                    <a href="#" style={{color: "white",marginTop: "15px"}} ><span class="glyphicon glyphicon-user"></span></a>
                </div>
            </header>
    )
}
}
export default Navbar