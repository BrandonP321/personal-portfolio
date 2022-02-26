import { faEnvelope, faPaperPlane } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGit, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/pro-solid-svg-icons";
import {} from "@fortawesome/pro-regular-svg-icons"
import React, { ReactElement } from 'react'
import styles from "./MainFooter.module.scss";
import loc from "../../data/localization/Footer.json";
import Button from '../Button/Button';
import OutlinedSectionHeading from '../OutlinedSectionHeading/OutlinedSectionHeading';
import { socials } from '../../data/socials';
import FloatingBtn from '../FloatingBtn/FloatingBtn';

interface Props {
    
}

export default function MainFooter(props: Props): ReactElement {
    return (
        <footer className={styles.mainFooter}>
            <div className={styles.topSpacer}/>
            <div className={styles.bottomWrapper}>
                <div className={styles.contentWrapper}>
                    <div className={styles.contactBlock}>
                        <div className={styles.content}>
                            <OutlinedSectionHeading
                                heading={"CONTACT"}
                                alignment={"right"}
                                className={styles.bgHeading}
                            />
                            <h2 className={styles.heading}>{loc.contactHeading}</h2>
                            <p className={styles.blurb}>{loc.contactBlurb}</p>
                            <Button animate>Get In Touch</Button>
                        </div>
                    </div>
                    <div className={styles.bottomContent}>
                        <div className={styles.linksWrapper}>
                            {socials.map((s, i) => {
                                return (
                                    <FloatingBtn
                                        key={i}
                                        url={s.url}
                                        className={styles.link}
                                        icon={s.icon}
                                    />
                                )
                            })}
                        </div>
                        <div className={styles.divider}/>
                        <p className={styles.copyright}>{loc.copyright}</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
