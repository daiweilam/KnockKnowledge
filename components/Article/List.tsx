import Card from "./Card";
import styles from "@/styles/Article/List.module.scss";

const List = () => {
  return (
    <div className={styles.list}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default List;
