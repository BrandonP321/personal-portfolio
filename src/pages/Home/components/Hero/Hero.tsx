import React from 'react';
import styles from "./Hero.module.scss";
import heroLoc from "../../../../data/localization/Home.json"
import Button from '../../../../components/Button/Button';
import symbolBg from "../../../../media/img/hero/code-symbol.jpg";
import symbolBgSmall from "../../../../media/img/hero/code-symbol-small.png"
import symbolBgWebp from "../../../../media/img/hero/code-symbol.webp";
import symbolBgSmallWebp from "../../../../media/img/hero/code-symbol-small.webp"
import { useWebp } from '../../../../utils/helpers';

type Props = {};

export default function Hero(props: Props) {
    const supportsWebp = useWebp();

    const loc = heroLoc.hero

    return (
        <div className={styles.hero}>
            <div className={styles.contentWrapper} style={{ backgroundImage: `url(${supportsWebp ? symbolBgWebp : symbolBg}), url(${supportsWebp ? symbolBgSmallWebp : symbolBgSmall})` }}>
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
