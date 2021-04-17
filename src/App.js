import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Home/Home/Home";
import Admin from "./Component/Admin/Admin/Admin";
import Details from "./Component/Details/Details/Details";
import Login from "./Component/Login/Login/Login";
import { createContext } from "react";
import { useState } from "react";
import PrivateRoute from "./Component/Login/PrivateRoute/PrivateRoute";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
export const createProvider = createContext();

function App() {
  const [user, setUser] = useState({
    email: "",
    displayName: "",
  });
  return (
    <createProvider.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/details/:id">
            <Details></Details>
          </PrivateRoute>
          <PrivateRoute path="/Sing">
            <Home />
          </PrivateRoute>
          <PrivateRoute path="/about">
            <About></About>
          </PrivateRoute>
          <PrivateRoute path="/contact">
            <Contact></Contact>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </createProvider.Provider>
  );
}

export default App;
