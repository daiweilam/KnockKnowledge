import styles from "@/styles/Layout/Price.module.scss";

const Price = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.price}>{children}</div>;
};

export default Price;
