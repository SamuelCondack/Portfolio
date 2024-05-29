import styles from "./Projects.module.css";
import Project1 from "../../Images/Project1.png";
import Project2 from "../../Images/Project2.png";
import Project3 from "../../Images/Project3.png";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.main}>
        <h2 className={styles.heading}>
          <span className={styles.headingTitle}>Projects</span>
          <span className={styles.headingDescription}>
            Here you will find some of the projects that I created
          </span>
        </h2>
        <div className={styles.projectsContent}>
          <div className={styles.projectsRow}>
            <div className={styles.rowImgContainer}>
              <img
                className={styles.projectsRowImg}
                src={Project3}
                alt="Project image"
                loading="lazy"
              />
            </div>
            <div className={styles.projectsRowContent}>
              <h3 className={styles.projectsRowContentTitle}>My Wallet</h3>
              <p className={styles.projectsRowContentDescription}>
                Created when i was studying finance and investments. I realized i needed an app to take control of my outcomes, then i did it. You can control all your outcomes having an overview of the months and the total of your spendings, also knowing which payment method you're using the most.
              </p>
              <div className={styles.skills}>
                <div className={styles.skill}>HTML</div>
                <div className={styles.skill}>CSS</div>
                <div className={styles.skill}>SASS</div>
                <div className={styles.skill}>JavaScript</div>
                <div className={styles.skill}>React</div>
                <div className={styles.skill}>GIT</div>
                <div className={styles.skill}>Github</div>
                <div className={styles.skill}>Firebase</div>
              </div>
              <div className={styles.buttons} data-aos="flip-up"
        data-aos-easing="ease"
        data-aos-duration="1600">
                <a
                  className={styles.projectsButton}
                  href="https://itsmywallet.netlify.app/"
                  target="_blank"
                >
                  Live Link
                </a>
                <a
                  className={styles.gitHubButton}
                  href="https://github.com/SamuelCondack/My-Wallet"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className={styles.projectsRow}>
            <div className={styles.rowImgContainer}>
              <img
                className={styles.projectsRowImg}
                src={Project2}
                alt="Project image"
                loading="lazy"
              />
            </div>
            <div className={styles.projectsRowContent}>
              <h3 className={styles.projectsRowContentTitle}>LogIn & SignUp</h3>
              <p className={styles.projectsRowContentDescription}>
                A page with the system to create and log in accounts. It has all
                the password and e-mail verification done with REGEX
              </p>
              <div className={styles.skills}>
                <div className={styles.skill}>HTML</div>
                <div className={styles.skill}>CSS</div>
                <div className={styles.skill}>JavaScript</div>
                <div className={styles.skill}>GIT</div>
                <div className={styles.skill}>Github</div>
              </div>
              <div className={styles.buttons} data-aos="flip-up"
        data-aos-easing="ease"
        data-aos-duration="1600">
                <a
                  className={styles.projectsButton}
                  href="https://sam-login-signup.netlify.app/"
                  target="_blank"
                >
                  Live Link
                </a>
                <a
                  className={styles.gitHubButton}
                  href="https://github.com/SamuelCondack/Login-Signup"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className={styles.projectsRow}>
            <div className={styles.rowImgContainer}>
              <img
                className={styles.projectsRowImg}
                src={Project1}
                alt="Project image"
                loading="lazy"
              />
            </div>
            <div className={styles.projectsRowContent}>
              <h3 className={styles.projectsRowContentTitle}>Portfolio</h3>
              <p className={styles.projectsRowContentDescription}>
                Portfolio is the page that you are looking at right now.
              </p>
              <div className={styles.skills}>
                <div className={styles.skill}>HTML</div>
                <div className={styles.skill}>CSS</div>
                <div className={styles.skill}>JavaScript</div>
                <div className={styles.skill}>React</div>
                <div className={styles.skill}>GIT</div>
                <div className={styles.skill}>Github</div>
              </div>
              <div className={styles.buttons} data-aos="flip-up"
        data-aos-easing="ease"
        data-aos-duration="1600">
                <a
                  className={styles.projectsButton}
                  href="https://samuelcondack.netlify.app/"
                  target="_blank"
                >
                  Live Link
                </a>
                <a
                  className={styles.gitHubButton}
                  href="https://github.com/SamuelCondack/Portfolio"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
