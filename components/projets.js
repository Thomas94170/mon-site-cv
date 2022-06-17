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
        <div class="d-flex justify-content-around">
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
          </div>
        </div>
        <br />
        <br />
        <div class="d-flex justify-content-around">
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
          </div>
        </div>
      </div>
    </div>
  );
};
