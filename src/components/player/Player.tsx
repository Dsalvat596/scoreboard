import React, { FC } from 'react';
import { BaseballBatterStats, BasketballPlayerStats } from '../../types';

interface PlayerProps {
  player: BasketballPlayerStats | BaseballBatterStats | BaseballBatterStats;
}

const Player: FC<PlayerProps> = (props) => {
  // console.log('PLAYAAAA', props);
  return <div>Player</div>;
};

export default Player;
