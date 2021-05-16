import React from 'react'
import  './cssfile.css'

class Footer extends React.Component{
    
    render(){
        return(
            <div>
                <div class="footer">
                    <a style={{fontSize: "20px"}} href="https://console.firebase.google.com/u/0/project/dress-2f515/features/all"><strong>See all Firebase features -{">"}</strong></a>
                </div>
                <div>
                    <h1 style={{fontWeight: "bold", marginLeft: "50px"}}>Storage<span class="glyphicon glyphicon-question-sign" style={{marginLeft: "1000px"}}></span></h1>
                    <p style={{marginLeft: "50px", fontSize:"20px"}}>Files</p><hr style={{ marginLeft: "50px"}}/><br/>
                    {/* <table class="table">
                        <tr>
                            <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkVYAbZ7dfs03NEMBdO9U-wXBsFo2SYncqEg&usqp=CAU" class="linkimg" /><a href="#" style={{color:"grey"}}>gs://sample-50893.appspot.com</a></td>
                            <td style={{paddingLeft:"20px",textAlign:"right",colspan:"3"}}>
                                <button type="button" class="btn btn-primary">
                                    <span style={{paddingRight:"3px"}} class="glyphicon glyphicon-open"></span>UploadFile
                                </button>
                                <img class="folder" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWEs3zKhxHqRS_ByoYZvrHF2qJuD9hl5iFpQ&usqp=CAU" />
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAS1BMVEX///9+fn5ubm57e3t0dHR4eHh8fHz5+flsbGyAgIDr6+ugoKD09PSKioru7u6zs7Otra3FxcWQkJCampqmpqbV1dXl5eXc3NzNzc15YLGdAAACy0lEQVR4nO3d25KiMBSFYRISIIocPGC//5MO6HSP4wBeyFTKlf+7sKvv9i7MkWSbZQAAAAAAAAAAAAAAAAAAAAAAAIilHPrz6XQ690MZO5T/om6DdT7Pc+/soa1jh7O91joTjAnF9GGcbWMHtLEh3PIz5ufThSF2UFu6uPye3D2/25/cXWKHtZ2rM3PcNXZgW6l9MZth4VX6m6MPsxkGf4wd2jYu1XyCY4qVRlM8LOQ3OcQObgtDtZJhpTBkdH4lQ9/FDu995TFfyTA/fv4UtfZmqaOZRn6BAaOxywmOKdomdoBv273IcBc7wLft7EqCxghk2LzI8PO/pfXClO33t1Sgp8nkR4vVET8ojPjZsNYQJWZt+jPvBFZP2WlxBXyKHdpGaj/fneYKQ8Xd1RfjJPvxQU7/FV5mJ2psijNPMfcijfBuOLi/22JwB4mB4kFbPY78vlLb1R+VbVG5fOKqohWYrM3Z9d15f+76z18xAQCAFXXT7JpGZs30rOz3wVlrXdj3ipO2srPfBzJM7mwnl+OX9T9L39viwn7FDmlbZ/f0ji0Yd44d1JZO7t+9qOBU9qFG+5kEpxT3sQPbytf8kShjnEhbLJe39a1Gj9otvl/TeDEzPsI/ZxKfulMTJB5iv9QKby2xjx3eBvarb0gFutM6zB+9vCvC50/Dm7Uv6fg1/fyTCvpnMfRPDOk/Q/12qN+X6o+HCcxp9Oel+muLBNaH+mv8BPZpEthrS2C/NIE97wTeW2T6755uxN8fAgCAifgZYflz3upn9eXvW8jfmZG/96R/d03+/qH+HVL5e8Crd7mtwpAhX4HnVU2F2OG9T78uhv5ZDP36NCmcGFKvE7Va68so1PrSr9eWwIivXzdRf+adwOpJvwZtAnWE9WtBP9XzDoL1vBOoyZ7p19XPEvhthEz/9y0AAAAAAAAAAAAAAAAAAAAAAAA+wy9GYx8xWE4/5gAAAABJRU5ErkJggg==" class="dots" />
                            </td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>Size</td>
                            <td>Type</td>
                            <td>Last modified</td>
                        </tr>
                        <tr>
                            <td style={{color:" grey", textAlign: "right", height: "100px"}}>There are no files here yet</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>  */}
                    <div class="container" style={{width:"1500px", height:"fit-content" , borderRadius:"5px" ,boxShadow:"0px 0px 0.5px 0.5px" , marginBottom:"50px"}}>
                        <div class="firstpart">
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkVYAbZ7dfs03NEMBdO9U-wXBsFo2SYncqEg&usqp=CAU" class="linkimg" />
                                <a href="#" style={{color:"grey"}}>gs://sample-50893.appspot.com</a>
                            </div>
                            <div >
                                <button type="button" class="btn btn-primary" style={{marginTop:"10px"}}>
                                    <span style={{paddingRight:"3px"}} class="glyphicon glyphicon-open"></span>UploadFile
                                </button>
                                <img class="folder" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWEs3zKhxHqRS_ByoYZvrHF2qJuD9hl5iFpQ&usqp=CAU" />
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAS1BMVEX///9+fn5ubm57e3t0dHR4eHh8fHz5+flsbGyAgIDr6+ugoKD09PSKioru7u6zs7Otra3FxcWQkJCampqmpqbV1dXl5eXc3NzNzc15YLGdAAACy0lEQVR4nO3d25KiMBSFYRISIIocPGC//5MO6HSP4wBeyFTKlf+7sKvv9i7MkWSbZQAAAAAAAAAAAAAAAAAAAAAAAIilHPrz6XQ690MZO5T/om6DdT7Pc+/soa1jh7O91joTjAnF9GGcbWMHtLEh3PIz5ufThSF2UFu6uPye3D2/25/cXWKHtZ2rM3PcNXZgW6l9MZth4VX6m6MPsxkGf4wd2jYu1XyCY4qVRlM8LOQ3OcQObgtDtZJhpTBkdH4lQ9/FDu995TFfyTA/fv4UtfZmqaOZRn6BAaOxywmOKdomdoBv273IcBc7wLft7EqCxghk2LzI8PO/pfXClO33t1Sgp8nkR4vVET8ojPjZsNYQJWZt+jPvBFZP2WlxBXyKHdpGaj/fneYKQ8Xd1RfjJPvxQU7/FV5mJ2psijNPMfcijfBuOLi/22JwB4mB4kFbPY78vlLb1R+VbVG5fOKqohWYrM3Z9d15f+76z18xAQCAFXXT7JpGZs30rOz3wVlrXdj3ipO2srPfBzJM7mwnl+OX9T9L39viwn7FDmlbZ/f0ji0Yd44d1JZO7t+9qOBU9qFG+5kEpxT3sQPbytf8kShjnEhbLJe39a1Gj9otvl/TeDEzPsI/ZxKfulMTJB5iv9QKby2xjx3eBvarb0gFutM6zB+9vCvC50/Dm7Uv6fg1/fyTCvpnMfRPDOk/Q/12qN+X6o+HCcxp9Oel+muLBNaH+mv8BPZpEthrS2C/NIE97wTeW2T6755uxN8fAgCAifgZYflz3upn9eXvW8jfmZG/96R/d03+/qH+HVL5e8Crd7mtwpAhX4HnVU2F2OG9T78uhv5ZDP36NCmcGFKvE7Va68so1PrSr9eWwIivXzdRf+adwOpJvwZtAnWE9WtBP9XzDoL1vBOoyZ7p19XPEvhthEz/9y0AAAAAAAAAAAAAAAAAAAAAAAA+wy9GYx8xWE4/5gAAAABJRU5ErkJggg==" class="dots" />
                            </div>
                        </div>
                        <hr style={{width:"1125px"}}/>
                        <div class="firstpart">
                            <div>Name</div>
                            <div>Size</div>
                            <div>Type</div>
                            <div>Last Modified</div>
                        </div>
                        <hr style={{width:"1125px"}}/>
                        <div style={{color:"grey", textAlign:"center", marginBottom:"50px"}}>There are no files here yet</div>

                    </div>
                </div>
            </div>
                
            
    )
}
}
export default Footer