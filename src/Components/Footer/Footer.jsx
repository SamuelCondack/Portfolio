import styles from "./Footer.module.css"

let year = new Date().getFullYear()

export default function Footer(){
    return(
        <div className={styles.footerContainer}>
            <p className={styles.footerText}>&copy; Copyright {year}. Made by <a className={styles.footerLink} href="https://samuelcondack.netlify.app/" target="_blank">Samuel Condack</a></p>
        </div>
    )
}