import React from 'react'


class Storage extends React.Component{
    constructor(){
        super()
        this.state={
            imgUrl : "https://images.ctfassets.net/ofhfhc72xwxp/35lrhBM1slFJFEpvkB6Ez/abbdca4bc0c24b462b7465b129a357b6/google_firebase-2-512.webp",
            listItem: {
                color:"white",
                hover:{
                    background: "rgba(255,255,255,0.2)",
                    borderRadius: "3px"
                }
            },
            icons:{
                padding:"10px", 
                color:"white"
            }
        }
    }
    render(){
        return(
            <div className="d-flex" >
                <div style={{width:"250px" ,height:"contain" , backgroundColor:"#031525" }}>
                    <div className="d-flex" style={{borderBottom: "1px solid rgba(153, 153, 153, 0.459)" , paddingBottom:"10px"}}>
                        <img src={this.state.imgUrl} width="60px" height="60px" style={{backgroundColor:"#031525"}} alt="" ></img>
                        <p style={{color:"white" , fontSize:"30px" , margin:"10px 0px 0px 0px"}}>Firebase</p>
                    </div>
                    <div className="d-flex" style={{color:"white" , borderBottom: "1px solid rgba(153, 153, 153, 0.459)" }}>
                        <i class="fas fa-home" style={{marginTop:"45px" , marginLeft:"10px"}}></i>
                        <p style={{ fontSize: "18px", fontWeight: "600" , color:"white" , margin:"10px" , lineHeight:"80px" }}>Project Overview</p>
                    </div>
                    {/* <ul style={{padding: "0px" , textDecoration: "none",listStyle: "none", margin: "0px",background:"rgba(83, 83, 83, 0.3)",display: "block"}} >
                        <li > */}
                            <a href="#"><p style={{marginBottom: "0px" ,fontSize: "22px", padding: "15px 20px" ,color:"white", textAlign:"left"}}>Build</p></a>
                            <ul style={{listStyle:"none", textAlign:"left", background:"rgba(83, 83, 83, 0.3)",margin:"0px" ,padding:"0px"}}>
                                <li><a href="#" style={this.state.listItem} ><i className="fas fa-user-friends" style={this.state.icons} ></i>Authentication</a></li>
                                <li><a href="#" style={this.state.listItem} ><i className="fas fa-fire" style={this.state.icons}></i>Firestore</a></li>
                                <li><a href="#" style={this.state.listItem}><i className="fas fa-server" style={this.state.icons}></i>Realtime Database</a></li>
                                <li><a href="#" style={this.state.listItem}><i className="fas fa-folder" style={this.state.icons}></i>Storage</a></li>
                                <li><a href="#" style={this.state.listItem}><i className="fas fa-globe-americas" style={this.state.icons}></i>Hosting</a></li>
                                <li><a href="#" style={this.state.listItem}><i className="fas fa-code" style={this.state.icons}></i>Functions</a></li>
                                <li><a href="#" style={this.state.listItem}><i className="fas fa-robot" style={this.state.icons}></i>Machine Learning</a></li>
                                {/* <li><a href="#"><i className="fas fa-signal"></i>dashboard</a></li>  */}
                            </ul>
                        {/* </li>
                    </ul> */}
                </div>
                <div className="flex-grow-1 ">
                <div style={{marginLeft: "0px",overflowX: "hidden",width: "100%"}}>
                <header style={{backgroundColor:"rgb(0,151,167)" ,display:"flex" , position:"fixed" ,width:"91em"}}>
                    <div style={{width:"1100px"}}>
                        <li className="dropdown" style={{padding: "20px" , listStyleType:"none" , textAlign:"left"}}><a style={{color: "rgb(250, 248, 248)", textDecoration: "none" ,paddingTop: "30px"}} className="dropdown-toggle " data-toggle="dropdown" href="#">Project Name</a>
                            <ul className="dropdown-menu" style={{listStyleType:"none" , color:"white"}}>
                                <li><a href="#">See all projects</a></li>
                                <li><a href="#">Add a project</a></li>
                                <li role="separator" className="divider"></li>
                                <li style={{opacity: "0.5"}}><a href="#">All projects</a></li>
                            </ul>
                        </li>
                    </div>
                    <div className="d-flex" style={{width:"150px"}}>
                        <a style={{color: "rgb(255, 254, 254)" ,marginTop:" 20px",marginRight: "10px" }} href="#"> Go to docs</a>
                        <a  href="#" style={{color: "rgb(248, 245, 245)", marginTop: "20px" ,marginRight:" 10px"}}>
                            <span class="glyphicon glyphicon-bell"></span>
                        </a>
                        <a href="#" style={{color:" white", marginTop:" 20px"}} ><span class="glyphicon glyphicon-user"></span></a>
                    </div>
                </header>
                <div className="firebox containerFluid" >
                    <div style={{backgroundColor:"rgb(0,151,167)" , color:"white",backgroundImage: "url(https://www.gstatic.com/mobilesdk/190618_mobilesdk/storage_fore@2x.png)",backgroundRepeat: "no-repeat",backgroundPosition: "right",backgroundSize: "contain"}}>
                        <div className="containerFluid" style={{display:"flex", flexDirection:" column", marginTop: "0px",marginLeft: "150px",width: "350px",height: "510px"}}>
                            <div style={{marginTop: "120px",color: "white",letterSpacing:".5px"}} >
                                <h1 ><b>Storage</b></h1>
                                <p style={{fontSize:"20px"}}>Store and retrieve user-generated<br /> files like images, audio, and video <br /> without server-side code</p>
                                <button  style={{fontFamily:"sans-serif" , backgroundColor: "white" ,color:"rgb(0,151,167)" ,padding: "10px",borderRadius: "9px", width: "fit-content",paddingLeft: "18px",paddingRight: "18px",border: "transparent"}}><a href="#" style={{textDecoration: "none"}}><b>Get Started</b></a></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{fontFamily: "Arial, Helvetica, sans-serif"}}>
                    <div style={{height:"50px"}}></div>
                    {/* <div style={{height: "616",width: "264", marginLeft: "100px",backgroundColor: "white",display: "flex",flexGrow: "1",padding: "0",flexDirection: "column"}}> */}
                        <div style={{fontWeight: "bold",fontSize: "20px",marginBottom: "10px" ,marginLeft:"100px"}}>Learn more</div>
                            <div className="row">
                                <div className="column" style={{float:" left",width: "300px",padding: "0 10px",boxSizing: "border-box",display: "flex",flexDirection: "column",/*flexGrow: "1",*/justifyContent: "center", height: "auto", minHeight: "88px",marginRight: "30px" ,marginLeft:"100px"}}>
                                    <div className="card1" style={{height: "fit-content",backgroundColor: "white", boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2)",padding: "0px", textAlign: "center", borderRadius: "5px",boxSizing: "border-box", width: "300px", margin: "0px"}}>
                                        <div className="card-header" style={{display: "inline",display: "flex",padding: "10px" ,backgroundColor:"white"}}>
                                            <div style={{alignItems: "center",borderRadius: "100%",boxSizing: "border-box",color: "#fff",display: "flex",flexDirection: "column",height: "48px",justifyContent: "center",width: "48px",backgroundColor: "#00b8d4",size: "100%"}}>
                                                <a href="#" style={{color: "white"}}>
                                                    <span className="glyphicon glyphicon-cog"></span>
                                                </a>
                                            </div>
                                            <div style={{display: "flex",flexDirection: "column",flex: "auto",boxSizing: "border-box",overflow: "hidden",padding: "0",paddingRight:" 0",paddingLeft: "16px",float: "left",color: "rgba(0,0,0,.87)",fontFamily: "Google Sans,sans-serif",fontSize: "10px",letterSpacing: ".24px",lineHeight: "24px",textAlign: "left",display: "block"}}>
                                                <h4>How do I get started?</h4>
                                                <small>View the docs</small>
                                            </div>
                                        </div>

                                        <div class="card-body" style={{display: "inline",display: "flex",padding: "10px" }}>
                                            <div style={{alignItems: "center",borderRadius: "100%",boxSizing: "border-box",color: "#fff",display: "flex",flexDirection: "column",height: "48px",justifyContent: "center",width: "48px",backgroundColor: "#09947d",size: "100%"}}>
                                                <a href="#" style={{color:"white"}}>
                                                    <span class="glyphicon glyphicon-info-sign" style={{size:" 50%"}}></span>
                                                </a>
                                            </div>
                                            <div style={{display: "flex",flexDirection: "column",flex: "auto",boxSizing: "border-box",overflow: "hidden",padding: "0",paddingRight:" 0",paddingLeft: "16px",float: "left",color: "rgba(0,0,0,.87)",fontFamily: "Google Sans,sans-serif",fontSize: "10px",letterSpacing: ".24px",lineHeight: "24px",textAlign: "left",display: "block"}}>
                                                <h4>How does Storage work?</h4>
                                                <small>View the docs</small>
                                            </div>
                                        </div>

                                        <div class="card-footer" style={{display: "inline",display: "flex",padding: "10px" , backgroundColor:"white"}}>
                                            <div style={{alignItems: "center",borderRadius: "100%",boxSizing: "border-box",color: "#fff",display: "flex",flexDirection: "column",height: "48px",justifyContent: "center",width: "48px",backgroundColor: "lightgreen",size: "100%"}}>
                                                <a href="#" style={{color: "white"}}>
                                                    <p style={{color:"white",fontSize:"50px"}}> ☺</p>
                                                 </a>
                                            </div>
                                            <div style={{display: "flex",flexDirection: "column",flex: "auto",boxSizing: "border-box",overflow: "hidden",padding: "0",paddingRight:" 0",paddingLeft: "16px",float: "left",color: "rgba(0,0,0,.87)",fontFamily: "Google Sans,sans-serif",fontSize: "10px",letterSpacing: ".24px",lineHeight: "24px",textAlign: "left",/*display: "block"*/}}>
                                                <h4>  What can Storage do for me?</h4>
                                                <small>Learn more</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                  
                                <div class="youclass" style={{boxShadow: "0 10px 10px rgba(0, 0, 0, 0.2)", width: "auto",height: "auto" ,float:" left",padding: "0 10px" ,marginLeft: "0px",boxSizing: "border-box",display: "flex",flexDirection: "column",/*flexGrow: "1",*/justifyContent: "center", minHeight: "88px",marginRight: "15px"}} >
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/_tyjqozrEPY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                    {/* </div> */}<br />
                    <hr style={{color: "black", width: "auto",fontWeight:" bold"}}/><br />
                    <div style={{alignContent:"center",marginLeft: "100px"}}>
                        <div style={{fontWeight: "bold",fontSize: "20px",marginBottom: "10px"}}>More features for developers</div>
                        <div className="row" style={{ margin: "0 -5px", marginRight: "-15px",marginLeft: "-15px"}}>
                            <div style={{borderRadius: "5px",/*boxShadow: "0 10px 10px rgba(0, 0, 0, 0.2)",*/height: "auto" ,float:" left",width: "250px",padding: "0 10px" ,marginLeft: "0px",boxSizing: "border-box",display: "flex",flexDirection: "column",flexGrow: "1",justifyContent: "center", minHeight: "88px",marginRight: "10px"}}>
                                <div class="up">
                                    <img src="https://www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/auth.png" style={{ width: "100%",borderTopLeftRadius: "5px",borderTopRightRadius: "5px"}}/>
                                </div>
                                <div style={{textAlign: "left",float: "left",backgroundColor: "#9c378f",color: "white",borderBottomLeftRadius:"5px" ,borderBottomRightRadius:"5px" ,padding: "16px 20px 40px",width: "100%",alignItems: "center"}}>
                                    <h4><b>Authentication</b></h4>
                                    <p>Authenticate and manage users</p>
                                </div>
                            </div>
                  
                            <div style={{borderRadius: "5px",/*boxShadow: "0 10px 10px rgba(0, 0, 0, 0.2)",*/height: "auto" ,float:" left",width: "250px",padding: "0 10px" ,marginLeft: "0px",boxSizing: "border-box",display: "flex",flexDirection: "column",flexGrow: "1",justifyContent: "center", minHeight: "88px",marginRight: "10px"}}>
                                <div class="up">
                                    <img src="https://www.gstatic.com/mobilesdk/200429_mobilesdk/realtime_database2x.png" style={{ width: "100%",borderTopLeftRadius: "5px",borderTopRightRadius: "5px"}} />
                                </div>
                                <div style={{textAlign: "left",float: "left",backgroundColor:" rgba(70, 67, 67, 0.897)",color: "white",borderBottomLeftRadius:"5px" ,borderBottomRightRadius:"5px" ,padding: "16px 20px 40px",width: "100%",alignItems: "center"}}>
                                    <h4><b>Realtime Database </b></h4>
                                    <p>Store and sync data in realtime</p>
                                </div>
                            </div>
                    
                            <div style={{borderRadius: "5px",/*boxShadow: "0 10px 10px rgba(0, 0, 0, 0.2)",*/height: "auto" ,float:" left",width: "250px",padding: "0 10px" ,marginLeft: "0px",boxSizing: "border-box",display: "flex",flexDirection: "column",flexGrow: "1",justifyContent: "center", minHeight: "88px",marginRight: "15px"}}>  
                                <div class="up">
                                    <img src="https://www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/hosting.png" style={{ width: "100%",borderTopLeftRadius: "5px",borderTopRightRadius: "5px"}}/>
                                </div>
                                <div style={{textAlign: "left",float: "left",backgroundColor: "#042a4a",color: "white",borderBottomLeftRadius:"5px" ,borderBottomRightRadius:"5px" ,padding: "16px 20px 40px",width: "100%",alignItems: "center"}}>
                                    <h4><b>Hosting</b></h4>
                                    <p>Deploy web apps in seconds</p>
                                </div>
                            </div>  
                        </div>
                        <div style={{marginTop: "15px",textAlign: "right",marginRight: "130px"}}><a href="https://console.firebase.google.com/u/0/project/dress-2f515/features/develop">
                            <u>See all Build features</u></a>
                        </div>
                    </div>        
                </div>
                
                </div>
                <div style={{height: "130px",backgroundColor:"#e5eaf0",marginTop: "50px",display: "flex",justifyContent: "center",paddingTop: "50px",width: "100%"}}>
                    <a style={{fontSize: "20px"}} href="https://console.firebase.google.com/u/0/project/dress-2f515/features/all"><strong>See all Firebase features -{'>'}</strong></a>
                </div>   
                </div>
            </div >
        )
    }
}



export default Storage