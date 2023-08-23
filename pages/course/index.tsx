import Banner from "@/components/Course/Banner";
import Section from "@/components/Layout/Section";
import Slogan from "@/components/Layout/Slogan";
import styles from "@/styles/Course/Course.module.scss";

const CourseCard = () => {
  return (
    <div className={styles.courseCard}>
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

const Course = () => {
  return (
    <div className={styles.course}>
      <Banner />
      <Section>
        <Slogan>Category Explore for free</Slogan>
        <div className={styles.list}>
          <CourseCard />
          <CourseCard />
        </div>
      </Section>
      <hr />
      <Section>
        <div className={styles.list}>
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </Section>
      <Section>
        <div className={styles.pagination}>
          <div>
            <i className="bx bx-left-arrow-alt" />
            Prev
          </div>
          <div className={styles.active}>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>
            Next
            <i className="bx bx-right-arrow-alt" />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Course;
