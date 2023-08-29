import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Link from "next/link";
import styles from "@/styles/Layout/Login.module.scss";

const Login = ({ type }: { type: string }) => {
  const [tab, setTab] = useState(type);

  return (
    <div className={styles.login}>
      <div className={styles.tab}>
        <div className={`${tab === "login" && styles.active}`} onClick={() => setTab("login")}>
          Login
        </div>
        <div
          className={`${tab === "register" && styles.active}`}
          onClick={() => setTab("register")}
        >
          Register
        </div>
      </div>
      {tab === "login" && (
        <>
          <Input icon="bx-envelope">
            <input type="email" placeholder="Email" />
          </Input>
          <Input icon="bxs-key">
            <input type="password" placeholder="Password" />
          </Input>
          <Button>login</Button>
          <Button style="white">login with google</Button>
          <div className={styles.footer}>
            <Link href="#">
              <small>Forgot Password?</small>
            </Link>
          </div>
        </>
      )}
      {tab === "register" && (
        <>
          <Input icon="bx-envelope">
            <input type="email" placeholder="Email" />
          </Input>
          <Input icon="bxs-key">
            <input type="password" placeholder="Password" />
          </Input>
          <Input icon="bxs-key">
            <input type="cPassword" placeholder="Confirm Password" />
          </Input>
          <Button>register</Button>
          <Button style="white">register with google</Button>
        </>
      )}
    </div>
  );
};

export default Login;
