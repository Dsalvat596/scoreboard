import React, { FC, useState, useRef } from 'react';
import { BaseballBatterStats, BasketballPlayerStats } from '../../types';
import { useCollapse } from 'react-collapsed';
import styles from './Player.module.css';
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';
interface PlayerProps {
  player: BasketballPlayerStats | BaseballBatterStats | BaseballBatterStats;
}

const Player: FC<PlayerProps> = (props) => {
  console.log('PLAYAAAA', props.player);

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const { display_name, team_abbreviation, first_name, last_name, position } =
    props.player;

  return (
    <div className={styles.collapsible}>
      <div className={styles.header} {...getToggleProps()}>
        <h3 style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p> {`${first_name} ${last_name}`}</p>

          <p>{isExpanded ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}</p>
        </h3>
      </div>
      <div {...getCollapseProps()}>
        <div className={styles.content}>
          Now you can see the hidden content. <br />
          <br />
          Click again to hide...
        </div>
      </div>
    </div>
  );
};

export default Player;
