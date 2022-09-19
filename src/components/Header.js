import bell from "../images/bell.png"
import chatting from "../images/chatting1.png"
import check from "../images/check.png"
import warning from "../images/warning.png"
import user from "../images/user.png"
import { useState, useEffect } from "react"

const Header = (props) => {
    const [searcher, setSearcher] = useState()
    const [isNotiDisplayed, setNotifi] = useState(false)
    const [isMesDisplayed, setMess] = useState(false)

    const handleChange  = (e) =>{ 
        setSearcher(e.target.value) 
        props.updateFilter(e.target.value)
    }

    useEffect(() => {
        document.getElementsByClassName("page")[0].addEventListener( "click", () =>{
            setNotifi(false)
            setMess(false)
        })
    }, [props.page]);

    return(
        <div className="header">
 
            <div className="searcher" style={{ display : props.page !=="Procurement" && "none"}}>
                <input name = "searcher"  placeholder = "search for Supplier" value = {searcher} onChange ={ handleChange }/>
            </div>
          
            <div className="icons">
                <span>
                    <img src={check} alt = "icon"/>
                </span>
                <span>
                    <img src={chatting}  alt = "icon" 
                        onClick = {() => {
                            setMess(!isMesDisplayed)
                            setNotifi(false)
                        }}
                    />
                    <span  className="notify">2</span>
                    <div className = "notify-box" style={{display : isMesDisplayed ? "block" : "none"}}>
                        <div className="message">
                            <div className="message-img">
                                <img src= {user} alt= "profile"/>
                            </div>
                            <div className="chater">
                                <h2>Ahmed alkhatim</h2>
                                <p>Hello How are you <span>2</span></p>
                            </div>
                            
                        </div>
                        <div className="message">
                            <div className="message-img">
                                <img src= {user} alt= "profile"/>
                            </div>
                            <div className="chater">
                                <h2>Khaled Ahmed</h2>
                                <p>welcome, where areyou<span>2</span></p>
                            </div>       
                        </div>
                        <div className="message">
                            <div className="message-img">
                                <img src= {user} alt= "profile"/>
                            </div>
                            <div className="chater">
                                <h2>Mohammed ahmed</h2>
                                <p>I recieved the order </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="pointer" style={{display : isMesDisplayed ? "block" : "none"}}></div>
                </span>
                <span>
                    <img src={bell}  alt = "icon" onClick = { () =>{ 
                        setNotifi(!isNotiDisplayed)
                        setMess(false)
                        }}/>
                    <span  className="notify">2</span>
                    <div className = "notify-box" style={{display : isNotiDisplayed ? "block" : "none"}}>
                        <div>New Order 1 from hhh </div>
                        <div>Old Order from k lorem ipsem</div>
                        <div>Old Order from k lorem ipsem</div>
                        <div>Old Order from k lorem ipsem</div>
                        <div>Old Order from k lorem ipsem</div>
                    </div>
                    <div className="pointer" style={{display : isNotiDisplayed ? "block" : "none"}}></div>
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