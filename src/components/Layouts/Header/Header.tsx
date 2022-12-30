import Link from "next/link";
import React, { FC } from "react";
import styles from "./Header.module.scss";
import { RxMagnifyingGlass } from 'react-icons/rx';


type ChildrenProps = {
  children: JSX.Element;
};
const Header: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <>
      <section className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src="/Logo.png" alt="" />
        </div>
        <div className={styles.navBar}>
          <div>
            <Link href={"/"}>
              <h2>Movies</h2>
            </Link>
            <Link href={"/"}>
              <h2>TV Shows</h2>
            </Link>
            <Link href={"/"}>
              <h2>Documentaries</h2>
            </Link>
          </div>

          <div>
            <Link href={"/"}>
             <RxMagnifyingGlass style={{width:29, height:29, marginRight:20}}/>
            </Link>
            <Link href={"/"}>
              <h2>Sign Up</h2>
            </Link>
          </div>
          </div>
      </section>
      {children}
    </>
  );
};

export default Header;
