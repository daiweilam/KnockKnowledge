import { useRef } from "react";
import Slogan from "../Layout/Slogan";
import styles from "@/styles/Home/Review.module.scss";

const Review = () => {
  const listRef = useRef<HTMLDivElement>(null);
  let idx: ReturnType<typeof setInterval>;

  const Card = () => {
    return (
      <div className={styles.card}>
        <div>
          Lorem ipsum dolor sit amet augue est diam nulla a sagittis odio. Nibh cras duis fusce est
          incididunt cursus.
        </div>
        <div className={styles.user}>
          <div className={styles.icon}>
            <i className="bx bx-user" />
          </div>
          <div>By John Doe</div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.review}>
      <Slogan>
        What our customer say<span>.</span>
      </Slogan>
      <div className={styles.list} ref={listRef}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className={styles.control}>
        <div
          className={styles.btn}
          onMouseEnter={() => {
            idx = setInterval(() => {
              if (listRef.current) {
                listRef.current.scrollLeft -= 1;
              }
            }, 10);
          }}
          onMouseLeave={() => {
            clearInterval(idx);
          }}
        >
          <i className="bx bx-left-arrow-alt" />
        </div>
        <div
          className={styles.btn}
          onMouseEnter={() => {
            idx = setInterval(() => {
              if (listRef.current) {
                listRef.current.scrollLeft += 1;
              }
            }, 10);
          }}
          onMouseLeave={() => {
            clearInterval(idx);
          }}
        >
          <i className="bx bx-right-arrow-alt" />
        </div>
      </div>
    </div>
  );
};

export default Review;
