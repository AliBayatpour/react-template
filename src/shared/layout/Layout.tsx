import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import classes from "./layout.module.scss";

const Layout: React.FC = () => {
  return (
    <div className={`${classes.mainContainer}`}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
