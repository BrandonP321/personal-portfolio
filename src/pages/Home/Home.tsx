import React, { ReactElement } from 'react';
import MainFooter from '../../components/MainFooter/MainFooter';
import MainHeader from '../../components/MainHeader/MainHeader';
import { projects } from '../../data/projects';
import ProjectCard, { ProjectCardProps } from '../components/ProjectCard/ProjectCard';
import ProjectCarousel from '../components/ProjectCarousel/ProjectCarousel';
import styles from "./Home.module.scss";

interface Props {
    
}

// const mockProjects: ProjectCardProps[] = [
//     { name: "Project 1", commits: "592", repoUrl: "fake", siteUrl: "fake", description: "Integrated 4 different APIs over 200 different components, React, Mobx, Firebase, Full storybook setup" },
//     { name: "Project 2", commits: "592", repoUrl: "fake", siteUrl: "fake", description: "Integrated 4 different APIs over 200 different components, React, Mobx, Firebase, Full storybook setup" },
//     { name: "Project 3", commits: "592", repoUrl: "fake", siteUrl: "fake", description: "Integrated 4 different APIs over 200 different components, React, Mobx, Firebase, Full storybook setup" },
//     { name: "Project 4", commits: "592", repoUrl: "fake", siteUrl: "fake", description: "Integrated 4 different APIs over 200 different components, React, Mobx, Firebase, Full storybook setup" },
// ]

export default function Home(props: Props): ReactElement {
    return (
        <div className={styles.home}>
            <MainHeader selectedTab={"home"}/>

            <div className={styles.homeContent}>
                <div className={styles.textContent}>
                    <p className={styles.smallTitle}>Hello!  I am</p>
                    <h1 className={styles.title}>Brandon Phillips</h1>
                    <p className={styles.jobTitle}>Full Stack Web Developer</p>
                    <p className={styles.blurb}>
                        Results-oriented web developer with a passion for building impactful web applications with the latest web technologies.
                    </p>
                </div>
                <div className={styles.projects}>
                    <ProjectCarousel projects={projects}/>
                </div>
            </div>

            <MainFooter/>
        </div>
    )
}
