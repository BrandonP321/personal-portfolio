import classNames from 'classnames';
import React, { useState } from 'react';
import OutlinedSectionHeading from '../../../../components/OutlinedSectionHeading/OutlinedSectionHeading';
import styles from "./Skills.module.scss";
import gitLogo from "../../../../media/img/skills/github_white_logo.png";
import nodeLogo from "../../../../media/img/skills/node_white_logo.png";
import reactLogo from "../../../../media/img/skills/react_logo.png";
import typescriptLogo from "../../../../media/img/skills/typescript_name_logo.png";
import mongoLogo from "../../../../media/img/skills/mongodb_logo.png";
import Modal from '../../../../components/Modal/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/pro-solid-svg-icons';

type Props = {};

const skills = [
    { icon: faEdit, name: "UI/UX Design", brief: "Best combination of outstanding user experience and visual aesthetics for your website or mobile app design", longTitle: "Why Hire Me For Your Next Project?", longBrief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat amet, in semper sed. Enim, blandit vestibulum mi velit sed nulla mattis volutpat semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { icon: faEdit, name: "UI/UX Design", brief: "Best combination of outstanding user experience and visual aesthetics for your website or mobile app design", longTitle: "THIS IS A LONG TITLE ABOUT A SKILL", longBrief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat amet, in semper sed. Enim, blandit vestibulum mi velit sed nulla mattis volutpat semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { icon: faEdit, name: "UI/UX Design", brief: "Best combination of outstanding user experience and visual aesthetics for your website or mobile app design", longTitle: "THIS IS A LONG TITLE ABOUT A SKILL", longBrief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat amet, in semper sed. Enim, blandit vestibulum mi velit sed nulla mattis volutpat semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { icon: faEdit, name: "UI/UX Design", brief: "Best combination of outstanding user experience and visual aesthetics for your website or mobile app design", longTitle: "THIS IS A LONG TITLE ABOUT A SKILL", longBrief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat amet, in semper sed. Enim, blandit vestibulum mi velit sed nulla mattis volutpat semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
]

const skillLogos = [
    reactLogo, 
    nodeLogo,
    typescriptLogo, 
    gitLogo,
    mongoLogo,
]

export default function Skills(props: Props) {
    const [selectedSkill, setSelectedSkill] = useState<number>(window.innerWidth > 870 ? 0 : -1);
    const [visitedSkills, setVisitedSkills] = useState(Array(skills.length).fill(false));
    const [showModal, setShowModal] = useState(false);

    const handleSkillClick = (i: number) => {
        setSelectedSkill(i);
        setShowModal(true);
        const newVisitedSkills = [...visitedSkills];
        newVisitedSkills[i] = true;
        setVisitedSkills(newVisitedSkills);
    }

    return (
        <>
            <div className={styles.skills}>

                <div className={styles.sectionContent}>
                    <OutlinedSectionHeading
                        heading={"SKILLS"}
                        className={styles.sectionHeading}
                        alignment={"right"}
                        />

                    <FloatingSkillBar/>

                    <div className={styles.flexWrapper}>
                        <div className={styles.blocksWrapper}>
                            {skills.map((s, i) => {
                                return (
                                    <div className={classNames(styles.blockWrapper, { [styles.selected]: selectedSkill === i })} onClick={() => handleSkillClick(i)} key={i}>
                                        <div className={styles.blockAspectRatioWrapper} />
                                        <div className={styles.blockContent}>
                                            <div className={styles.iconWrapper}>
                                                {!visitedSkills[i] &&
                                                    <div className={styles.sheen}/>
                                                }
                                                <FontAwesomeIcon icon={s.icon} className={styles.icon}/>
                                            </div>
                                            <div className={styles.textContent}>
                                                <h3>{s.name}</h3>
                                                <p>{s.brief}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={styles.textWrapper}>
                            <h3 className={styles.skillHeading}>{skills[selectedSkill]?.longTitle}</h3>
                            <p className={styles.skillBlurb}>{skills[selectedSkill]?.longBrief}</p>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={showModal} className={styles.skillModal} hideModal={() => setShowModal(false)}>
                <div className={styles.modalContent}>
                    <div className={styles.modalBlockWrapper}>
                        <div className={styles.iconWrapper}>
                            <FontAwesomeIcon icon={faEdit} className={styles.icon}/>
                        </div>
                        <h3 className={styles.heading}>{skills[selectedSkill]?.longTitle}</h3>
                        <p className={styles.blurb}>{skills[selectedSkill]?.longBrief}</p>
                    </div>
                </div>
            </Modal>
        </>
    );
}

const FloatingSkillBar: React.FC = () => {
    return (
        <div className={styles.floatingBar}>
            {skillLogos.map((logo, i) => {
                return (
                    <img 
                        key={i}
                        className={styles.skillLogo} 
                        src={logo}
                        alt={""}
                    />
                )
            })}
        </div>
    )
}