import styles from "@/styles/Home/Slogan.module.scss";

const Slogan = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.slogan}>{children}</div>;
};

export default Slogan;
