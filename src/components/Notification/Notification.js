import React from "react";
import "./Notification.scss";
import { connect } from "react-redux";

const Notification = ({ msg }) => {
  return (
    <>
      <div className="notification-container">{msg}</div>
    </>
  );
};

const mapStateToProps = (state) => ({
  msg: state.reducerNotyfication.msg,
});

export default connect(mapStateToProps)(Notification);
