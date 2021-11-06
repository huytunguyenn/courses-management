import "./App.css";
import React from "react";
import {Route, Switch} from "react-router-dom";
import RouterURL from "./Components/common/RouterURL";
import SignInPage from "./Components/SignIn/SignInPage";
import PrivateRoute from "./Components/common/PrivateRoute";

function App() {

  return (
    <div className="App">
        <Switch>
            <Route path="/sign_in" component={SignInPage}/>
            <PrivateRoute component={RouterURL} path="/"/>
        </Switch>
    </div>
  );
}

export default App;
