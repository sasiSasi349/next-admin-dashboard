import NavBar from "../ui/dashboard/navbar/navbar";
import SideBar from "../ui/dashboard/sidebar/sidebar";
import styles from "../ui/dashboard/dashboard.module.css";
import Footer from "../ui/dashboard/footer/footer";

const layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <SideBar />
      </div>
      <div className={styles.content}>
        <NavBar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default layout;
