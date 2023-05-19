import React from "react";
import { BounceLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className=" h-screen flex justify-center items-center my-10">
      <BounceLoader color="#36d7b7" />
    </div>
  );
};

export default Spinner;
