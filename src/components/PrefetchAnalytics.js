import { React, useState, useEffect } from "react";
import axios from "axios";
import ViewAnalytics from "./ViewAnalytics";

const analyticsRoute = "https://apd-webapp-backend.herokuapp.com/api/analytics";

function PrefetchAnalytics() {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (analytics === null) {
      setLoading(true);
      axios
        .get(analyticsRoute)
        .then((res) => {
          setAnalytics(res.data);
          setLoading(false);
        })
        .catch(() => {
          window.alert("An error occured, try again.");
        });
    }
  });

  return <ViewAnalytics analytics={analytics} loading={loading} />;
}

export default PrefetchAnalytics;
