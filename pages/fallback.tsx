import type { NextPage } from "next";
import React from "react";

const Fallback: NextPage = () => (
  <div>
    <h1>This is fallback page when device is offline </h1>
    <small>Route will fallback to this page</small>
  </div>
);

export default Fallback;
