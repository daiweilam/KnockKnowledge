import Button from "../Layout/Button";
import styles from "@/styles/Course/Banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.main}>
        <div className={styles.video}>
          <div className={styles.image}>
            <i className="bx bx-caret-right-circle" />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>Lectus tincidunt duis adipiscing</div>
          <div>
            Lorem ipsum dolor sit amet arcu duis integer. Blandit erat turpis luctus scelerisque sed
            iaculis euismod sodales volutpat condimentum dictum curabitur aliquam.
          </div>
          <div className={styles.btn}>
            <Button>
              watching
              <i className="bx bx-right-arrow-alt" />
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.control}>
        <div className={styles.btn}>
          <i className="bx bx-left-arrow-alt" />
        </div>
        <div className={styles.btn}>
          <i className="bx bx-right-arrow-alt" />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Banner;
