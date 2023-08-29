import styles from "@/styles/Layout/Button.module.scss";

const Button = ({
  children,
  style,
  onClick,
}: {
  children: React.ReactNode;
  style?: string;
  onClick?: () => void;
}) => {
  return (
    <div className={`${styles.button} ${style === "white" && styles.white}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
