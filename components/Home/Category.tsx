import styles from "@/styles/Home/Category.module.scss";

const Category = () => {
  return (
    <div className={styles.category}>
      <div className={styles.menu}>
        <div>All categories</div>
        <div>Entertainment</div>
        <div>Lifestyle</div>
        <div>Writing</div>
        <div>Business</div>
      </div>
      <div className={styles.list}>
        <div className={styles.card}>
          <div className={styles.image}>
            <i className="bx bx-image" />
          </div>
          <div className={styles.title}>Sales Marketing</div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <i className="bx bx-image" />
          </div>
          <div className={styles.title}>Data Analytics</div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <i className="bx bx-image" />
          </div>
          <div className={styles.title}>Copywriting Pro</div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <i className="bx bx-image" />
          </div>
          <div className={styles.title}>Design Art</div>
        </div>
      </div>
    </div>
  );
};

export default Category;
