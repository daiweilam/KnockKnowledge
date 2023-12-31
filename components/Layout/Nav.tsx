import { useState } from "react";
import Link from "next/link";
import Popup from "./Popup";
import Login from "./Login";
import Button from "./Button";
import styles from "@/styles/Layout/Nav.module.scss";

const Nav = () => {
  const [popup, setPopup] = useState("");

  const course_categories = [
    { id: 1, name: "Entertainment", slug: "entertainment" },
    { id: 2, name: "Lifestyle", slug: "lifestyle" },
    { id: 3, name: "Writing", slug: "writing" },
    { id: 4, name: "Business", slug: "business" },
    { id: 5, name: "Food", slug: "food" },
  ];

  return (
    <>
      <div className={styles.nav}>
        <nav>
          <div className={styles.main}>
            <Link href="/">
              <div className={styles.logo}>
                <i className="bx bxs-door-open" />
                <div>
                  Knock Knowledge<span>.</span>
                </div>
              </div>
            </Link>
            <div className={styles.menu}>
              <div className={styles.dropdown}>
                <Link href="/course">
                  <div className={styles.item}>
                    Find Course <i className="bx bx-chevron-down" />
                  </div>
                </Link>
                <div className={styles.dropdownMenu}>
                  {course_categories.map((x: { id: number; name: string; slug: string }) => (
                    <Link href={`/category/${x.slug}`} key={x.id}>
                      <div className={styles.item}>{x.name}</div>
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/article">
                <div className={styles.item}>Article</div>
              </Link>
            </div>
          </div>
          <div className={styles.side}>
            <div className={styles.item} onClick={() => setPopup("register")}>
              Register
            </div>
            <Button onClick={() => setPopup("login")}>Login</Button>
          </div>
        </nav>
      </div>
      {popup && (
        <Popup close={() => setPopup("")}>
          <Login type={popup} />
        </Popup>
      )}
    </>
  );
};

export default Nav;
