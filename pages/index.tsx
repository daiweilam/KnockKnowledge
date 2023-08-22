/* eslint-disable @next/next/no-img-element */
import Section from "@/components/Home/Section";
import Banner from "@/components/Home/Banner";
import Slogan from "@/components/Home/Slogan";
import Category from "@/components/Home/Category";
import Intro from "@/components/Home/Intro";
import Review from "@/components/Home/Review";
import styles from "@/styles/Index.module.scss";

const Index = () => {
  return (
    <div className={styles.index}>
      <Section>
        <Banner />
      </Section>
      <Section>
        <Slogan>
          Stay hungry<span>.</span> Stay foolish<span>.</span>
        </Slogan>
      </Section>
      <Section>
        <Category />
      </Section>
      <Section>
        <Intro />
      </Section>
      <hr />
      <Section>
        <Review />
      </Section>
    </div>
  );
};

export default Index;
