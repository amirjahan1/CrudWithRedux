import Form from "./Components/Form/Form";
import Navbar from "./Components/Navbar/Navbar"
import User from './Components/User/User'
import FormEdit from "./Components/Form/FormEdit";
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
            <Route  path="/edit/:idd/:fnamee/:lnamee/:agee/:skilll" component={FormEdit}/>
            <Route exact path="/" component={Form}/>
        </Switch>

    </div>
  );
}

export default App;
