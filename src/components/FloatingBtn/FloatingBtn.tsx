import { IconDefinition } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { ReactNode } from 'react'
import styles from "./FloatingBtn.module.scss";

type Props = {
    url: string;
    className?: string;
    icon: IconDefinition;
    title?: string;
}

/**
 * Square btn with centered icon for content and glow animation on hover
 */
export default function FloatingBtn(props: Props) {
    const { url, className, icon, title } = props;

    return (
        <a 
            className={classNames(styles.floatingBtn, className)} 
            href={url} 
            target={"_blank"} 
            rel={"noreferrer"}
            aria-label={title}
        ><FontAwesomeIcon icon={icon} className={styles.icon}/></a>
    )
}