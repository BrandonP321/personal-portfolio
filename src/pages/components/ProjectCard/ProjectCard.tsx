import classNames from 'classnames';
import React, { ReactElement } from 'react'
import { IProject } from '../../../data/projects';
import styles from "./ProjectCard.module.scss";

export interface ProjectCardProps extends IProject {
    // name: string;
    // commits: string;
    // description: string;
    // siteUrl: string;
    // repoUrl: string;
    hideBlurb?: boolean;
    className?: string;
    showGlow?: boolean;
    style?: React.CSSProperties
    onClick?: () => void;
    onTouchStart?: React.TouchEventHandler;
    onTouchEnd?: React.TouchEventHandler;
}

export default function ProjectCard(props: ProjectCardProps): ReactElement {
    const {
        name, commits, descShort, siteUrl, repoUrl, className, style, hideBlurb, showGlow, onClick, onTouchEnd, onTouchStart
    } = props;

    return (
        <div 
            className={classNames(styles.projectCard, {[styles.glow]: showGlow}, className)} 
            style={style} 
            onClick={onClick}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            <div className={styles.projectInfo}>
                <p className={styles.projectName}>{name}</p>
                <p className={styles.commits}>{`${commits} commits`}</p>
            </div>
            <div className={styles.content}>
                <div className={classNames(styles.description, {[styles.hidden]: hideBlurb})}>{descShort}</div>
                <a href={siteUrl} className={styles.projectLink}>see the project</a>
                {/* <a href={repoUrl} className={styles.repoLink}>see the repo</a> */}
            </div>
        </div>
    )
}
