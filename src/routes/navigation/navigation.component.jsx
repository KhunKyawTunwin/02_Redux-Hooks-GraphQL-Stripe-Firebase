import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { Logo } from "../../assets";
const Navigation = () => {
  return (
    <Fragment>
      <div className="navgation">
        <Link>
          <Logo />
        </Link>
      </div>
      <h2>Navigation</h2>
      <Link />
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
