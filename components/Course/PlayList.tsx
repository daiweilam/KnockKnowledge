import Chapter from "./Chapter";
import styles from "@/styles/Course/PlayList.module.scss";

const PlayList = () => {
  return (
    <div className={styles.playList}>
      <div className={styles.intro}>
        <div className={styles.header}>
          <span>Course Introduction</span>
          <span>02:30</span>
        </div>
      </div>
      <Chapter />
      <Chapter />
      <Chapter />
      <Chapter />
    </div>
  );
};

export default PlayList;
