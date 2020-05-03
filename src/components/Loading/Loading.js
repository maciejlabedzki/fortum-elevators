import React from "react";
import { connect } from "react-redux";
import "./Loading.scss";

const Loading = ({ loaded, error }) => {
  return (
    <>
      {loaded === false && error === false && (
        <div className="loading-container">
          <div className="loading-wrapper">
            <div className="lds-dual-ring"></div>
            <p className="loading-label"> Please wait. </p>
            <p className="loading-label">Loading...</p>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  loaded: state.reducerLoading.loaded,
  error: state.reducerLoading.error,
});

export default connect(mapStateToProps)(Loading);
