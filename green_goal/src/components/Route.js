import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Router extends Component {
    render (){
        return (
            <Router>
                <div>
                    <Switch>

                        <Route path="/" exact component = {App}>
                        </Route>
    
                        <Route path="/profile" exact component = {}>
                        </Route>
    
                        <Route path="/cart" exact component = {Card}>
                        </Route>

                        <Route path="/settings" exact component = {}>
                        </Route>

                        <Route path="/sign_up" exact component = {}>
                        </Route>

                        <Route path="/sign_in"  exact component = {}>
                        </Route>

                    </Switch>
                </div>
            </Router>
        );
    }
} 

export default Router