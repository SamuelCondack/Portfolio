import styles from "./About.module.css"

export default function About() {
    return (
        <div id="about" className={styles.aboutContainer}>
            <div className={styles.main}>
                <h2 className={styles.aboutTitle}>About me</h2>
                <p className={styles.aboutSubtitle}>Here you can see more information about me and my current programming skills</p>
                <div className={styles.aboutContent}>
                    <div className={styles.aboutContentContainer}>
                        <h3 className={styles.aboutContentTitle}>A Little About Me</h3>
                        <div className={styles.aboutContentTexts}>
                            <p className={styles.aboutContentParagraphs}>I'm a <strong>Frontend Developer</strong> and a <strong>Software Engineering Student</strong>.I build Web Applications focused in extract and implement the best ideas. You can check some of my Projects in the next section.
                            </p>
                            <p className={styles.aboutContentParagraphs}>I am also in <a className={styles.aboutContentLinks} href="https://github.com/SamuelCondack" target="_blank"><strong>Github</strong></a> and <a className={styles.aboutContentLinks} href="https://www.linkedin.com/in/samuelcondack/" target="_blank"><strong>LinkedIn</strong></a>. You may contact me there.</p>
                            <p className={styles.aboutContentParagraphs}>I'm open to <strong>Job</strong> opportunities where i can contribute, learn and grow. If you have a good opportunity that matches my skills then don't hesitate to <strong>contact</strong> me </p>
                        </div>
                    </div>
                        <div className={styles.aboutContentSkills}>
                            <h3 className={styles.aboutContentTitle}>My Skills</h3>
                            <div className={styles.skills}>
                                <div className={styles.skill}>HTML</div>
                                <div className={styles.skill}>CSS</div>
                                <div className={styles.skill}>JavaScript</div>
                                <div className={styles.skill}>React</div>
                                <div className={styles.skill}>SASS</div>
                                <div className={styles.skill}>GIT</div>
                                <div className={styles.skill}>Github</div>
                                <div className={styles.skill}>Terminal</div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}