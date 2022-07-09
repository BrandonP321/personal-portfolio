import classNames from 'classnames';
import React from 'react';
import styles from "./Button.module.scss";

type ButtonProps = {
    children: string;
    url?: string;
    onClick?: () => void;
    className?: string;
    /** Optional animation on button hover */
    animate?: boolean;
};

/**
 * Universal Button component that renders either an <a> or <button> element based on the props passed in
 */
export default function Button(props: ButtonProps) {
    const { children, url, onClick, className, animate } = props;

    const btnAttributes = {
        onClick,
        href: url,
        className: classNames(className, styles.btn)
    }

    const innerContent = (
        <>
            <div className={classNames(styles.btnBg, { [styles.animate]: animate })} />
            <div className={styles.text}>
                {children}
            </div>
        </>
    )

    return (
        <>
            {url
                ? <a {...btnAttributes}>{innerContent}</a>
                : <button {...btnAttributes}>{innerContent}</button>
            }
        </>
    );
}
