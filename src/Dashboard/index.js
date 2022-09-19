import key from "../images/key.png"
import globe from "../images/globe.png"
import link from "../images/link.png"
import down from "../images/down-arrow.png"
import { VictoryPie, VictoryChart, VictoryGroup, VictoryBar, VictoryArea, VictoryLine } from "victory";
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

let icons = [key, link, down, globe],
colors = ["rgb(231, 158, 81)", "rgb(187, 220, 151)","rgb(247, 219, 103)", "rgb(113, 223, 231)"],
data = {
    "رصيد الباىع" : 23000,
    "اجمالي النقد" :18000,
    "التكلفة الاجمالية" :99000,
    "اجمالي المبيعات" :1500
}
const Statistic = () => {
    return(
        
        <div className="dashboard-statistics">
        <div className="statistics" style={{justifyContent : "space-between"}}>
            {
                Object.keys(data).map( (obj, index) => 
                    <div className="statistic" key = {index} >
                    <div>
                        <div  className="icon" style = {{backgroundColor : colors[index]}} >
                            <img src={icons[index]} alt = "icon" />
                        </div>
                    </div>
                    <div>
                        <h6>{data[obj]}</h6>
                        <p>{obj}</p>
                    </div>
                </div>
                )
            }
           
           
        </div>
   
    </div>
    )
}

const Visualization = () => {
   
    return(
        <div className="visualization">
            {/* Chart */}

            <div>
                <div className="title">
                    <h6>Total salary</h6>
                    <p>$3,77M</p>
                    
                </div>
                <div className="line">
                <VictoryArea
                    style={{
                        data: { fill: "rgb(255, 214, 226)" }
                      }}
                        interpolation="natural"
                        data={[
                            { x: 1, y: 18},
                            { x: 2, y: 17},
                            { x: 3, y: 14},
                            { x: 4, y: 16},
                            { x: 5, y: 16},
                            { x: 6, y: 12},
                            { x: 7, y: 10},
                            { x: 8, y: 10},
                            { x: 9, y: 5},
                            { x: 10, y: 9},
                            { x: 11, y: 12},
                            { x: 12, y: 10},
                            { x: 13, y: 14},
                            { x: 14, y: 12},
                            { x: 15, y: 13}
                          ]}
                    />
                </div>
            </div>
            {/* Chart */}
            <div>
                <div className="title">
                    <h6>Total Balance</h6>
                    <p>$1442,7</p>
                </div>
                <div className="line">
                    <VictoryChart minDomain={{ y: 1 }}
                    >
                    <VictoryLine
                        interpolation="natural"
                        style={{
                        data: { stroke: "rgb(2, 188, 119)" },
                        parent: { border: "3px solid #ccc"}
                        }}
                        data={[
                        { x: 1, y: 3 },
                        { x: 2, y: 3.5 },
                        { x: 3, y: 4.1},
                        { x: 4, y: 4 },
                        { x: 5, y: 4.2 },
                        { x: 6, y: 4.1 },
                        { x: 7, y: 4},
                        { x: 8, y: 4.3 },
                       
                        ]}
                    />
                     <VictoryLine
                      
                        interpolation="natural"
                        style={{
                        data: { stroke: "rgb(71, 145, 255)" },
                        parent: { border: "3px solid #ccc"}
                        }}
                        data={[
                            { x: 1, y: 2 },
                            { x: 2, y: 2.5 },
                            { x: 3, y: 3.3},
                            { x: 4, y: 3 },
                            { x: 5, y: 3.3 },
                            { x: 6, y: 3.6 },
                            { x: 7, y: 3},
                            { x: 8, y: 3.5 },
                        ]}
                    />
                </VictoryChart>
                </div>
            </div>
            {/* Chart */}
            <div>
                <div className="title">
                    <h6>RFQs</h6>
                    <p>$3,77</p>
                </div>
                <div className="vector-chart">
                <VictoryPie
                    colorScale={["rgb(255, 217, 80)", "rgb(71, 145, 255)" ]}
                    height={300}
                    data={[
                        { x: "", y: 20, label : "" },
                        { x: "", y: 80 ,  label : "" },
                    ]}
                    />
                </div>
            </div>
            
            <div>
                <div className="title">
                    <h6>Total </h6>
                    <p>$3,77</p>
                        <VictoryBar
                        style={{
                            data: { fill:"rgb(2, 188, 119)" }
                          }}
                         data={[
                            { x: 1, y: 2},
                            { x: 2, y: 3},
                            { x: 3, y: 5},
                            { x: 4, y: 4},
                            { x: 5, y: 2},
                            { x: 6, y: 3},
                            { x: 7, y: 5},
                            { x: 8, y: 4},
                            { x: 9, y: 6},
                            { x: 11, y: 6},
                            { x: 10, y: 2},
                            { x: 12, y: 3},
                            { x: 13, y: 5},
                            { x: 14, y: 4},
                            { x: 15, y: 6},
                            { x: 16, y: 2},
                            { x: 17, y: 3},
                           
                          ]}
                        />
                </div>
                
            </div>
           
        </div>
    )
}

const Sales = () => {
    return(
        <div className="sales">
            <div className="progresses">
                <h6>RFQs</h6>
                <div>
                <VictoryChart domainPadding={40}>

                <VictoryGroup offset={20}
                    width={300}
                    colorScale={["rgb(71, 145, 255)", "rgb(255, 35, 102)", "rgb(2, 188, 119)", "rgb(255, 217, 80)"]}
                >
                    <VictoryBar
                       
                    data={[{ x: "2015", y: 10 }, { x: "2016", y: 40 }, { x: "2017", y: 30 },{ x: "2018", y: 70 }]}
                    />
                    <VictoryBar
                    data={[{ x: "2015", y: 60 }, { x: "2016" , y: 30 }, {x: "2017", y: 50 }, { x: "2018", y: 30 }]}
                    />
                    <VictoryBar
                    data={[{ x: "2015", y: 50 }, { x: "2016", y: 20 }, {x: "2017", y: 90 }, { x: "2018", y: 80 }]}
                    />
                    <VictoryBar
                    data={[{ x: "2015", y: 30 }, { x: "2016", y: 10 }, {x: "2017", y: 10 }, { x: "2018", y: 30 }]}
                    />
                </VictoryGroup>
                </VictoryChart>
                </div>
            </div>
            <div className="progresses">
                <h6>Best salaries</h6>
                <div>
                    <div className = "details">
                        <p>Credit</p>
                        <p> 1000</p>
                    </div>
                    <div className="progress">
                        <div className="progress-bar" style={{ width : "50%" }}></div>
                    </div>
                    <div className = "details">
                        <p>Credit</p>
                        <p> 1000</p>
                    </div>
                    <div className="progress">
                        <div className="progress-bar" style={{ width : "30%" }}></div>
                    </div>
                    <div className = "details">
                        <p>Credit</p>
                        <p> 1000</p>
                    </div>
                    <div className="progress">
                        <div className="progress-bar" style={{ width : "40%" }}></div>
                    </div>
                    <div className = "details">
                        <p>Credit</p>
                        <p> 1000</p>
                    </div>
                    <div className="progress">
                        <div className="progress-bar" style={{ width : "50%" }}></div>
                    </div>
                    <div className = "details">
                        <p>Credit</p>
                        <p> 1000</p>
                    </div>
                    <div className="progress">
                        <div className="progress-bar" style={{ width : "50%" }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard