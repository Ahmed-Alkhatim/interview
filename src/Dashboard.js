import key from "./images/key.png"
import "./dashboard.css"
const Dashboard = () => {
    return(
        <div className="dashboard page">
            <Statistic />
            <Visualization />
            <Sales />
        </div>
    )
}

const Statistic = () => {
    return(
        <div className="dashboard-statistics">
        <div className="statistics" style={{justifyContent : "space-between"}}>
            <div className="statistic" >
                <div>
                    <div  className="icon">
                        <img src={key}/>
                    </div>
                </div>
                <div>
                    <h6>85000</h6>
                    <p>View RFQ</p>
                </div>
            </div>
            <div className="statistic">
                <div>
                    <div  className="icon">
                        <img src={key}/>
                    </div>
                </div>
                <div>
                    <h6>5000</h6>
                    <p>Purchuase Oreders</p>
                </div>
            </div>
            <div className="statistic">
                <div>
                    <div  className="icon">
                        <img src={key}/>
                    </div>
                </div>
                <div>
                    <h6>59909</h6>
                    <p>Saved RFQ</p>
                </div>
            </div>
            <div className="statistic">
                <div>
                    <div  className="icon">
                        <img src={key}/>
                    </div>
                </div>
                <div>
                    <h6>9000</h6>
                    <p>Saved RFQ</p>
                </div>
            </div>
           
        </div>
   
    </div>
    )
}

const Visualization = () => {
    return(
        <div className="visualization">
            <div>
                <div className="title">
                    <h6>Total salary</h6>
                    <p>$3,77</p>
                </div>
            </div>
            <div>
                <div className="title">
                    <h6>Total salary</h6>
                    <p>$3,77</p>
                </div>
            </div>
            <div>
                <div className="title">
                    <h6>Total salary</h6>
                    <p>$3,77</p>
                </div>
            </div>
            <div>
                <div className="title">
                    <h6>Total salary</h6>
                    <p>$3,77</p>
                </div>
            </div>
           
        </div>
    )
}

const Sales = () => {
    return(
        <div className="sales">
            <div>
                <h6>RFQs</h6>
            </div>
            <div>
                <h6>Best salaries</h6>
            </div>
        </div>
    )
}
export default Dashboard