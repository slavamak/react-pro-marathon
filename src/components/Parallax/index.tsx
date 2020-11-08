import React, { useState, useEffect } from 'react';

import styles from './Parallax.module.scss';

import SmallPokeBallPng from './assets/pokeball-small.png';
import CloudPng from './assets/cloud-small.png';
import PokeBallPng from './assets/pokeball-big.png';
import CloudBigPng from './assets/cloud-big.png';
import PikachuPng from './assets/pikachu.png';

export const Parallax = () => {
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);

  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      setScreenX(event.screenX);
      setScreenY(event.screenY);
    };

    window.addEventListener('mousemove', mouseMoveHandler);

    return () => window.removeEventListener('mousemove', mouseMoveHandler);
  }, [screenX, screenY]);

  return (
    <div className={styles.root}>
      <div
        className={styles.smallPokeBall}
        style={{
          transform: `translate(${screenX * 0.01}px, ${screenY * 0.01}px)`,
        }}>
        <img src={SmallPokeBallPng} alt="Small PokeBall" />
      </div>
      <div
        className={styles.cloud}
        style={{
          transform: `translate(${screenX * 0.02}px, ${screenY * 0.02}px)`,
        }}>
        <img src={CloudPng} alt="Cloud PokeBall" />
      </div>
      <div
        className={styles.cloudBig}
        style={{
          transform: `translate(${screenX * 0.03}px, ${screenY * 0.03}px)`,
        }}>
        <img src={CloudBigPng} alt="Cloud Big PokeBall" />
      </div>

      <div
        className={styles.pokeBall}
        style={{
          transform: `translate(${screenX * 0.06}px, ${screenY * 0.06}px)`,
        }}>
        <img src={PokeBallPng} alt="Big PokeBall" />
      </div>
      <div
        className={styles.pikachu}
        style={{
          transform: `translate(${screenX * 0.05}px, ${screenY * 0.05}px)`,
        }}>
        <img src={PikachuPng} alt="Cloud PokeBall" />
      </div>
    </div>
  );
};
