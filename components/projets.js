import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles/projets.module.css";
import Image from "next/image";
import de from "../img/De.png";
import photographe from "../img/photographe.png";
import association from "../img/association.png";
import crypto from "../img/crypto.png";

export const Projets = () => {
  return (
    <div>
      <div className={styles.projets}>
        <div className={styles.titre}>
          <h2 className="text-center">Mes projets</h2>
        </div>
        <br />
        <div className="d-flex justify-content-around">
          <div className={styles.p}>
            <a href="https://evaluation-studi-js-ththomas.netlify.app/">
              <Image
                src={de}
                alt="Jeu de dé Javascript"
                width={200}
                height={150}
              />
            </a>
            <p className="text-center">Javascript</p>
            <p className="text-center">Jeu de dé</p>
          </div>
          <div className={styles.p}>
            <a href="https://charles-photographie-thomas94170.vercel.app/">
              <Image
                src={photographe}
                alt="Site Next.js"
                width={200}
                height={150}
              />
            </a>
            <p className="text-center">Next.js/CMS Headless (strapi)</p>
            <p className="text-center">Site photographie</p>
          </div>
        </div>
        <br />
        <br />
        <div className="d-flex justify-content-around">
          <div className={styles.p}>
            <a href="https://creation-site-responsive-design-studi-thirionthomas.netlify.app/">
              <Image
                src={association}
                alt="Site HTML Bootstrap"
                width={200}
                height={150}
              />
            </a>
            <p className="text-center">Html/Bootstrap</p>
            <p className="text-center">Association</p>
          </div>
          <div className={styles.p}>
            <a href="https://ttcrypto-monnaies.vercel.app/">
              <Image
                src={crypto}
                alt="Site Next.js-tailwindCSS"
                width={200}
                height={150}
              />
            </a>
            <p className="text-center">Next.js-tailwindCSS</p>
            <p className="text-center">Crypto</p>
          </div>
        </div>
      </div>
    </div>
  );
};
