import styles from './Projects.module.css'
import Project1 from '../../Images/Project1.png'

export default function Projects(){
    return(
        <section id='projects' className={styles.projects}>
            <div className={styles.main}>
                <h2 className={styles.heading}>
                    <span className={styles.headingTitle}>Projects</span>
                    <span className={styles.headingDescription}>Here you will find some of the projects that I created</span>
                </h2>
                <div className={styles.projectsContent}>
                    <div className={styles.projectsRow}>
                        <div className={styles.rowImgContainer}>
                            <img className={styles.projectsRowImg} src={Project1} alt="Project image" loading='lazy'/>
                        </div>
                        <div className={styles.projectsRowContent}>
                            <h3 className={styles.projectsRowContentTitle}>Portfolio</h3>
                            <p className={styles.projectsRowContentDescription}>Portfolio is just an example. A future project will be listed here.</p>
                            <div className={styles.skills}>
                                <div className={styles.skill}>HTML</div>
                                <div className={styles.skill}>CSS</div>
                                <div className={styles.skill}>JavaScript</div>
                                <div className={styles.skill}>React</div>
                                <div className={styles.skill}>GIT</div>
                                <div className={styles.skill}>Github</div>
                            </div>
                            <a className={styles.projectsButton} href="https://samuelcondack.netlify.app/" target='_blank'>Live Link</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}