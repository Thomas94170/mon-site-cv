import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles/competence.module.css";

export const AboutMe = () => {
  return (
    <>
      <br />
      <br />
      <div className={styles.aboutme}>
        <h2 className="text-center">A propos de moi</h2>
      </div>

      <br />
      <div className={styles.me}>
        <p className="text-center">
          Passionné par l informatique et le monde digital, j'ai entrepris une
          reconversion professionnelle en tant que Developpeur Web Full Stack
          spécialité Android depuis maintenant 8 mois avec Studi
        </p>
        <br />
        <p className="text-center">
          En parallèle de ma formation, j'entreprends la création de projets
          personnels avec différents languages de programmations et framework
          afin d'avoir un maximum de connaissances
        </p>
        <br />
        <p className="text-center">
          J'affectionne tout particulièrement React et son framework Next.js
          ainsi que la gestion des API dans le domaine du front end. Pour le
          back-end, symfony m'attire tout particulièrement.
        </p>
        <br />
        <p className="text-center">
          Je suis pleinement conscient du manque d'expériences de ma part, mais
          ma motivation et ma curiosité seront un atout pour vous.
        </p>
      </div>
      <br />
      <br />
      <div className={styles.formation}>
        <h2 className="text-center">Ma formation</h2>
      </div>
      <br />
      <div className={styles.contenu}>
        <p className="text-center">
          Graduate Développeur mobile Android au sein de l'école Studi depuis le
          10/08/2021.
        </p>
      </div>
    </>
  );
};
