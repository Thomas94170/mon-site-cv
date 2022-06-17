// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import { useParallaxController } from "react-scroll-parallax";
import React from "react";
import { useParallax } from "react-scroll-parallax";
import styles from "../styles/animComp.module.css";
import "bootstrap/dist/css/bootstrap.css";

export const AnimCompetences = () => {
  const { ref } = useParallax({
    rotateY: [0, 360],
  });
  return (
    <>
      <br />
      <br />
      <div>
        <div className={styles.framework}>
          <h2 className="text-center">Mes compétences</h2>
        </div>
        <br />
        <div className="text-center">
          <li>
            <ol>
              Développement frontend et backend de sites et applications web
            </ol>
          </li>
          <li>
            <ol>
              Compréhension des besoins utilisateurs et création d'un cahier des
              charges
            </ol>
          </li>
          <li>
            <ol>
              Mise en oeuvre du déploiement de sites ou d'applications en ligne
            </ol>
          </li>
          <li>
            <ol>Gestion des bugs, maintenance et mise à jour des sites</ol>
          </li>
          <li>
            <ol>Respect scrupuleux des souhaits du client</ol>
          </li>
          <li>
            <ol>
              Bonne gestion du temps, travail d'équipe, communicatif, curieux,
              motivé
            </ol>
          </li>
        </div>
        <br />
        <br />
        <div className={styles.informatique}>
          <h2 className="text-center">Informatique</h2>
        </div>
        <br />
        <div ref={ref} className={styles.spinner}>
          <div className={styles.spinnerItem}>
            <img
              src="https://img.icons8.com/color/48/undefined/html-5--v1.png"
              height="50px"
            />
          </div>
          <div className={styles.spinnerItem}>
            <img
              src="https://img.icons8.com/color/48/undefined/javascript--v1.png"
              height="50px"
            />
          </div>
          <div className={styles.spinnerItem}>
            <img
              src="https://img.icons8.com/plasticine/100/undefined/react.png"
              height="50px"
            />
          </div>
          <div className={styles.spinnerItem}>
            <img
              src="https://img.icons8.com/ios-glyphs/30/undefined/github-2.png"
              height="50px"
            />
          </div>
          <div className={styles.spinnerItem}>
            <img
              src="https://img.icons8.com/ios/50/undefined/php-logo.png"
              height="50px"
            />
          </div>
          <div className={styles.spinnerItem}>
            <img
              src="https://img.icons8.com/color/48/undefined/css3.png"
              height="50px"
            />
          </div>
          <div className={styles.spinnerItem}>
            <img
              src="https://img.icons8.com/external-soft-fill-juicy-fish/60/undefined/external-sql-servers-and-networks-soft-fill-soft-fill-juicy-fish.png"
              height="50px"
            />
          </div>
          <div className={styles.spinnerItem}>
            <img
              src="https://img.icons8.com/color/48/undefined/heroku.png"
              height="50px"
            />
          </div>
          <div className={styles.spinnerItem}>
            <img
              src="https://img.icons8.com/color/48/undefined/symfony.png"
              height="50px"
            />
          </div>
          <div className={styles.spinnerItem}>
            <img
              src="https://img.icons8.com/ios-glyphs/30/undefined/wordpress--v1.png"
              height="50px"
            />
          </div>
          <div className={styles.spinnerItem}>
            <img
              src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/24/undefined/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-filled-tal-revivo.png"
              height="50px"
            />
          </div>
          <div className={styles.spinnerItem}>
            <img
              src="https://img.icons8.com/color/48/undefined/git.png"
              height="50px"
            />
          </div>
          <div className={styles.spinnerItem}>
            <img
              src="https://img.icons8.com/color/48/undefined/bootstrap.png"
              height="50px"
            />
          </div>
          <div className={styles.spinnerItem}>
            <img
              src="https://img.icons8.com/color/48/undefined/adobe-indesign--v1.png"
              height="50px"
            />
          </div>
        </div>
        <br />
        <div className="text-center">
          <li>
            <ol>
              Langages et différents Frameworks (JS,
              Bootstrap,TailwindCSS,React, Next.JS,PHP,Symfony,Jquery)
            </ol>
          </li>
          <li>
            <ol>
              Outils de sauvegarde et de déploiement en ligne (GitHub, GitBash,
              Heroku, Netlify, Vercel)
            </ol>
          </li>
          <li>
            <ol>CMS (WordPress) et CMS Headless (Strapi)</ol>
          </li>
          <li>
            <ol>Design et maquettage (Adobe XD, Figma)</ol>
          </li>
          <li>
            <ol>Diagramme (Lucidchart, Whimsical)</ol>
          </li>
        </div>
        <br />
        <br />
        <div className={styles.langue}>
          <h2 className="text-center">Langues étrangères</h2>
        </div>
        <br />
        <div className="text-center d-flex justify-content-center">
          <img
            src="https://img.icons8.com/fluency/48/undefined/italy-circular.png"
            height="25px"
          />
          <p> Niveau C1 (autonome)</p>
        </div>
        <div className="text-center d-flex justify-content-center">
          <img
            src="https://img.icons8.com/color/48/undefined/germany-circular.png"
            height="25px"
          />
          <p> Niveau B2 (indépendant)</p>
        </div>
        <div className="text-center d-flex justify-content-center">
          <img
            src="https://img.icons8.com/fluency/48/undefined/great-britain-circular.png"
            height="25px"
          />
          <p> Niveau A2 (élémentaire)</p>
        </div>
        <div className="text-center d-flex justify-content-center">
          <img
            src="https://img.icons8.com/color/48/undefined/saudi-arabia-circular.png"
            height="25px"
          />
          <p> Niveau A1 (découverte)</p>
        </div>
        <br />
        <br />
        <div className={styles.hobby}>
          <h2 className="text-center">Mes hobbies</h2>
        </div>
        <br />
        <div className="text-center d-flex justify-content-evenly">
          <div>
            <img
              src="https://img.icons8.com/color/48/undefined/manchester-united-fc.png"
              height="30px"
            />
            <p>Fan de Manchester United</p>
          </div>
          <div>
            <img
              src="https://img.icons8.com/external-justicon-flat-justicon/64/undefined/external-muay-thai-thailand-element-justicon-flat-justicon.png"
              height="30px"
            />
            <p>20 combats semi pro en Allemagne, Italie, Suisse</p>
          </div>
          <div>
            <img
              src="https://img.icons8.com/color/48/undefined/bench-press-with-dumbbells.png"
              height="30px"
            />
            <p>pour garder la forme</p>
          </div>
        </div>
      </div>
    </>
  );
};
