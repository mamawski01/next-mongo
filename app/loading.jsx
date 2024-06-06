"use client";

import PropTypes from "prop-types";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

export default function Loading({ loading }) {
  return (
    <ClipLoader
      color={"#3b82f6"}
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
    ></ClipLoader>
  );
}

Loading.propTypes = {
  loading: PropTypes.any,
};
