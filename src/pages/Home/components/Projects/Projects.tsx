import React from 'react';
import { faArrowRight } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import OutlinedSectionHeading from '../../../../components/OutlinedSectionHeading/OutlinedSectionHeading';
import { projects } from '../../../../data/projects';
import styles from "./Projects.module.scss";

type Props = {};

export default function Projects(props: Props) {
  return (
    <div className={styles.projects}>
      <div className={styles.sectionContent}>
        <OutlinedSectionHeading
          heading={"PROJECTS"}
          className={styles.sectionHeading}
        />

        {projects.map((p, i) => {
          const isReverseFlex = i % 2 !== 0;

          return (
            <div
              key={i}
              className={classNames(styles.projectBlock, { [styles.reverse]: isReverseFlex })}
            >
              <div className={styles.textWrapper}>
                <p className={styles.eyebrow}>{p.eyebrow}</p>
                <h3 className={styles.title}>{p.name}</h3>
                <div className={styles.btnsWrapper}>
                  {p.siteUrl &&
                    <a
                      href={p.siteUrl}
                      target={"_blank"}
                      rel={"noreferrer"}
                    >View This Site <FontAwesomeIcon icon={faArrowRight} /></a>
                  }
                  {p.repoUrl &&
                    <a href={p.repoUrl} target={"_blank"} rel={"noreferrer"}>GitHub Repo</a>
                  }
                </div>
              </div>
              <a
                className={styles.imgWrapper}
                href={p.siteUrl}
                target={"_blank"}
                rel={"noreferrer"}
              >
                <div className={styles.tiltedBg} />
                <div className={styles.innerImgWrapper}>
                  <img className={styles.projectImg} src={p.image} alt={""} />
                </div>
              </a>
            </div>
          )
        })}

      </div>
    </div>
  );
}