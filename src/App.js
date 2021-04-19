import React from "react"
import Sidebar from "./components/Sidebar"
import { faHome, faConciergeBell } from "@fortawesome/free-solid-svg-icons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import CreateReminder from "./components/CreateReminder";
import ViewAnalytics from "./components/ViewAnalytics";


function App() {

  const sidebarItems =
    [
      {
        title: "Create reminder",
        path: "/apd/create-reminder",
        icon: faHome,
        cName: "nav-text",
      },
      {
        title: "View analytics",
        path: "/apd/view-analytics",
        icon: faConciergeBell,
        cName: "nav-text",
      },
      {
        title: "View reminders",
        path: "/apd/view-reminders",
        icon: faConciergeBell,
        cName: "nav-text",
      },
      {
        title: "Refill",
        path: "/apd/refill",
        icon: faConciergeBell,
        cName: "nav-text",
      }
    ]

  return (
    <Router>
      <Switch>
        <div className="main-container">
          <Route path="/">
            <Sidebar items={sidebarItems} />
          </Route>
          <Route path="/apd/create-reminder">
            <CreateReminder />
          </Route>
          <Route path="/apd/view-analytics">
            <ViewAnalytics />
          </Route>
          <Route path="/apd/view-reminders">view</Route>
          <Route path="/apd/refill">refill</Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
