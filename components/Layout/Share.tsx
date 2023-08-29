import styles from "@/styles/Layout/Share.module.scss";

const Share = ({ column }: { column?: boolean }) => {
  return (
    <div className={`${styles.share} ${column && styles.column}`}>
      <i className="bx bxl-facebook" />
      <i className="bx bxl-twitter" />
      <i className="bx bxl-whatsapp" />
      <i className="bx bxl-telegram" />
      <i className="bx bx-bookmark-alt" />
    </div>
  );
};

export default Share;
