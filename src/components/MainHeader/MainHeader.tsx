import { faGit, faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { ReactElement, useEffect, useState } from 'react'
import { WindowUtils } from '../../utils/WindowUtils';
import Button from '../Button/Button';
import FloatingBtn from '../FloatingBtn/FloatingBtn';
import styles from "./MainHeader.module.scss";

const navLinks = [
    { title: "Portfolio", url: "#portfolio" },
    { title: "Skills", url: "#skills" },
    { title: "Resume", url: "#resume" },
    { title: "Contact", url: "#contact" }
]

const socialLinks = [
    { icon: faGithub, url: "https://github.com/BrandonP321" },
    { icon: faLinkedinIn, url: "https://www.linkedin.com/in/brandon-phillips-dev/" },
    { icon: faEnvelope, url: "mailto:brandon.phillips@bphillips.dev" },
]

interface Props {
    
}

export default function MainHeader(props: Props): ReactElement {
    const offsetToShowBg = 100;

    const [showBg, setShowBg] = useState(window.scrollY >= offsetToShowBg);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        document.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => document.removeEventListener("scroll", handleScroll);
    }, [])

    const handleScroll = () => {
        requestAnimationFrame(() => {
            if (window.scrollY >= offsetToShowBg) {
                setShowBg(true);
            } else {
                setShowBg(false);
            }
        })
    }

    const handleMobileMenuIconClick = () => {
        if (showMobileMenu) {
            // menu is being hidden
            WindowUtils.UnlockScroll();
        } else {
            // menu is being shown
            WindowUtils.LockScroll();
        }

        setShowMobileMenu(!showMobileMenu);
    }

    return (
        <>
            <header className={classNames(styles.mainHeader, {[styles.showBg]: showBg})}>
                <div className={styles.flexWrapper}>
                    <div className={styles.leftContent}>
                        <a href={"/"} className={styles.brand}>
                            B<span>P</span>.
                        </a>
                        <nav className={styles.navWrapper}>
                            {navLinks.map((link, i) => {
                                return (
                                    <a href={link.url} key={i}>{link.title}</a>
                                )
                            })}
                        </nav>
                    </div>
                    <div className={styles.rightContent}>
                        {socialLinks.map((link, i) => {
                            return (
                                <FloatingBtn 
                                    className={styles.socialLink} 
                                    url={link.url} 
                                    icon={link.icon}
                                    key={i}
                                />
                            )
                        })}

                        <FontAwesomeIcon className={styles.menuIcon} onClick={handleMobileMenuIconClick} icon={faBars}/>
                    </div>
                </div>

            </header>
            <div className={classNames(styles.pageOverlay, {[styles.show]: showMobileMenu})} onClick={handleMobileMenuIconClick}/>
            <div className={classNames(styles.mobileNav, {[styles.show]: showMobileMenu})}>

            </div>
        </>
    )
}
