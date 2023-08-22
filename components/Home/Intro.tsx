/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Home/Intro.module.scss";

const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.main}>
        <div className={styles.subTitle}>Lectus tincidunt duis adipiscing</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo aperiam nemo, ducimus
          soluta nostrum itaque cumque iure odit, eius perferendis optio tempora voluptas aspernatur
          ipsam alias exercitationem voluptatum consequuntur?
        </div>
      </div>
      <div className={styles.image}>
        <img src="/intro_image.png" alt="" />
      </div>
    </div>
  );
};

export default Intro;
