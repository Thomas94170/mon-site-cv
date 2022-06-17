import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
// import Image from "next/Image";
import { AiFillFire } from "react-icons/ai";
import styles from "../styles/popup.module.css";

export const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  return (
    <div>
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className={styles.popup}
          onClick={() => setShowModal(true)}
        >
          Code Source <AiFillFire />
        </button>
        <br />
        <br />
        {/* <button
          type="button"
          class="btn btn-light"
          onClick={() => setShowSecondModal(true)}
        >
          Code source <AiFillFire />
        </button> */}
      </div>
      {/* construction Modal jsx*/}
      {showModal ? (
        <div>
          <div>
            <br />
            <br />
            <div className="d-flex justify-content-around">
              <br />
              <button type="button" className={styles.popup}>
                <a href="https://github.com/Thomas94170/evaluation-studi-JS">
                  Jeu de dé
                </a>
              </button>
              <br />
              <button type="button" className={styles.popup}>
                <a href="https://github.com/Thomas94170/eval-front-end">
                  Photographe
                </a>
              </button>
              <br />
              <button type="button" className={styles.popup}>
                <a href="https://github.com/Thomas94170/page-vitrine_THIRION_Thomas">
                  Association
                </a>
              </button>
              <br />
              <button type="button" className={styles.popup}>
                <a href="https://github.com/Thomas94170/Crypto-Monnaies">
                  Crypto
                </a>
              </button>
              <button type="button" className={styles.popup}>
                <a href="https://github.com/Thomas94170/mon-site-cv">
                  Code de ce site
                </a>
              </button>
            </div>
          </div>
          <br />
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className={styles.retour}
              onClick={() => setShowModal(false)}
            >
              Retour
            </button>
          </div>
        </div>
      ) : null}
      <br />
      <br />
    </div>
  );
};
