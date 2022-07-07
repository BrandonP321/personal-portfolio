import { faBars } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import { socials } from '../../data/socials';
import { WindowUtils } from '../../utils/WindowUtils';
import FloatingBtn from '../FloatingBtn/FloatingBtn';
import styles from "./MainHeader.module.scss";

const navLinks = [
    { title: "Projects", url: "#projects" },
    { title: "Skills", url: "#skills" },
    { title: "Resume", url: "/assets/resume.pdf" },
    { title: "Contact", url: "#contact" }
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

    const toggleScrollLock = useCallback(() => {
        if (showMobileMenu) {
            // menu is being hidden
            WindowUtils.UnlockScroll();
        } else {
            // menu is being shown
            WindowUtils.LockScroll();
        }
    }, [showMobileMenu])

    const handleMobileMenuIconClick = () => {
        toggleScrollLock();
        setShowMobileMenu(!showMobileMenu);
    }

    const handleMobileNavOptionClick = () => {
        toggleScrollLock();
        setShowMobileMenu(false);
    }

    return (
        <>
            <header className={classNames(styles.mainHeader, { [styles.showBg]: showBg, [styles.hide]: showMobileMenu })}>
                <div className={styles.flexWrapper}>
                    <div className={styles.leftContent}>
                        <a href={"/"} className={styles.brand}>
                            B<span>P</span>.
                        </a>
                        <nav className={styles.navWrapper}>
                            {navLinks.map((link, i) => {
                                return (
                                    <a href={link.url} target={/#/.test(link.url) ? "_self" : "_blank"} rel="noreferrer" key={i} className={styles.navLink}>{link.title}</a>
                                )
                            })}
                        </nav>
                    </div>
                    <div className={styles.rightContent}>
                        {socials.map((link, i) => {
                            return (
                                <FloatingBtn
                                    className={styles.socialLink}
                                    url={link.url}
                                    icon={link.icon}
                                    key={i}
                                    title={link.title}
                                />
                            )
                        })}

                        <FontAwesomeIcon className={styles.menuIcon} onClick={handleMobileMenuIconClick} icon={faBars} />
                    </div>
                </div>

            </header>
            <div className={classNames(styles.pageOverlay, { [styles.show]: showMobileMenu })} onClick={handleMobileMenuIconClick} />
            <div className={classNames(styles.mobileNav, { [styles.show]: showMobileMenu })}>
                <div className={styles.navLinks}>
                    {navLinks.map((link, i) => {
                        return (
                            <a href={link.url} key={i} className={styles.mobileNavLink} onClick={handleMobileNavOptionClick}>{link.title}</a>
                        )
                    })}
                </div>
                <div className={styles.socials}>
                    {socials.map((link, i) => {
                        return (
                            <FloatingBtn
                                className={styles.socialLink}
                                url={link.url}
                                icon={link.icon}
                                key={i}
                                title={link.title}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}
