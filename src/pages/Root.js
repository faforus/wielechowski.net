import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

import classes from "./Root.module.css";

const RootLayout = () => {
  return (
    <Fragment>
      <Header />
      <main className={classes.content}>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default RootLayout;
