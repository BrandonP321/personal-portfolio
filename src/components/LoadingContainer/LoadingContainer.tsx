import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import codeLogo from "../../media/img/code-mini.png";
import styles from "./LoadingContainer.module.scss";
import { WindowUtils } from "../../utils/WindowUtils";

type LoadingContainerProps = {

}

export default function LoadingContainer(props: LoadingContainerProps) {
    const [show, setShow] = useState(true);

    useEffect(() => {
        WindowUtils.LockScroll();

        // wait until logo animation is finished to fade out loading screen
        setTimeout(() => {
            setShow(false);

            // wait until fade-out animation is done to unlock scroll
            setTimeout(() => {
                WindowUtils.UnlockScroll();
            }, 500)
        }, 2500)
    }, [])

    return (
        <div className={classNames(styles.loadingContainer, {[styles.show]: show})}>
            <img src={codeLogo} className={styles.icon} alt={"HTML code symbol"}/>
        </div>
    )
}