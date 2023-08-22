/* eslint-disable @next/next/no-img-element */
import Banner from "@/components/Home/Banner";
import Category from "@/components/Home/Category";
import Intro from "@/components/Home/Intro";
import styles from "@/styles/Index.module.scss";

const Index = () => {
  return (
    <div className={styles.index}>
      <section>
        <Banner />
      </section>
      <section>
        <div className={styles.slogan}>
          Stay hungry<span>.</span> Stay foolish<span>.</span>
        </div>
      </section>
      <section>
        <Category />
      </section>
      <section>
        <Intro />
      </section>
      <hr />
      <section>
        <div className={styles.slogan}>
          What our customer say<span>.</span>
        </div>
      </section>
    </div>
  );
};

export default Index;
