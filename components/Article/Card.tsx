import Link from "next/link";
import Icon from "../Layout/Icon";
import styles from "@/styles/Article/Card.module.scss";

const Card = () => {
  return (
    <div className={styles.card}>
      <Link href="/article/1">
        <div className={styles.cover}></div>
      </Link>
      <div className={styles.header}>
        <Link href="/article/1">
          <span>Lectus tincidunt duis adipiscing</span>
        </Link>
        <i className="bx bx-bookmark-alt" />
      </div>
      <div className={styles.footer}>
        <div className={styles.main}>
          <Icon small />
          <div className={styles.author}>
            <span>author</span>
            <span>John Doe</span>
          </div>
        </div>
        <div>2023. 01. 17</div>
      </div>
    </div>
  );
};

export default Card;
