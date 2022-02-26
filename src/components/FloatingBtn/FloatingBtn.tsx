import { IconDefinition } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { ReactNode } from 'react'
import styles from "./FloatingBtn.module.scss";

type Props = {
    url: string;
    className?: string;
    icon: IconDefinition;
}

export default function FloatingBtn(props: Props) {
    const { url, className, icon } = props;

    return (
        <a 
            className={classNames(styles.floatingBtn, className)} 
            href={url} 
            target={"_blank"} 
            rel={"noreferrer"}
        ><FontAwesomeIcon icon={icon} className={styles.icon}/></a>
    )
}