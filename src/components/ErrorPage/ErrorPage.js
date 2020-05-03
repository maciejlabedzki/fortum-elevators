import React from "react";
import { connect } from "react-redux";
import "./ErrorPage.scss";

const ErrorPage = ({ error, errorMsg }) => {
  return (
    <>
      {error === true && (
        <div className="error-page-container error">
          <div className="error-page-wrapper">
            <p className="error-page-label">Error: </p>
            <p className="error-page-label error-msg">{errorMsg}</p>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  error: state.reducerLoading.error,
  errorMsg: state.reducerLoading.errorMsg,
});

export default connect(mapStateToProps)(ErrorPage);
