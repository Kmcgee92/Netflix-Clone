import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// redux
import { useSelector, useDispatch } from "react-redux";
import { generateSession } from "./Redux/actions/authActions";
import { getProfiles } from "./Redux/actions/profileActions";

//core components
import GetStarted from "./components/GetStarted/GetStarted";
import Browse from "./components/Browse/Browse";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import NotFound from "./components/NotFound/NotFound";
import History from "./components/History/History";


function App() {
  // const [fetchWithCSRF, setFetchWithCSRF] = useState(()=> fetch)
  // const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.login) {
      dispatch(generateSession());
    }
    if (auth.id) {
      dispatch(getProfiles(auth.id));
    }
  }, [auth.id]);
  // auth? loading?

  // if (loading) return null;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <GetStarted />
        </Route>

        <Route exact path="/browse">
          <Browse />
        </Route>

        <Route exact path="/history">
          <History />
        </Route>

        <Route exact path="/login">
          <Signin />
        </Route>

        <Route exact path="/signup">
          <Signup />
        </Route>

        <Route component={NotFound}>
          <NotFound />
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
