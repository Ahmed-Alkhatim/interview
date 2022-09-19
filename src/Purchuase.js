import key from "./images/key.png"
import circle from "./images/circle.png"
import mark from "./images/save.png"
import half from "./images/half.png"
import "./purchuase.css"
import data from "./data"

const activeheaders = ["Reausition", "PO", "Date" , "Catg#", "Supplier", "items","payment Status", "Total", "Actions"]
const inActiveheaders = ["Reausition", "PO", "Date" , "Catg#", "Supplier", "Payment Type", "Total", "PO Status", "Actions"]

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
            <Table title = "Inactive" data = {data.inactive} headers = {inActiveheaders}/>
            <Table title = "active" data = {data.active} headers = {activeheaders}/>
        </div>
        </>
    )
}

const Table = ({title, data, headers}) => {
    return(
        <div className="table">
            <div className={"title " + (title=== "active" ?  "active-table " : "inactive-table")} >
                {title}
            </div>
           <table>
                <tr style = {{backgroundColor : "#fff"}}>
                   {headers.map((header) => <th>{header}</th>)}
                </tr>
                {data.map( (item, index) => {
                    let listOfRows = headers.map((header, index) => {

                        if(header === "Actions") {
                            return(
                                <td>
                                    <div className="actions" >
                                        <div className="btn" style={{display : title=== "active" && "none"}}>
                                                <img src= {mark} alt = "icon"/>
                                        </div>
                                        <div style={{display : "inline-block"}}>
                                            {/* <div>Link</div> */}
                                            <div className="btn">
                                            <img src= {circle} alt = "icon"/>
                                            <img className = "half"src= {half} alt = "icon"/>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            )
                        } 
                        if( header == "payment Status" || header == "PO Status") {
                            return(
                             <td> <div className="status">{item[header]}</div> </td>
                            )
                        }
                        if(header == "items") {
                            return(
                                <td>
                                  {Object.values(item["Catg#"]).map( (item) => 
                                     <div className="items">
                                        {item}
                                     </div>
                                  )}

                               
                                </td>
                            )
                        }
                        if(header == "Catg#") {
                            return(
                                <td>
                                {Object.keys(item[header])[0]+ " +.."}
                                </td>
                            )
                        }

                        return(
                            <td>{item[header]}</td>
                        )
                        })
                    return(
                        <tr className={index ==0 && "first"}>
                        {listOfRows}
                        
                        </tr>
                    )

                })
                }
               
            </table> 
        </div>
    )
}

export default Purchuase