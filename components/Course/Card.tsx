import Link from "next/link";
import Info from "./Info";
import Review from "./Review";
import Price from "../Layout/Price";
import styles from "@/styles/Course/Card.module.scss";

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
      <Info>
        <span>10 videos</span>
        <span>2h 30m</span>
        <span>100 classmates</span>
      </Info>
      <div className={styles.footer}>
        <Review />
        <Price>HKD$500.0</Price>
      </div>
    </div>
  );
};

export default Card;
