import React from "react";
import styles from "../styles/footer.module.css";
import "bootstrap/dist/css/bootstrap.css";

export const Footer = () => {
  return (
    <>
      <br />
      <br />

      <div className={styles.footer}>
        <p className="text-center">ThomasDevweb94</p>
        <div class="d-flex justify-content-around">
          <a href="https://www.linkedin.com/in/thomas-thirion-776748145/">
            <img
              src="https://img.icons8.com/ios-filled/50/undefined/linkedin.png"
              width="30px"
            />
          </a>
          <a href="https://github.com/Thomas94170">
            <img
              src="https://img.icons8.com/small/16/undefined/github-2.png"
              width="30px"
            />
          </a>
        </div>
      </div>

      <br />
      <br />
    </>
  );
};
