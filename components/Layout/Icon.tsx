import styles from "@/styles/Layout/Icon.module.scss";

const Icon = ({ small }: { small?: boolean }) => {
  return (
    <div className={`${styles.icon} ${small && styles.small}`}>
      <i className="bx bx-user" />
    </div>
  );
};

export default Icon;
