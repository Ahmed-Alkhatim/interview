import box from "../images/box.png"
import chat from "../images/chatting.png"
import chat1 from "../images/chatting1.png"

const Navigator = () => {
    return(
        <div className="navigator">
            <div className = "logo">
                <img src = {""} alt = "logo"/>
                <img src = {""} alt = "logo"/>
            </div>
            <div className = "navigations">
                <ul>
                    <li> <img src={box} alt="icon" /><span>Dashboard</span></li>
                    <li> <img src={chat} alt="icon" /><span>Procurement </span></li>
                    <li> <img src={chat1} alt="icon" /><span>Invoice Center</span></li>
                    <li> <img src={box} alt="icon" /><span>Recieving Center</span></li>
                    <li> <img src={box} alt="icon" /><span>User Managment</span></li>
                    <li> <img src={box} alt="icon" /><span>Supplier Managment</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigator