import React from "react"
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Content}>
      <div className="site-footer-legal">
        <p>Copyright @ 2020, Francis Adediran</p>
        <p>
          This work is licensed under a{" "}
          <a rel="license noopener noreferrer" target="_blank" href="http://creativecommons.org/licenses/by/4.0/">
            Creative Commons Attribution 4.0 International License
          </a>
          . In other words, share generously but provide attribution.
        </p>
      </div>
      <div className="site-footer-disclaimer">
          <p>Disclaimer: opinions expressed here are my own.</p>
        </div>
      <div className={styles.social}>
        <section className={styles.first}>
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
        </section>

        
        <section className={styles.end}>          
             <a href="https://www.reactjs.org/">Written with React</a>           
            
             <a href="https://www.gatsbyjs.org/">Published with Gatsby</a>          
        </section>
      </div>
        </div>
    </footer>
  )
}
export default Footer
