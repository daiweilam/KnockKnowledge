import styles from "@/styles/Layout/Input.module.scss";

const Input = ({ children, icon }: { children: React.ReactNode; icon: string }) => {
  return (
    <div className={styles.input}>
      <i className={`bx ${icon}`} />
      {children}
    </div>
  );
};

export default Input;
