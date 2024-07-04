import React from "react";
import styles from "./ProjetsStyles.module.css";
import viberr from "../../assets/img.png";
import fershBurger from "../../assets/fresh-burger.png"
import hipsster from "../../assets/img2.png"
import ProjetCard from "../../common/ProjetCard";

function Projets() {
  return (
    <section id="projets" className={styles.container}>
      <h1 className="sectionTitle">  Projets </h1>
      <div className={styles.projectsContainer}>
        <ProjetCard
          src={viberr}
          link="https://github.com/ianlio-git/PruebaCOSUD"
          h3="Formulario"
          p="formulario COSUD"
        />
         <ProjetCard
          src={fershBurger}
          link="https://github.com/ianlio-git/mi-bot-de-discord"
          h3="Botchini"
          p="mi bot de discord"
        />
        <ProjetCard
          src={hipsster}
          link="https://github.com/Diegod2202/TPO-POO"
          h3="Lost galaxy"
          p="juego en java"
        />
      </div>
    </section>
  );
}

export default Projets;
