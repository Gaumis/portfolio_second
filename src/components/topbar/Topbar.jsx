import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons" 


export default function Topbar(){
    return(
        <div className="topbar" id="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Gaumis</a> 
                        <div className="itemContainer">
                            <Person className="icon"/>
                                <span>
                                    +91-8986273021
                                </span>
                        </div>
                        <div className="itemContainer">
                            <Mail className="icon"/>
                                <span>
                                    gaumisreal@gmail.com
                                </span>
                        </div>   
                </div>
                <div className="right">This is Right</div>    
            </div>
        </div>
        )
}