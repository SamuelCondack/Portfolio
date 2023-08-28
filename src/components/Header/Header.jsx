import styles from './Header.module.css'


export default function Header(){
    return(
        <header>
         <a href="#" className={styles.iconA}>
             <div className={styles.icon}>
             </div>
         </a>
        <ul className={styles.headerLinks}>
            <li>
                <a href="#" className={styles.links + styles.homeIconLink}>
                    <div className={styles.homeIcon}></div>
                </a>
            </li>
            <li><a href="#" className={styles.links}>About</a></li>
            <li><a href="#" className={styles.links}>Projects</a></li>
            <li><a href="#" className={styles.links}>Contact</a></li>
      </ul>
    </header>
    )
}