import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

import styles from './Parallax.module.scss';

import SmallPokeBallPng from './assets/pokeball-small.png';
import CloudPng from './assets/cloud-small.png';
import PokeBallPng from './assets/pokeball-big.png';
import CloudBigPng from './assets/cloud-big.png';
import PikachuPng from './assets/pikachu.png';
import FullBanner from './assets/full-banner.png';

export const Parallax = () => {
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);

  useEffect(() => {
    gsap.fromTo(
      `.${styles.root}`,
      { transform: `scale(5)`, opacity: 0 },
      { transform: `scale(1)`, opacity: 1, duration: 2, ease: 'expo' },
    );
  }, []);

  useEffect(() => {
    const animate = () => {
      gsap.to(`.${styles.smallPokeBall}`, { transform: `translate(${screenX * 0.01}px, ${screenY * 0.01}px)` });
      gsap.to(`.${styles.cloud}`, { transform: `translate(${screenX * 0.02}px, ${screenY * 0.02}px)` });
      gsap.to(`.${styles.cloudBig}`, { transform: `translate(${screenX * 0.03}px, ${screenY * 0.03}px)` });
      gsap.to(`.${styles.pokeBall}`, { transform: `translate(${screenX * 0.06}px, ${screenY * 0.06}px)` });
      gsap.to(`.${styles.pikachu}`, { transform: `translate(${screenX * 0.05}px, ${screenY * 0.05}px)` });
    };

    const mouseMoveHandler = (event: MouseEvent) => {
      setScreenX(event.screenX);
      setScreenY(event.screenY);

      requestAnimationFrame(() => animate());
    };

    window.addEventListener('mousemove', mouseMoveHandler);

    return () => window.removeEventListener('mousemove', mouseMoveHandler);
  }, [screenX, screenY]);

  return (
    <div className={styles.root}>
      <div className={styles.smallPokeBall}>
        <img src={SmallPokeBallPng} alt="Small PokeBall" />
      </div>
      <div className={styles.cloud}>
        <img src={CloudPng} alt="Cloud PokeBall" />
      </div>
      <div className={styles.cloudBig}>
        <img src={CloudBigPng} alt="Cloud Big PokeBall" />
      </div>

      <div className={styles.pokeBall}>
        <img src={PokeBallPng} alt="Big PokeBall" />
      </div>
      <div className={styles.pikachu}>
        <img src={PikachuPng} alt="Cloud PokeBall" />
      </div>
      <div className={styles.fullBanner}>
        <img src={FullBanner} alt="Pikachu" />
      </div>
    </div>
  );
};
