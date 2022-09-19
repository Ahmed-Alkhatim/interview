import bell from "../images/bell.png"
import chatting from "../images/chatting1.png"
import check from "../images/check.png"
import warning from "../images/warning.png"
import user from "../images/user.png"

const Header = () => {
    return(
        <div className="header">
 
            <div className="searcher">
                <input name = "searcher" value={""} placeholder = "search"/>
            </div>
          
            <div className="icons">
                <span>
                    <img src={check} alt = "icon"/>
                </span>
                <span>
                    <img src={chatting}  alt = "icon"/>
                    <span  className="notify">2</span>

                </span>
                <span>
                    <img src={bell}  alt = "icon"/>
                    <span  className="notify">1</span>

                </span>
                <span>
                    <img src={warning}  alt = "icon"/>
                </span>
            </div>
            <div className="profile">
                <div className="user">
                    <h2>Ahmed alkhatim</h2>
                    <p>ًEdit profile</p>
                </div>
                <div className="img-container">
                    <img src= {user} alt= "profile"/>
                </div>
            </div>
         
        </div>
    )
}
export default Header