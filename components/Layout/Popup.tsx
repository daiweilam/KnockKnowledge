import styles from "@/styles/Layout/Popup.module.scss";

const Popup = ({ children, close }: { children: React.ReactNode; close: () => void }) => {
  return (
    <>
      <div className={styles.popupBG} onClick={() => close()} />
      <div className={styles.popup}>
        <i className={`bx bx-x ${styles.close}`} onClick={() => close()} />
        {children}
      </div>
    </>
  );
};

export default Popup;
