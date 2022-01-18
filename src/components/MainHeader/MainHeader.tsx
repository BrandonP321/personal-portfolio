import classNames from 'classnames';
import React, { ReactElement } from 'react'
import styles from "./MainHeader.module.scss";

type TPages = "home" | "projects";

const headerTabs: { name: string; url: string; page: TPages }[] = [
    { name: "_hello", url: "/", page: "home" },
    { name: "_projects", url: "/projects", page: "projects" },
]

interface Props {
    selectedTab: "home" | "projects"
}

export default function MainHeader(props: Props): ReactElement {
    const { selectedTab } = props;

    return (
        <header className={styles.mainHeader}>
            <div className={styles.windowHeader}>
                <div className={styles.windowBtns}>
                    <div className={classNames(styles.btn, styles.red)}/>
                    <div className={classNames(styles.btn, styles.yellow)}/>
                    <div className={classNames(styles.btn, styles.green)}/>
                </div>
                brandon_phillips
                <div className={styles.filler}/>
            </div>
            <div className={styles.tabsWrapper}>
                {headerTabs.map((tab, i) => {
                    return (
                        <a 
                            key={i} 
                            className={classNames(styles.tab, {[styles.selected]: selectedTab === tab.page})} 
                            href={tab.url}
                        >
                            {tab.name}
                        </a>
                    )
                })}
                <div className={styles.fillerTab}/>
            </div>
            <div className={styles.bottomBorder}/>
        </header>
    )
}
