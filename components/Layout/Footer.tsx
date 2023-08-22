/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Button from "./Button";
import styles from "@/styles/Layout/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.menu}>
        <div className={styles.list}>
          <div>Share Knowledge</div>
          <Link href="#">Open Course</Link>
        </div>
        <div className={styles.list}>
          <div>Get Knowledge</div>
          <Link href="#">Find Course</Link>
          <Link href="#">Article</Link>
        </div>
      </div>

      <img src="/footer_image.png" alt="" />

      <div className={styles.side}>
        <div className={styles.top}>
          <div className={styles.social}>
            <Link href="#">
              <i className="bx bxl-facebook" />
            </Link>
            <Link href="#">
              <i className="bx bxl-twitter" />
            </Link>
            <Link href="#">
              <i className="bx bxl-linkedin" />
            </Link>
            <Link href="#">
              <i className="bx bxl-youtube" />
            </Link>
          </div>
          <Link href="/">
            <div className={styles.logo}>
              <div>
                Knock Knowledge<span>.</span>
              </div>
              <i className="bx bxs-door-open" />
            </div>
          </Link>
        </div>
        <div className={styles.bottom}>
          <Button>
            TOP <i className="bx bx-up-arrow-alt" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
