import styles from "@/styles/Course/Info.module.scss";

function Info({ children }: { children: React.ReactNode }) {
  return <div className={styles.info}>{children}</div>;
}

export default Info;
