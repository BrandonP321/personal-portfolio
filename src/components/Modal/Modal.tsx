import { faTimes } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { ReactNode, useEffect, useState } from 'react'
import { WindowUtils } from '../../utils/WindowUtils';
import styles from "./Modal.module.scss";

type Props = {
    /* If true, fades in full screen modal */
    show: boolean;
    children: ReactNode;
    className?: string;
    hideModal: () => void;
}

/**
 * Wrapper for content that should be displayed in a modal
 */
export default function Modal(props: Props) {
    const { show, children, className, hideModal } = props;

    const [showModal, setShowModal] = useState(show);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        showModal ? WindowUtils.LockScroll(true) : WindowUtils.UnlockScroll();
    }, [showModal])

    useEffect(() => {
        if (!show) {
            // start fading out modal
            setIsFadingOut(true);
            setTimeout(() => {
                // once modal is fully invisible, return page to normal state
                hideModal()
                setShowModal(false);
                setIsFadingOut(false);
            }, 300)
        } else {
            setShowModal(true);
        }
    }, [show, hideModal])

    return (
        <div className={classNames(styles.modal, {[styles.show]: showModal, [styles.fadeOut]: isFadingOut}, className)}>
            <div className={styles.pageOverlay} onClick={hideModal}/>
            <FontAwesomeIcon icon={faTimes} className={styles.modalExitIcon}/>
            <div className={styles.contentWrapper}>
                {children}
            </div>
        </div>
    )
}