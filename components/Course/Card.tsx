import styles from "@/styles/Course/Card.module.scss";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cover}>
        <i className="bx bx-right-arrow" />
      </div>
      <div className={styles.title}>
        <div>Lectus tincidunt duis adipiscing</div>
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
