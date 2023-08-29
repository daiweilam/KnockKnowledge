import styles from "@/styles/Layout/Button.module.scss";

const Button = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => {
  return (
    <div className={styles.button} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
