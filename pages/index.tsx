/* eslint-disable @next/next/no-img-element */
import Banner from "@/components/Home/Banner";
import styles from "@/styles/Index.module.scss";

const Index = () => {
  return (
    <div className={styles.index}>
      <Banner />
    </div>
  );
};

export default Index;
