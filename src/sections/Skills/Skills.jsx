import React from "react";
import Slider from "react-slick";
import styles from "./SkillsStyles.module.css";
import SkillList from "../../common/SkillList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import html from '../../assets/programs/html.svg'
import css from '../../assets/programs/css.svg'
import js from '../../assets/programs/js.svg'
import react from '../../assets/programs/react.svg'
import java from '../../assets/programs/java.svg'
import python from '../../assets/programs/python.svg'
import ts from '../../assets/programs/typesript.svg'

function Skills() {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:0,
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <Slider {...settings} className={styles.skillList}>
        <SkillList src={ts} skill="TypeScript" />
        <SkillList src={html} skill="HTML" />
        <SkillList src={css} skill="CSS" />
        <SkillList src={js} skill="JavaScript" />
        <SkillList src={react} skill="React" />
        <SkillList src={java} skill="Java" />
        <SkillList src={python} skill="Python" />
      </Slider>
    </section>
  );
}

export default Skills;
