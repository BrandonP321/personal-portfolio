import React, { ReactElement } from 'react';
import MainFooter from '../../components/MainFooter/MainFooter';
import MainHeader from '../../components/MainHeader/MainHeader';
import styles from "./Home.module.scss";

interface Props {
    
}

export default function Home(props: Props): ReactElement {
    return (
        <div className={styles.home}>
            <MainHeader selectedTab={"home"}/>
            <h1>Home</h1>
            <MainFooter/>
        </div>
    )
}
