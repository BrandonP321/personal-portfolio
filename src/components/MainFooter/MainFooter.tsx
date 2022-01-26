import { faEnvelope, faPaperPlane } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGit, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/pro-solid-svg-icons";
import {} from "@fortawesome/pro-regular-svg-icons"
import React, { ReactElement } from 'react'
import styles from "./MainFooter.module.scss";

interface Props {
    
}

export default function MainFooter(props: Props): ReactElement {
    return (
        <footer className={styles.mainFooter}>
            <div className={styles.leftContent}>
                <p className={styles.socialText}>find me on:</p>
                <a href={"https://github.com/BrandonP321"} target={"_blank"} rel={"noreferrer"} className={styles.socialIconWrapper}>
                    <FontAwesomeIcon icon={faGithub} className={styles.socialIcon}/>
                </a>
                <a href={"https://www.linkedin.com/in/brandon-phillips-dev/"} target={"_blank"} rel={"noreferrer"} className={styles.socialIconWrapper}>
                    <FontAwesomeIcon icon={faLinkedinIn} className={styles.socialIcon}/>
                </a>
                <a href={"mailto:brandon.phillips@bphillips.dev"} className={styles.socialIconWrapper}>
                    <FontAwesomeIcon icon={faEnvelope} className={styles.socialIcon}/>
                </a>
            </div>
            <p className={styles.date}>15:56 24/11/2021</p>
        </footer>
    )
}
