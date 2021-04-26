import React, { useState, useEffect } from "react";
import axios from "axios";
import Refill from "./Refill";
import RemovePill from "./RemovePill";
import PropTypes from "prop-types"

const espRoute = "http://apdwifimodule.local/get_pill_status";

function PrefetchStatus(props) {
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
    <>
      {props.refill && (
        <Refill
          pillNames={pillNames}
          pillQuantities={pillQuantities}
          loading={loading}
        />
      )}
      {props.remove && <RemovePill pillNames={pillNames} loading={loading} />}
    </>
  );
}

PrefetchStatus.propTypes = {
  refill: PropTypes.bool,
  remove: PropTypes.bool,
};

export default PrefetchStatus;
