import styles from "@/styles/Layout/Button.module.scss";

const Button = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.button}>{children}</div>;
};

export default Button;
