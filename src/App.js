import React from "react";
import { useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { User } from "./redux/reducers/AuthReducer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AddNote from "./components/AddNote";
import Navbar from "./components/Navbar";
import Notifications from "./components/Notifications";
import SingleNote from "./components/SingleNote";
import EditNote from "./components/editNote";

export default function App() {
  const user = useSelector(User);
  console.log(user);

  if (user.email === undefined || user.email === null) {
    return (
      <Router>
        <Switch>
          <Route path='/' exact>
            <Login />
          </Route>
        </Switch>
      </Router>
    );
  } else {
    return (
      <Router>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/add' exact>
            <>
              <Navbar />
              <AddNote />
            </>
          </Route>
          <Route path='/note/:id'>
            <SingleNote />
          </Route>
          <Route path='/edit/:id'>
            <EditNote />
          </Route>
        </Switch>
      </Router>
    );
  }
}
