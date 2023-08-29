import { useState } from "react";
import Section from "./Section";
import styles from "@/styles/Course/Chapter.module.scss";

const Chapter = () => {
  const [display, setDisplay] = useState(true);

  return (
    <div className={styles.chapter}>
      <div className={styles.header} onClick={() => setDisplay(!display)}>
        <div className={styles.title}>
          <span>Chapter 1 :</span>
          <span>Chapter 1</span>
        </div>
        <i className="bx bxs-chevron-down" />
      </div>
      {display && (
        <div>
          <Section unlock={true} work={false} />
          <Section unlock={false} work={false} />
          <Section unlock={false} work={false} />
          <Section unlock={true} work={true} />
        </div>
      )}
    </div>
  );
};

export default Chapter;
