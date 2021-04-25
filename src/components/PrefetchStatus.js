import React, { useState, useEffect } from "react";
import axios from "axios";
import Refill from "./Refill";

const espRoute = "http://apdwifimodule.local/get_pill_status";

function PrefetchStatus() {
  const [pillQuantities, setPillQuantites] = useState(null);
  const [pillNames, setPillNames] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (pillNames === null || pillQuantities === null) {
      setLoading(true);
      axios.get(espRoute).then((res) => {
        setPillNames(
          res.data.pillNames.filter((name) => {
            return name !== "";
          })
        );
        setPillQuantites(res.data.pillQuantities);
        setLoading(false);
      });
    }
  });

  return (
    <Refill
      pillNames={pillNames}
      pillQuantities={pillQuantities}
      loading={loading}
    />
  );
}

export default PrefetchStatus;
