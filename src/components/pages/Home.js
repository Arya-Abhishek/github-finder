import React, { Fragment } from "react";
import Users from "../users/Users";
import Search from "../users/Search";

const Home = () => {
  return (
    <div>
      <Fragment>
        <Search />
        <Users />
      </Fragment>
    </div>
  );
};

export default Home;
