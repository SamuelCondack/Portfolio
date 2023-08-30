import styles from './Header.module.css'
import menu from '../../images/ham-menu.svg'
import closeMenu from '../../images/ham-menu-close.svg'

function toggleDisplay(){
    let open = document.getElementById("openMenu")
    let close = document.getElementById("closeMenu")
    let mobile = document.getElementById("mobileMenu")
    if(open.style.display == "none"){
        open.style.display = "flex"
        close.style.display = "none"
        mobile.style.display = "none"
    } else if(close.style.display == "none"){
        close.style.display = "flex"
        open.style.display = "none"
        mobile.style.display = "flex"
    }
}

export default function Header(){
    return(
        <header>
         <a href="#" className={styles.iconLink}>
             <div className={styles.icon}>
             </div>
         </a>
         <div onClick={toggleDisplay}className={styles.menu}>
            <img id='openMenu' src={menu} alt="openMenu" />
            <img style={{display: "none"}} id='closeMenu' src={closeMenu} alt="closeMenu" />
         </div>
         <ul id='mobileMenu' className={styles.mobileMenu} >
            <li><a href="#" className={styles.menuLinks}>Home</a></li>
            <li><a href="#" className={styles.menuLinks}>About</a></li>
            <li><a href="#" className={styles.menuLinks}>Projects</a></li>
            <li><a href="#" className={styles.menuLinks}>Contact</a></li>
        </ul>
        <ul className={styles.headerUl}>
            <li><a href="#" className={styles.headerLinks}>Home</a></li>
            <li><a href="#" className={styles.headerLinks}>About</a></li>
            <li><a href="#" className={styles.headerLinks}>Projects</a></li>
            <li><a href="#" className={styles.headerLinks}>Contact</a></li>
      </ul>
    </header>
    )
}