import key from "../images/key.png"
import down from "../images/down-arrow.png"

import circle from "../images/circle.png"
import mark from "../images/save.png"
import half from "../images/half.png"
import "./purchuase.css"
import data from "./data"
import { useEffect, useState } from "react"

const activeheaders = ["Reausition", "PO", "Date" , "Catg#", "Supplier", "items","payment Status", "Total", "Actions"]
const inActiveheaders = ["Reausition", "PO", "Date" , "Catg#", "Supplier", "Payment Type", "Total", "PO Status", "Actions"]

const Purchuase = (props) => {
    const [page, setPage] = useState("Purchuase Orders")
    const [activeData, setActive] = useState(data.active)
    const [inactiveData, setinActive] = useState(data.inactive)
    useEffect( ()=> {
        if(props.filter) {
            let activeFiltered = data.active.filter( (data) => data.Supplier.indexOf(props.filter) != -1)
            let inactiveFiltered = data.inactive.filter( (data) => data.Supplier.indexOf(props.filter) != -1)
            setActive(activeFiltered)
            setinActive(inactiveFiltered)
        } else {
            setActive(data.active)
            setinActive(data.inactive)
        }

    }, [props.filter])
    return(
        <>
        <div className="purchuase page">
            <div className = "orders">
                <div className="headers">
                    <h2>{page}</h2>
                </div>
                <div className="statistics">
                    <div className={"statistic " +( page === "View RFQ" && "activepurch")} onClick = { () => setPage("View RFQ") }>
                        <div>
                            <div  className="icon">
                                <img src={down} alt = "icon"/>
                            </div>
                        </div>
                        <div>
                            <h6>5</h6>
                            <p>View RFQ</p>
                        </div>
                    </div>
                    <div className={"statistic " + (page === "Purchuase Orders" && "activepurch")}  onClick = { () => setPage("Purchuase Orders") }>
                        <div>
                            <div  className="icon">
                                <img src={down} alt = "icon"/>
                            </div>
                        </div>
                        <div>
                            <h6>5</h6>
                            <p>Purchuase Oreders</p>
                        </div>
                    </div>
                    <div className={"statistic " + (page === "Saved RFQ" && "activepurch") }  onClick = { () => setPage("Saved RFQ") }>
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
            <div className="tables">
            <Table title = "Inactive" data = {inactiveData} headers = {inActiveheaders}/>
            </div>

            <div className="tables">
            <Table title = "active" data = {activeData} headers = {activeheaders}/>
            </div>
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
                        if( header === "payment Status" || header === "PO Status") {
                            return(
                             <td> <div className="status">{item[header]}</div> </td>
                            )
                        }
                        if(header === "items") {
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
                        if(header === "Catg#") {
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
                        <tr className={index === 0 && "first"}>
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