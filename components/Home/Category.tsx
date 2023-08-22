import { useState } from "react";
import styles from "@/styles/Home/Category.module.scss";

const categories = [
  { id: 1, name: "All categories", slug: "all" },
  { id: 2, name: "Entertainment", slug: "entertainment" },
  { id: 3, name: "Lifestyle", slug: "lifestyle" },
  { id: 4, name: "Writing", slug: "writing" },
  { id: 5, name: "Business", slug: "business" },
  { id: 6, name: "Food", slug: "food" },
];

const Category = () => {
  const [active, setActive] = useState("all");

  return (
    <div className={styles.category}>
      <div className={styles.menu}>
        {categories.map((x: { id: number; name: string; slug: string }) => (
          <div
            className={active === x.slug ? styles.active : ""}
            onClick={() => setActive(x.slug)}
            key={x.id}
          >
            {x.name}
          </div>
        ))}
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
