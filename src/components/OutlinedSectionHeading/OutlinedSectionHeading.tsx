import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import styles from "./OutlinedSectionHeading.module.scss";

type Props = {
  heading: string;
  alignment?: "left" | "right";
  className?: string;
};

export default function OutlinedSectionHeading(props: Props) {
  const [transform, setTransform] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("scroll", parallaxHeading);

    return () => document.removeEventListener("scroll", parallaxHeading);
  }, [])

  const parallaxHeading = () => {
    requestAnimationFrame(() => {
      if (wrapperRef.current) {
        const distFromTop = wrapperRef.current.getBoundingClientRect().top;

        // amount of pixels to move per px scrolled
        const parallaxFactor = .1;

        setTransform(`translateY(${distFromTop * parallaxFactor}px)`)
      }
    })
  }

  return (
    <div className={classNames(styles.wrapper, { [styles.right]: props.alignment === "right" }, props.className)} ref={wrapperRef}>
      <h2
        className={styles.heading}
        style={{ transform }}
      >{props.heading}</h2>
    </div>
  );
}
