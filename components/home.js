import React from "react";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.css";

export const Home = () => {
  return (
    <>
      <div className="text-center">
        <div className={styles.banner}>
          <br />
          <br />
          <br />
          <br />

          <p className={styles.nom}>THIRION Thomas</p>

          <br />
          <br />

          <br />
          <div className="d-flex justify-content-evenly">
            <p className={styles.job}>Dev Web</p>
            <p className={styles.job}>Full Stack</p>
          </div>
          <br />
          <br />
          <br />
          <button className={styles.pdf}>
            <a className="btn" href="" target="_blank">
              Télécharger CV
            </a>
          </button>
          <br />

          <br />
          <br />
          <br />

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
};
