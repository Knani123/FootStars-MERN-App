import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profil from "./pages/Profil";
import UserProfile from "./components/UserProfile";
import MatchCreate from "./pages/MatchCreate";
import NavTest from "./NavTest";
import AllUsers from "./pages/AllUsers";
import Matchs from "./pages/Matchs";
import Notif from "./components/Notif";

import PrivateRoute from "./pages/PrivateRoute";
import OneMatch from "./pages/OneMatch";
import Load from "./components/Load";
function App() {
  return (
    <div className="container">
      <Router>
        <NavTest />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/notif" component={Notif} />
          <PrivateRoute exact path="/allUsers" component={AllUsers} />
          <PrivateRoute exact path="/profil" component={Profil} />
          <PrivateRoute exact path="/profil/:id" component={UserProfile} />
          <PrivateRoute exact path="/Matchs" component={Matchs} />
          <PrivateRoute exact path="/Matchs/:id" component={OneMatch} />
          <PrivateRoute exact path="/createMatch" component={MatchCreate} />
          <PrivateRoute exact path="/load" component={Load} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
