import React from "react";
import styles from "./cover.module.css";
import profile from "../images/profile.png"

const homeCover = () => {
    return (
        <div className={styles.cover}>
        <div className={styles.jumbotron}>
        <img src={profile} alt="Francis Adediran" className="profile" />
            <p>Hi, I'm Francis. Welcome to my site. I author the content of this site and its blog. 
        I write blogs,create coding courses, speak at events and work as a developer. When i'm not in tech, 
        i enjoy running, travelling, watching sports and learning.</p>
            <p className="social">
                <a href="https://twitter.com/fran6_ca" title="Twitter"><i className="fa fa-twitter"></i></a>                        
                <a href="https://github.com/francis04j" title="GitHub"><i className="fa fa-github"></i></a>                        
                <a href="https://franciscade.wordpress.com/" title="Blog"><i className="fa fa-wordpress"></i></a>
                <a href="/play/index.html" title="Play"><i className="fa fa-wordpress"></i></a>
                <a href="https://stackoverflow.com/users/261138/core-pro" title="Stackoverflow"><i className="fa fa-stack-overflow"></i></a>                        
            </p>
        </div>
    </div>
    )
}

export default homeCover;