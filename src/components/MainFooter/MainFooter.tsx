import { faPaperPlane } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react'
import styles from "./MainFooter.module.scss";


interface Props {
    
}

export default function MainFooter(props: Props): ReactElement {
    return (
        <footer className={styles.mainFooter}>
            <div className={styles.leftContent}>
                <p className={styles.socialText}>find me in:</p>
                <div className={styles.socialIconWrapper}>
                    <FontAwesomeIcon icon={faPaperPlane} className={styles.socialIcon}/>
                </div>
                <div className={styles.socialIconWrapper}>
                    <FontAwesomeIcon icon={faPaperPlane} className={styles.socialIcon}/>
                </div>
                <div className={styles.socialIconWrapper}>
                    <FontAwesomeIcon icon={faPaperPlane} className={styles.socialIcon}/>
                </div>
            </div>
            <p className={styles.date}>15:56 24/11/2021</p>
        </footer>
    )
}
