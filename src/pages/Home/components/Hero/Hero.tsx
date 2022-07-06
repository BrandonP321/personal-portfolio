import React from 'react';
import styles from "./Hero.module.scss";
import heroLoc from "../../../../data/localization/Home.json"
import Button from '../../../../components/Button/Button';
import symbolBg from "../../../../media/img/hero/code-symbol.jpg";

type Props = {};

export default function Hero(props: Props) {
    const loc = heroLoc.hero

    return (
        <div className={styles.hero}>
            <div className={styles.contentWrapper} style={{ backgroundImage: `url(${symbolBg})` }}>
                {/* <div className={styles.heroBg} /> */}
                <div className={styles.textWrapper}>
                    <h1 dangerouslySetInnerHTML={{ __html: loc.title }} />
                    <p className={styles.blurb}>{loc.blurb}</p>
                </div>
                <div className={styles.btnGroup}>
                    <Button url={"#projects"} animate>{loc.myWorkBtnTitle}</Button>
                </div>
            </div>
            <div className={styles.bottomGradient}/>
        </div>
    );
}
