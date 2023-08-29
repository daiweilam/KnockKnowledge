import styles from "@/styles/Course/PlayList.module.scss";

const PlayList = () => {
  return (
    <div className={styles.playList}>
      <div className={styles.box}>
        <div className={styles.title}>
          <span>Course Introduction</span>
          <span>02:30</span>
        </div>
      </div>
    </div>
  );
};

export default PlayList;
