import { faConciergeBell, faHome } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddPill from "./components/AddPill";
import CreateReminder from "./components/CreateReminder";
import PrefetchAnalytics from "./components/PrefetchAnalytics";
import PrefetchStatus from "./components/PrefetchStatus";
import Sidebar from "./components/Sidebar";

function App() {
  const sidebarItems = [
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
    },
    {
      title: "Add pill",
      path: "/apd/add",
      icon: faConciergeBell,
      cName: "nav-text",
    },
  ];

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
            <PrefetchAnalytics />
          </Route>
          <Route path="/apd/view-reminders">To be implemented</Route>
          <Route path="/apd/refill">
            <PrefetchStatus />
          </Route>
          <Route path="/apd/add">
            <AddPill />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
