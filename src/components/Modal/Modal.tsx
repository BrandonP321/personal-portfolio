import { faTimes } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { ReactNode, useEffect, useState } from 'react'
import { WindowUtils } from '../../utils/WindowUtils';
import styles from "./Modal.module.scss";

type Props = {
    show: boolean;
    children: ReactNode;
    className?: string;
    hideModal: () => void;
}

export default function Modal(props: Props) {
    const { show, children, className, hideModal } = props;

    const [showModal, setShowModal] = useState(show);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        showModal ? WindowUtils.LockScroll(true) : WindowUtils.UnlockScroll();
    }, [showModal])

    useEffect(() => {
        if (!show) {
            setIsFadingOut(true);
            setTimeout(() => {
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