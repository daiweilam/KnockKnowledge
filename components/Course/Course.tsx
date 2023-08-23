import Banner from "@/components/Course/Banner";
import Section from "@/components/Layout/Section";
import Slogan from "@/components/Layout/Slogan";
import List from "./List";
import styles from "@/styles/Course/Course.module.scss";

const Course = ({ category }: { category: string }) => {
  return (
    <div className={styles.course}>
      <Banner />
      <Section>
        <Slogan>
          <b>{category}</b> Explore for free
        </Slogan>
        <List />
      </Section>
      <hr />
      <Section>
        <List pagination />
      </Section>
    </div>
  );
};

export default Course;
