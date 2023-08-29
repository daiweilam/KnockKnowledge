import Icon from "./Icon";
import styles from "@/styles/Layout/UserLabel.module.scss";

const UserLabel = () => {
  return (
    <div className={styles.userLabel}>
      <Icon />
      <div>By John Doe</div>
    </div>
  );
};

export default UserLabel;
