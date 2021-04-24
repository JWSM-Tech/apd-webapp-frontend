import React, { useState, useEffect } from "react";
import axios from "axios";
import Refill from "./Refill";

const espRoute = "http://apdwifimodule.local/submit_data";

const q = [1, 3, 0, 3, 2, 1, 3, 0];
const n = ["Hey", "t", "test", "dfsa", "fdsaf", "fa", "dfkja", "dfklsa"];

function PrefetchStatus() {
  const [pillQuantities, setPillQuantites] = useState(q);
  const [pillNames, setPillNames] = useState(n);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //     if (pillNames == null || pillQuantities == null) {
  //         setLoading(true);
  //         axios.get(espRoute).then(res => {
  //             setPillNames(res.data.pillNames)
  //             setPillQuantites(res.data.pillQuantities)
  //             setLoading(false)
  //         }).catch(() => {
  //             window.alert("An error occured, try again.")
  //         })
  //     }
  // })

  return (
    <Refill
      pillNames={pillNames}
      pillQuantities={pillQuantities}
      loading={loading}
    />
  );
}

export default PrefetchStatus;
