import './App.scss';
import UploadFilePage from './pages/UploadFilePage';
import FilterPage from './pages/FilterPage';
import { Switch, Route } from "react-router-dom";

function App() {
  return (    
      <div className="App">
       <Switch>
        <Route path='/' exact component={UploadFilePage} />
        <Route path = '/filter' component={FilterPage}/>
       </Switch>
      </div>      
  );
}

export default App;
