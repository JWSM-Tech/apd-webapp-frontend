import { React, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import ViewReminders from "./ViewReminders";
import RemoveReminder from "./RemoveReminder";

// TODO: Route
const espRoute = "";

function PrefetchReminders(props) {
  const [loading, setLoading] = useState(true);
  const [reminders, setReminders] = useState(null);

  useEffect(() => {
    if (reminders === null) {
      setLoading(true);
      axios.get(espRoute).then((res) => {
        setReminders(res.data.reminders);
        setLoading(false);
      });
    }
  });

  return (
    <>
      {props.view && <ViewReminders loading={loading} reminders={reminders} />}
      {props.remove && (
        <RemoveReminder loading={loading} reminders={reminders} />
      )}
    </>
  );
}

PrefetchReminders.propTypes = {
  view: PropTypes.bool,
  remove: PropTypes.bool,
};

export default PrefetchReminders;
