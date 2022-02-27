import React from 'react';
import styles from "./Home.module.scss";
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import MainHeader from '../../components/MainHeader/MainHeader';
import Projects from './components/Projects/Projects';
import MainFooter from '../../components/MainFooter/MainFooter';

type Props = {};

export default function Home(props: Props) {
  return (
    <div className={styles.home}>
      <MainHeader/>
      <div className={styles.homeContent}>
        <Hero/>
        <Skills/>
        <Projects/>
      </div>
      <MainFooter/>
    </div>
  );
}
