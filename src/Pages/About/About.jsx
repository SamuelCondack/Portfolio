import styles from "./About.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default function About() {
  return (
    <div id="about" className={styles.aboutContainer}>
      <div
        className={styles.main}
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-duration="1600"
      >
        <h2 className={styles.aboutTitle}>About me</h2>
        <p className={styles.aboutSubtitle}>
          Here you can see more information about me and my current programming
          skills
        </p>
        <div className={styles.aboutContent}>
          <div className={styles.aboutContentContainer}>
            <h3 className={styles.aboutContentTitle}>A Little About Me</h3>
            <div className={styles.aboutContentTexts}>
              <p className={styles.aboutContentParagraphs}>
                I'm a <strong>Frontend Developer</strong> and a{" "}
                <strong>Software Engineering Student</strong>.I build Web
                Applications focused in extract and implement the best ideas.
                You can check some of my Projects in the next section.
              </p>
              <p className={styles.aboutContentParagraphs}>
                I am also in{" "}
                <a
                  className={styles.aboutContentLinks}
                  href="https://github.com/SamuelCondack"
                  target="_blank"
                >
                  <strong>Github</strong>
                </a>{" "}
                and{" "}
                <a
                  className={styles.aboutContentLinks}
                  href="https://www.linkedin.com/in/samuelcondack/"
                  target="_blank"
                >
                  <strong>LinkedIn</strong>
                </a>
                . You may contact me there.
              </p>
              <p className={styles.aboutContentParagraphs}>
                I'm open to <strong>Job</strong> opportunities where i can
                contribute, learn and grow. If you have a good opportunity that
                matches my skills then don't hesitate to{" "}
                <strong>contact</strong> me{" "}
              </p>
            </div>
          </div>
          <div className={styles.aboutContentSkills}>
            <h3 className={styles.aboutContentTitle}>My Skills</h3>
            <div className={styles.skills}>
              <div
                className={styles.skill}
                data-aos="zoom-out-up"
                data-aos-easing="ease"
                data-aos-duration="1600"
              >
                HTML
              </div>
              <div
                className={styles.skill}
                data-aos="zoom-out-up"
                data-aos-easing="ease"
                data-aos-duration="1700"
              >
                CSS
              </div>
              <div
                className={styles.skill}
                data-aos="zoom-out-up"
                data-aos-easing="ease"
                data-aos-duration="1800"
              >
                JavaScript
              </div>
              <div
                className={styles.skill}
                data-aos="zoom-out-up"
                data-aos-easing="ease"
                data-aos-duration="1900"
              >
                React
              </div>
              <div
                className={styles.skill}
                data-aos="zoom-out-up"
                data-aos-easing="ease"
                data-aos-duration="2000"
              >
                SASS
              </div>
              <div
                className={styles.skill}
                data-aos="zoom-out-up"
                data-aos-easing="ease"
                data-aos-duration="2100"
              >
                GIT
              </div>
              <div
                className={styles.skill}
                data-aos="zoom-out-up"
                data-aos-easing="ease"
                data-aos-duration="2200"
              >
                Github
              </div>
              <div
                className={styles.skill}
                data-aos="zoom-out-up"
                data-aos-easing="ease"
                data-aos-duration="2300"
              >
                NodeJS
              </div>
              <div
                className={styles.skill}
                data-aos="zoom-out-up"
                data-aos-easing="ease"
                data-aos-duration="2400"
              >
                NPM
              </div>
              <div
                className={styles.skill}
                data-aos="zoom-out-up"
                data-aos-easing="ease"
                data-aos-duration="2500"
              >
                Express
              </div>
              <div
                className={styles.skill}
                data-aos="zoom-out-up"
                data-aos-easing="ease"
                data-aos-duration="2600"
              >
                Terminal
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
