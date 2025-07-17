import styles from "./sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import Footer from './footer'
import { Outlet } from "react-router-dom";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default Sidebar;
