import { useState } from "react"
import logo from "../images/one.png"
import box from "../images/box.png"
import procurement from "../images/procurement.png"
import procurement1 from "../images/procurement(1).png"
import packages from "../images/packages.png"
import analytics from "../images/analytics.png"
import dashboard from "../images/dashboards.png"
import dashboard1 from "../images/dashboards(1).png"
import menue from "../images/smenu.png"
import smenue from "../images/menu.png"



const Navigator = (props) => {
    const [display, setDisplay] = useState(true)
    return(
        <>
        <div className = "menu" onClick={() => setDisplay(!display)}>
            <img src={display ? smenue : menue} alt = "icon"/>
        </div>
        <div className="navigator" style={{ display : display ? "block": "none"}}>
            <div className = "logo">
                <img src = {logo} alt = "logo"/>
            </div>
            <div className = "navigations">
                <ul>
                    <li className={(props.page ==="Dashboard" && "activebar")} 
                        onClick={ () => props.setPage("Dashboard")}> <img src={props.page ==="Dashboard" ? dashboard1 : dashboard} alt="icon" />
                        <span style = {{ color : props.page ==="Dashboard" &&  "#e79e51" }}>Dashboard</span>
                    </li>
                    <li className={props.page ==="Procurement" && "activebar"}  
                        onClick={() => props.setPage("Procurement")}> <img src={ props.page ==="Procurement" ? procurement1 : procurement} alt="icon" />
                        <span style = {{ color : props.page ==="Procurement" &&  "#e79e51" }} >Procurement </span>
                    </li>
                    <li> <img src={box} alt="icon" /><span>Invoice Center</span></li>
                    <li> <img src={analytics} alt="icon" /><span>Recieving Center</span></li>
                    <li> <img src={packages} alt="icon" /><span>User Managment</span></li>
                    <li> <img src={packages} alt="icon" /><span>Supplier Managment</span></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Navigator