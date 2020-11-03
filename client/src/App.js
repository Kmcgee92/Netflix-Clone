import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//core components
import GetStarted from './components/GetStarted/GetStarted'
import Browse from './components/Browse/Browse'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <GetStarted />
        </Route>

        <Route exact path="/browse">
          <Browse />
        </Route>
        <Route exact path="/login">
          {/* login */}
        </Route>
        <Route exact path="/signup">
          {/* signup and redirect to browse */}
        </Route>
      </Switch>
      {/* temp */}
    </BrowserRouter>
  );
}

export default App;

// <nav>
//     <ul>
//         <li><NavLink to="/" activeclass="active">Home</NavLink></li>
//         <li><NavLink to="/users" activeclass="active">Users</NavLink></li>
//     </ul>
// </nav>
