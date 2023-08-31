import toggleDisplay from "./toggleDisplay"

function scrollHomeIcon(){
    const home = document.getElementById("home")
    home.scrollIntoView({behavior: "smooth"})
}

function scrollHome(){
    const home = document.getElementById("home")
    toggleDisplay()
    home.scrollIntoView({behavior: "smooth"})
}

function scrollAbout(){
    const about = document.getElementById("about")
    toggleDisplay()
    about.scrollIntoView({behavior: "smooth"})
}

export {scrollAbout, scrollHome, scrollHomeIcon}