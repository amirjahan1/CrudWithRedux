import Form from "./Components/Form/Form";
import Navbar from "./Components/Navbar/Navbar"
import User from './Components/User/User'
import FormEdit from "./Components/Form/FormEdit";
import Chart from "./Components/Chart/Chart";
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
            <Route  path="/edit/:idd/:fnamee/:lnamee/:agee/:htmll/:csss/:jss" component={FormEdit}/>
            <Route exact path="/" component={Form}/>
            <Route exact path="/chart" component={Chart}/>
        </Switch>

    </div>
  );
}

export default App;
