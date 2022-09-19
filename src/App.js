import { Navigator } from './components';
import Purchuase from './Purchuase';
import Dashboard from './Dashboard';
import { Header } from "./components"

import './App.css';
function App() {
  return (
    <div className="App">
      <Navigator />
      <Content>
        <Header />
          {/* <Purchuase /> */}
          <Dashboard />
      </Content>
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
