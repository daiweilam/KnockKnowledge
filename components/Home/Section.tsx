import styles from "@/styles/Home/Section.module.scss";

const Section = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.section}>{children}</div>;
};

export default Section;
