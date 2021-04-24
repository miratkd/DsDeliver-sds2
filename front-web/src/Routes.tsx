import { BrowserRouter, Switch, Route } from "react-router-dom";
import Admin from "./Admin/Index";
import Home from "./Home";
import Navbar from "./Navbar";
import Orders from "./Orders";

function Routes(){
    return(
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path="/admin" exact>
                    <Admin/>
                </Route>
                <Route path="/orders" exact>
                    <Orders/>
                </Route>
                <Route path="/" exact>
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;