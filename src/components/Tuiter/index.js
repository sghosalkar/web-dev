import React from "react";
import {Link} from "react-router-dom";
import ExploreScreen from "./explore-screen";
import HomeScreen from "./home-screen";

const Tuiter = () => {
  return(
    <>
      <Link to="/hello">
        Hello
      </Link> |
      <Link to="/">
        Labs
      </Link>
      <ExploreScreen/>
      <HomeScreen/>
    </>
)
};

export default Tuiter;

