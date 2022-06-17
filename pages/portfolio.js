import React from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Projets } from "../components/projets";
import "bootstrap/dist/css/bootstrap.css";
import { Modal } from "../components/modal";

export default () => (
  <main>
    <Navbar />
    <br />

    <Modal />
    <Projets />
    <br />
    <Footer />
  </main>
);
