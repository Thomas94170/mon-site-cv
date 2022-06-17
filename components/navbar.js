import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles/navbar.module.css";

export const Navbar = () => {
  const router = useRouter();

  return (
    <div className="container d-flex justify-content-evenly">
      <div className={styles.header}>
        <Link href="/" passHref>
          <span
            className={router.pathname === "/" ? styles.active : styles.link}
          >
            <img
              src="https://img.icons8.com/material/24/undefined/hello.png"
              height="25px"
            />
            Home
          </span>
        </Link>
        <Link href="/portfolio" passHref>
          <span
            className={
              router.pathname === "/portfolio" ? styles.active : styles.link
            }
          >
            <img
              src="https://img.icons8.com/glyph-neue/64/undefined/hard-working.png"
              height="25px"
            />
            Portfolio
          </span>
        </Link>
        <Link href="/competences" passHref>
          <span
            className={
              router.pathname === "/competences" ? styles.active : styles.link
            }
          >
            <img
              src="https://img.icons8.com/ios-filled/50/undefined/critical-thinking.png"
              height="25px"
            />
            Mes compétences
          </span>
        </Link>
        <Link href="/contact" passHref>
          <span
            className={
              router.pathname === "/contact" ? styles.active : styles.link
            }
          >
            <img
              src="https://img.icons8.com/ios-glyphs/30/undefined/duplicate-contacts.png"
              height="25px"
            />
            Contactez-moi!
          </span>
        </Link>
      </div>
    </div>
  );
};
