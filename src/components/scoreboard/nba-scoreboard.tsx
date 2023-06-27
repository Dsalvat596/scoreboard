import React, { FC } from 'react';
import './scoreboard.css';
import { NbaGame } from '../../types';

interface FuckYouProps {
  data: NbaGame;
}

const NbaScoreboard: FC<FuckYouProps> = (props) => {
  console.log('PROPSPCS', props);

  const {
    away_period_scores,
    away_stats,
    away_team,
    away_totals,
    event_information,
    home_period_scores,
    home_team,
    home_stats,
    home_totals,
    officials,
  } = props.data;
  return (
    <div className='scoreboard-container'>
      <div className='gameHeader'>
        <div className='team awayTeam'>
          <div>{away_team.full_name}</div>
          <div>13-29</div>
        </div>
        <div className='score'>{`${away_totals.points} - ${home_totals.points}`}</div>
        <div className='team homeTeam'>
          <div>{home_team.full_name}</div>
          <div>23-12</div>
        </div>
      </div>
      <div className='boxscore-grid'>
        <div className='box-header'>
          <div className=''>Team</div>
          <div className=''>{away_team.full_name}</div>
          <div className=''>{home_team.full_name}</div>
        </div>
        <div className='score-col'>
          <div className=''>1</div>
          <div className=''>{away_period_scores[0]}</div>
          <div className=''>{home_period_scores[0]}</div>
        </div>
        <div className='score-col'>
          <div className=''>2</div>
          <div className=''>{away_period_scores[1]}</div>
          <div className=''>{home_period_scores[1]}</div>
        </div>
        <div className='score-col'>
          <div className=''>3</div>
          <div className=''>{away_period_scores[2]}</div>
          <div className=''>{home_period_scores[2]}</div>
        </div>
        <div className='score-col'>
          <div className=''>4</div>
          <div className=''>{away_period_scores[3]}</div>
          <div className=''>{home_period_scores[3]}</div>
        </div>
        <div className='score-col'>
          <div className=''>OT 1</div>
          <div className=''>13</div>
          <div className=''>14</div>
        </div>
        <div className='score-col'>
          <div className=''>OT 2</div>
          <div className=''>13</div>
          <div className=''>14</div>
        </div>
      </div>
    </div>
  );
};

export default NbaScoreboard;
