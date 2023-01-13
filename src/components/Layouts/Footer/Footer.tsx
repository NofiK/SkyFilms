import React from "react";
import styles from "./styles.module.scss";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterFill,
  RiLinkedinFill,
} from "react-icons/ri";
export const Footer = () => {
  return (
    <section>
      <hr className={styles.slashLine2}></hr>
      <div className={styles.footerContainer}>
        <img style={{ width: 160 }} src="/Logo.png" alt="" />
        <div className={styles.aboutLinks}>
          <p>About</p>
          <p>Contact</p>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
        <div className={styles.socialLinks}>
          <RiFacebookFill className={styles.socialLink}/>
          <RiInstagramFill className={styles.socialLink}/>
          <RiTwitterFill className={styles.socialLink}/>
          <RiLinkedinFill className={styles.socialLink}/>
        </div>
        <p className={styles.copyrights}>Copyright @{new Date().getFullYear()} <span>SKYFILMS</span>.All rights reserved</p>
      </div>
    </section>
  );
};
