import styles from "@/styles/Course/Card.module.scss";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.card}>
      <Link href="/course/1">
        <div className={styles.cover}>
          <i className="bx bx-right-arrow" />
        </div>
      </Link>
      <div className={styles.title}>
        <Link href="/course/1">
          <div>Lectus tincidunt duis adipiscing</div>
        </Link>
        <i className="bx bx-bookmark-alt" />
      </div>
      <div className={styles.info}>
        <span>10 videos</span>
        <span>2h 30m</span>
        <span>100 classmates</span>
      </div>
      <div className={styles.footer}>
        <div className={styles.review}>
          <div className={styles.star}>
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bxs-star" />
            <i className="bx bx-star" />
          </div>
          <div>3 reviews</div>
        </div>
        <div className={styles.price}>HKD$500.0</div>
      </div>
    </div>
  );
};

export default Card;
