import key from "./images/key.png"
import "./purchuase.css"

const Purchuase = () => {
    return(
        <>
        <div className="purchuase page">
            <div className = "orders">
                <div className="headers">
                    <h2>Purchuase Orders</h2>
                </div>
                <div className="statistics">
                    <div className="statistic">
                        <div>
                            <div  className="icon">
                                <img src={key} alt = "icon"/>
                            </div>
                        </div>
                        <div>
                            <h6>5</h6>
                            <p>View RFQ</p>
                        </div>
                    </div>
                    <div className="statistic">
                        <div>
                            <div  className="icon">
                                <img src={key} alt = "icon"/>
                            </div>
                        </div>
                        <div>
                            <h6>5</h6>
                            <p>Purchuase Oreders</p>
                        </div>
                    </div>
                    <div className="statistic">
                        <div>
                            <div  className="icon">
                                <img src={key} alt = "icon"/>
                            </div>
                        </div>
                        <div>
                            <h6>5</h6>
                            <p>Saved RFQ</p>
                        </div>
                    </div>
                   
                </div>
           
            </div>
            <Table title = "Inactive"/>
            <Table title = "active"/>
        </div>
        </>
    )
}

const Table = ({title}) => {
    return(
        <div className="table">
            <div className={"title " + (title=== "active" ?  "active-table " : "inactive-table")} >
                {title}
            </div>
           <table>
                <tr style = {{backgroundColor : "#fff"}}>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>Alfreds </td>
                    <td>Maria </td>
                    <td>Germany</td>
                    <td>Centro  </td>
                    <td>Francisco </td>
                    <td>Mexico</td>
                    <td>Centro  </td>
                    <td>Francisco </td>
                    <td>Mexico</td>
                </tr>
                <tr>
                    <td>Centro  </td>
                    <td>Francisco </td>
                    <td>Mexico</td>
                    <td>Centro  </td>
                    <td>Francisco </td>
                    <td>Mexico</td>
                    <td>Centro  </td>
                    <td>Francisco </td>
                    <td>Mexico</td>
                </tr>
            </table> 
        </div>
    )
}

export default Purchuase
