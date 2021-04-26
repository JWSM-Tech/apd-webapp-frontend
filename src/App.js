import { faConciergeBell, faHome } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddPill from "./components/AddPill";
import CreateReminder from "./components/CreateReminder";
import PrefetchAnalytics from "./components/PrefetchAnalytics";
import PrefetchReminders from "./components/PrefetchReminders";
import PrefetchStatus from "./components/PrefetchStatus";
import Sidebar from "./components/Sidebar";

function App() {
  const sidebarItems = [
    {
      title: "View reminders",
      path: "/apd/view-reminders",
      icon: faConciergeBell,
      cName: "nav-text",
    },
    {
      title: "View analytics",
      path: "/apd/view-analytics",
      icon: faConciergeBell,
      cName: "nav-text",
    },
    {
      title: "Create reminder",
      path: "/apd/create-reminder",
      icon: faConciergeBell,
      cName: "nav-text",
    },
    {
      title: "Add pill",
      path: "/apd/add-pill",
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
      title: "Remove pill",
      path: "/apd/remove-pill",
      icon: faConciergeBell,
      cName: "nav-text",
    },
    {
      title: "Remove reminder",
      path: "/apd/remove-reminder",
      icon: faConciergeBell,
      cName: "nav-text",
    },
  ];

  return (
    <Router>
      <Switch>
        <React.Fragment>
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
            <Route path="/apd/view-reminders">
              <PrefetchReminders view={true} remove={false} />
            </Route>
            <Route path="/apd/refill">
              <PrefetchStatus refill={true} remove={false} />
            </Route>
            <Route path="/apd/add-pill">
              <AddPill />
            </Route>
            <Route path="/apd/remove-pill">
              <PrefetchStatus refill={false} remove={true} />
            </Route>
            <Route path="/apd/remove-reminder">
              <PrefetchReminders view={false} remove={true} />
            </Route>
          </div>
        </React.Fragment>
      </Switch>
    </Router>
  );
}

export default App;
