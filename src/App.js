import Form from "./Components/Form/Form";
import Navbar from "./Components/Navbar/Navbar"
import User from './Components/User/User'
import {
    Switch,
    Route,
   } from "react-router-dom";

import 'animate.css';


function App() {
  return (
    <div className="App">
            <Navbar/>

        <Switch>
            <Route  path="/user" component={User}/>
            <Route exact path="/" component={Form}/>
        </Switch>

    </div>
  );
}

export default App;
