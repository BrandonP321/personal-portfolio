import classNames from 'classnames';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import OutlinedSectionHeading from '../../../../components/OutlinedSectionHeading/OutlinedSectionHeading';
import styles from "./Skills.module.scss";
import { SkillGroups, TSkillGroup } from '../../../../data/skills';

type Props = {};

export default function Skills(props: Props) {
    const [selectedSkill, setSelectedSkillState] = useState(0);
    const selectedSkillRef = useRef(0);
    const setSelectedSkill = (index: number) => {
        setSelectedSkillState(index);
        selectedSkillRef.current = index;
    }
    const [currentSlideHeight, setCurrentSlideHeight] = useState(0);
    // number of skill images that have been loaded in the first slide of the carousel
    const loadedSkillImagesCount = useRef(0);

    const skillSlideRefs = useRef<(HTMLDivElement | null)[]>(Array(SkillGroups.length).fill(null));

    /* Updates bottom padding of section based on the current height of the skills carousel */
    const updateSectionPadding = useCallback(() => {
        const currentSlide = skillSlideRefs.current[selectedSkillRef.current];
        currentSlide && setCurrentSlideHeight(currentSlide.clientHeight);
    }, []);

    const handleSkillImageLoad = () => {
        loadedSkillImagesCount.current++;

        if (loadedSkillImagesCount.current >= SkillGroups[0].skillImages.length) {
            updateSectionPadding();
        }
    }

    useEffect(() => {
        window.addEventListener("resize", updateSectionPadding);

        return () => {
            window.removeEventListener("resize", updateSectionPadding);
        }
    }, [updateSectionPadding])

    useEffect(() => {
        updateSectionPadding();
    }, [selectedSkill, updateSectionPadding])

    return (
        <div className={styles.skills}>

            <div className={classNames(styles.sectionContent, styles.top)}>
                <OutlinedSectionHeading
                    heading={"SKILLS"}
                    className={styles.sectionHeading}
                    alignment={"right"}
                />

            </div>
            <div className={styles.skillsCarouselOuterContainer}>

                <div className={styles.skillGroupSelector}>
                    {SkillGroups.map((group, i) => {
                        const isSelected = selectedSkill === i;

                        return (
                            <button
                                className={classNames(styles.option, { [styles.selected]: isSelected })}
                                onClick={() => setSelectedSkill(i)}
                                key={i}
                            >{group.name}</button>
                        )
                    })}

                </div>
                <div className={classNames(styles.sectionContent, styles.bottom)} style={{ paddingBottom: `${currentSlideHeight}px` }}>
                    <div className={styles.skillsCarouselWrapper} style={{ transform: `translateX(${selectedSkill * -100}%)` }}>
                        {SkillGroups.map((group, i) => {
                            return (
                                <div
                                    className={styles.skillImages}
                                    style={{ left: `${i * 100}%`, opacity: i === selectedSkill ? 1 : 0 }}
                                    ref={ref => skillSlideRefs.current[i] = ref}
                                    key={i}
                                >
                                    {group.skillImages?.map((skill, j) => {
                                        return <SkillImg {...skill} key={j} onImgLoad={handleSkillImageLoad}/>
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

const SkillImg = (props: TSkillGroup["skillImages"][number] & { onImgLoad: () => void }) => {
    const [mousePosition, setMousePosition] = useState<{ top: Number; left: number } | null>(null);

    const handleMouseOverMove = (e: React.MouseEvent<HTMLImageElement>) => {
        requestAnimationFrame(() => {
            setMousePosition({ top: e.nativeEvent.offsetY, left: e.nativeEvent.offsetX });
        })
    }

    const handleMouseLeave = () => {
        requestAnimationFrame(() => setMousePosition(null))
    }

    return (
        <div className={styles.imgWrapper} style={{ zIndex: !!mousePosition ? 10 : 1 }}>
            <img
                src={props.img}
                className={styles.img}
                onMouseMove={handleMouseOverMove}
                onMouseOut={handleMouseLeave}
                /* On load, call 'onImgLoad' prop if skill is in first slide of skills carousel */
                onLoad={() => SkillGroups[0].skillImages.findIndex(img => img.name === props.name) && props.onImgLoad()}
            />
            <div
                className={styles.imgTitleBox}
                style={{ top: `${mousePosition?.top}px`, left: `${mousePosition?.left}px`, opacity: !!mousePosition ? 1 : 0 }}
            >{props.name}</div>
        </div>
    )
}

const FloatingSkillBar: React.FC = () => {
    return (
        <div className={styles.floatingBar}>
            {/* {skillLogos.map((logo, i) => {
                return (
                    <img
                        key={i}
                        className={styles.skillLogo}
                        src={logo}
                        alt={""}
                    />
                )
            })} */}
        </div>
    )
}