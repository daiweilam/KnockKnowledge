import Section from "../Layout/Section";
import Card from "./Card";
import styles from "@/styles/Course/List.module.scss";

const Pagination = () => {
  return (
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
  );
};

const List = ({ pagination }: { pagination?: boolean }) => {
  return (
    <>
      <div className={styles.list}>
        <Card />
        <Card />
      </div>
      {pagination && (
        <Section>
          <Pagination />
        </Section>
      )}
    </>
  );
};

export default List;
