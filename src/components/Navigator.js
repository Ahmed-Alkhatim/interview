import logo from "../images/one.png"
import box from "../images/box.png"
import box1 from "../images/box(1).png"
import procurement from "../images/procurement.png"
import procurement1 from "../images/procurement(1).png"
import packages from "../images/packages.png"
import packages1 from "../images/packages(1).png"
import analytics from "../images/analytics.png"
import analytics1 from "../images/analytics(1).png"
import dashboard from "../images/dashboards.png"
import dashboard1 from "../images/dashboards(1).png"




const Navigator = (props) => {
    return(
        <div className="navigator">
            <div className = "logo">
                <img src = {logo} alt = "logo"/>
            </div>
            <div className = "navigations">
                <ul>
                    <li className={props.page ==="Dashboard" && "activebar"} onClick={ () => props.setPage("Dashboard")}> <img src={dashboard} alt="icon" /><span>Dashboard</span></li>
                    <li className={props.page ==="Procurement" && "activebar"}  onClick={() => props.setPage("Procurement")}> <img src={procurement} alt="icon" /><span>Procurement </span></li>
                    <li> <img src={box} alt="icon" /><span>Invoice Center</span></li>
                    <li> <img src={analytics} alt="icon" /><span>Recieving Center</span></li>
                    <li> <img src={packages} alt="icon" /><span>User Managment</span></li>
                    <li> <img src={packages} alt="icon" /><span>Supplier Managment</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigator