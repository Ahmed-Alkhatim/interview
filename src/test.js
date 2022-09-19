

const Table = ({title}) => {
    return(
        <div className="table">
            <div className={"title " + (title=== "active" ?  "active-table " : "inactive-table")} >
                {title}
            </div>
           <table>
                <tr style = {{backgroundColor : "#fff"}}>
                   {headers.map((header) => <th>{header}</th>)}
                </tr>
                <tr className = "first">
                    <td >Alfreds </td>
                    <td>Maria </td>
                    <td>Germany</td>
                    <td>Centro  </td>
                    <td>Francisco </td>
                    <td>Mexico</td>
                    <td>Centro  </td>
                    <td> <div className="status">Francisco</div> </td>
                    <td>
                        <div className="actions">
                            <div className="btn">
                                <img src= {mark} alt = "icon"/>
                            </div>
                            <div className="btn">
                                <img src= {circle} alt = "icon"/>
                                <img className = "half"src= {half} alt = "icon"/>
                            </div>
                        </div>
                    </td>
                </tr>
               
            </table> 
        </div>
    )
}
