import Head from "next/head";
import Image from "next/image";
// import styles from '../styles/Home.module.css'

import { Navbar } from "../components/navbar";
import "bootstrap/dist/css/bootstrap.css";
import { Home } from "../components/home";
import { Footer } from "../components/footer";

export default function Index() {
  return (
    <>
      <div>
        <Navbar />

        <Home />

        <Footer />
      </div>
    </>
  );
}
