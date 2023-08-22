/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Home/Banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.main}>
        <div className={styles.title}>
          <div>
            Open <img src="/banner_book.png" alt="" />
          </div>
          <div>the Door of</div>
          <div>Knowledge</div>
        </div>
        <div className={styles.searchBar}>
          <div className={styles.input}>
            <i className="bx bx-search" />
            <input type="text" placeholder="Find your passion" />
          </div>

          <button type="submit">SEARCH</button>
        </div>
      </div>
      <div className={styles.gallery}>
        <div className={styles.image}>
          <div className={styles.textBG}></div>
          <div className={styles.text}>Business</div>
          <img src="/banner_gallery_3.jpg" alt="" />
        </div>
        <div className={styles.image}>
          <div className={styles.textBG}></div>
          <div className={styles.text}>Cooking</div>
          <img src="/banner_gallery_2.jpg" alt="" />
        </div>
        <div className={styles.image}>
          <div className={styles.textBG}></div>
          <div className={styles.text}>Writing</div>
          <img src="/banner_gallery_1.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
