import React, { ReactElement, useRef, useState } from 'react';
import ProjectCard, { ProjectCardProps } from '../ProjectCard/ProjectCard';
import styles from "./ProjectCarousel.module.scss";

interface Props {
    projects: ProjectCardProps[];
}

export default function ProjectCarousel(props: Props): ReactElement {
    const { projects } = props;

    const lastTouchStart = useRef({ x: 0, y: 0 })
    const [focusedCard, setFocusedCard] = useState(0);
    // how much more raised up each successive card should be
    const topOffsetPerCard = 50;
    const scaleOffsetPerCard = .05;
    const opacityOffsetPerCard = .4;

    const handleCarouselScroll: React.WheelEventHandler = (e) => {
        if (e.deltaY < 0 && focusedCard < (projects.length - 1)) {
            setFocusedCard(focusedCard + 1);
        } else if (e.deltaY > 0 && focusedCard > 0) {
            setFocusedCard(focusedCard - 1);
        }
    }

    const handleCardClick = (cardIndex: number) => {
        if (cardIndex !== focusedCard) {
            setFocusedCard(cardIndex);
        }
    }

    const handleTouchStart: React.TouchEventHandler = (e) => {
        lastTouchStart.current = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        }
    }

    const handleTouchEnd: React.TouchEventHandler = (e) => {
        const x = e.nativeEvent.changedTouches[0].clientX;
        const y = e.nativeEvent.changedTouches[0].clientY;

        const touchPathSlope = (lastTouchStart.current.y - y) / (lastTouchStart.current.x - x);

        if (touchPathSlope >= 1 || touchPathSlope <= -1) {
            if (y > lastTouchStart.current.y && focusedCard < projects.length - 1) {
                setFocusedCard(focusedCard + 1);
            } else if (y < lastTouchStart.current.y && focusedCard > 0) {
                setFocusedCard(focusedCard - 1)
            }
        }
    }

    return (
        <div className={styles.projectCarousel} onWheel={handleCarouselScroll}>
            {projects.map((p, i) => {
                const topOffset = (i - focusedCard) * topOffsetPerCard * -1;
                const cardScale = 1 - ((i - focusedCard) * scaleOffsetPerCard);
                const cardHeight = i < focusedCard - 2 ? "0" : "auto";
                const cardOverflow = i < focusedCard - 2 ? "hidden": "visible";
                let cardOpacity = 1 - ((i - focusedCard) * opacityOffsetPerCard);

                if (cardOpacity > 1) {
                    cardOpacity = 0;
                }

                return (
                    <ProjectCard 
                        {...p} 
                        key={i}
                        hideBlurb={i !== focusedCard}
                        showGlow={i === focusedCard}
                        onClick={() => handleCardClick(i)}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        style={{ 
                            top: topOffset, 
                            transform: `scale(${cardScale})`,
                            opacity: cardOpacity,
                            zIndex: projects.length - i,
                            height: cardHeight,
                            overflow: cardOverflow,
                            pointerEvents: i >= focusedCard && i <= focusedCard + 2 ? "all" : "none"
                        }}
                        className={styles.carouselProject}
                    />
                )
            })}
        </div>
    )
}
