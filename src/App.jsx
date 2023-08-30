import styles from "./app.module.css"
import Header from "./components/Header/Header"
import arrow from "./images/arrow.gif"
import About from "./Pages/About/About"
 
function App() {
  return (
    <>
      <Header />
      <div className={styles.introduction}>
          <div className={styles.home}>
            <h1 className={styles.title}>
              HEY, I'M
              <p className={styles.nameTitle}>
                SAMUEL CONDACK
              </p>
              </h1>
            <p className={styles.subTitle}>
              A Front-end developer building web solutions<br>
              </br>Passionate about technology and the development world
            </p>
            <img style={{pointerEvents: "none"}} className={styles.arrow} src={arrow} alt="arrow down gif"/>
          </div>
      </div>
      <About />
    </>
  )
}

export default App
