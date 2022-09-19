import { Navigator } from './components';
import { useState } from 'react';
import Purchuase from './Purchuase';
import Dashboard from './Dashboard';
import { Header } from "./components"

import './App.css';
const  App =() => {
  const [page, setPage] = useState("Dashboard")
  const [filter, setFilter] = useState(null)
  const updateFilter = (searcher) => {
   setFilter(searcher)
  }
  return (
    <div className="App">
      <Content>
        <Header page = {page} updateFilter = {updateFilter}/>
          {page === "Dashboard" 
          ? <Dashboard /> 
          : <Purchuase filter = {filter}/>
        }
      </Content>
      <Navigator page = {page} setPage = {(page) => setPage(page)}/>

    </div>
  );
}

const Content = (props) => {
  return(
    <div className='content'>
        {props.children}
    </div>
  )
}
export default App;
