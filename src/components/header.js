import React from "react"
import useDarkMode from "use-dark-mode"
import DarkModeToggle from "react-dark-mode-toggle"
import styles from "./header.module.css"

const Header = () => {
    const darkMode = useDarkMode(false)
    return (
        <header id="top" className={styles.header}>
        <nav>
            <a href="/" className={styles.brand}>Francis Ade</a>
            <div className={styles.navMenu}>                
                <a
                    href="https://twitter.com/fran6_ca"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Twitter
                </a>
                <a
                    href="https://franciscade.wordpress.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Blog
                </a>
                <a
                    href="https://github.com/francis04j"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                <a href="/play/contact">
                    Contact
                </a>
                <DarkModeToggle
        onChange={darkMode.toggle}
        checked={darkMode.value}
        size={50}
        className="toggle"
      />
            </div>
            
        </nav>   
    </header>
    )
};
export default Header;