import React from "react";
import Sidebar from "./components/Sidebar";
import { faHome, faConciergeBell } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateReminder from "./components/CreateReminder";
import PrefetchAnalytics from "./components/PrefetchAnalytics";

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
          <Route path="/apd/refill">To be implemented</Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
