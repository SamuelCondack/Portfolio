import styles from './Header.module.css'
import menu from '../../images/ham-menu.svg'
import closeMenu from '../../images/ham-menu-close.svg'
import { scrollAbout, scrollHome, scrollHomeIcon } from '../../hooks/scrollClick'
import toggleDisplay from '../../hooks/toggleDisplay'

export default function Header(){
    return(
        <header>
         <a onClick={scrollHomeIcon} className={styles.iconLink} >
             <div className={styles.icon}>
                <img src="" alt="SAM Icon" style={{display: "none"}}/>
             </div>
         </a>
         <div onClick={toggleDisplay}className={styles.menu}>
            <img id='openMenu' src={menu} alt="openMenu" />
            <img style={{display: "none"}} id='closeMenu' src={closeMenu} alt="closeMenu" />
         </div>
         <ul id='mobileMenu' className={styles.mobileMenu} >
            <li><a onClick={scrollHome} className={styles.menuLinks}>Home</a></li>
            <li><a onClick={scrollAbout} className={styles.menuLinks}>About</a></li>
            <li><a className={styles.menuLinks}>Projects</a></li>
            <li><a className={styles.menuLinks}>Contact</a></li>
        </ul>
        <ul className={styles.headerUl}>
            <li><a onClick={scrollHome} className={styles.headerLinks}>Home</a></li>
            <li><a className={styles.headerLinks} onClick={scrollAbout}>About</a></li>
            <li><a  className={styles.headerLinks}>Projects</a></li>
            <li><a  className={styles.headerLinks}>Contact</a></li>
      </ul>
    </header>
    )
}