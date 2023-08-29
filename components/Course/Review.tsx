import styles from "@/styles/Course/Review.module.scss";

const Review = () => {
  return (
    <div className={styles.review}>
      <div className={styles.star}>
        <i className="bx bxs-star" />
        <i className="bx bxs-star" />
        <i className="bx bxs-star" />
        <i className="bx bx-star" />
      </div>
      <div>3 reviews</div>
    </div>
  );
};

export default Review;
