import box from "../images/box.png"
import chat from "../images/chatting.png"
import chat1 from "../images/chatting1.png"
import logo from "../images/one.png"
import procurement from "../images/procurement.png"
import packages from "../images/packages.png"
import packages1 from "../images/packages(1).png"

const Navigator = () => {
    return(
        <div className="navigator">
            <div className = "logo">
                <img src = {logo} alt = "logo"/>
            </div>
            <div className = "navigations">
                <ul>
                    <li> <img src={box} alt="icon" /><span>Dashboard</span></li>
                    <li> <img src={procurement} alt="icon" /><span>Procurement </span></li>
                    <li> <img src={chat1} alt="icon" /><span>Invoice Center</span></li>
                    <li> <img src={box} alt="icon" /><span>Recieving Center</span></li>
                    <li> <img src={packages} alt="icon" /><span>User Managment</span></li>
                    <li> <img src={packages} alt="icon" /><span>Supplier Managment</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigator