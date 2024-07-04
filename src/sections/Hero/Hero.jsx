import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/ianLionettiToon.png";
import sun from "../../assets/sun.svg";
import moon from '../../assets/moon.svg'
import instagramLight from "../../assets/instagram-white.svg";
import instagramDark from "../../assets/instagram-black.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/CV - Ian Agustin Lionetti.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
      
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light'? sun : moon
  const instagramIcon = theme === 'light'? instagramLight : instagramDark
  const githubIcon = theme === 'light'? githubLight : githubDark
  const linkedinIcon = theme === 'light'? linkedinLight : linkedinDark
  
  
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Ian Lionetti"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Ian
          <br />
          Lionetti
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href="https://www.instagram.com/ianlionetti" target="_blank">
            <img src={instagramIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/ianlio-git" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/ianlio" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Aplicando mis conocimientos Full Stack para impulsar el crecimiento
          empresarial y profesional.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
