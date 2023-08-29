import styles from "@/styles/Course/Section.module.scss";

const Section = ({ unlock, work }: { unlock: boolean; work: boolean }) => {
  return (
    <div className={`${styles.section} ${unlock && styles.unlock}`}>
      <div className={styles.header}>
        <i className={unlock ? (work ? "bx bxs-book-alt" : "bx bx-play-circle") : "bx bxs-lock"} />
        <div>Section 1</div>
      </div>
      <div className={styles.title}>Section Title</div>
    </div>
  );
};

export default Section;
