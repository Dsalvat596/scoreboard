import React, { FC, useState } from 'react';
import styles from './Scoreboard.module.css';
import { NbaGame } from '../../types';
import cx from 'classnames';
import Player from '../player/Player';
import Tab from '../tab/Tab';

interface ScoreBoardProps {
  data: NbaGame;
}

export enum SelectedTeam {
  away = 'AWAY',
  home = 'HOME',
}

const NbaScoreboard: FC<ScoreBoardProps> = (props) => {
  const [selectedTeamTab, setSelectedTeamTab] = useState<SelectedTeam>(
    SelectedTeam.away
  );

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
    <div className={styles.score_container}>
      <div className={styles.scoreboards}>
        <div className={styles.gameHeader}>
          <div className={cx(styles.team, styles.awayTeam)}>
            <div>{away_team.full_name}</div>
            <div>13-29</div>
          </div>
          <div
            className={styles.score}
          >{`${away_totals.points} - ${home_totals.points}`}</div>
          <div className={cx(styles.team, styles.homeTeam)}>
            <div>{home_team.full_name}</div>
            <div>23-12</div>
          </div>
        </div>
        <div className={styles.boxscore_grid}>
          <div className={styles.box_header}>
            <div className=''>Team</div>
            <div className=''>{away_team.full_name}</div>
            <div className=''>{home_team.full_name}</div>
          </div>
          <div className={styles.score_col}>
            <div className=''>1</div>
            <div className=''>{away_period_scores[0]}</div>
            <div className=''>{home_period_scores[0]}</div>
          </div>
          <div className={styles.score_col}>
            <div className=''>2</div>
            <div className=''>{away_period_scores[1]}</div>
            <div className=''>{home_period_scores[1]}</div>
          </div>
          <div className={styles.score_col}>
            <div className=''>3</div>
            <div className=''>{away_period_scores[2]}</div>
            <div className=''>{home_period_scores[2]}</div>
          </div>
          <div className={styles.score_col}>
            <div className=''>4</div>
            <div className=''>{away_period_scores[3]}</div>
            <div className=''>{home_period_scores[3]}</div>
          </div>
          {away_period_scores.length >= 5 && (
            <div className={styles.score_col}>
              <div className=''>OT 1</div>
              <div className=''>{away_period_scores[4]}</div>
              <div className=''>{home_period_scores[4]}</div>
            </div>
          )}
          {away_period_scores.length >= 6 && (
            <div className={styles.score_col}>
              <div className=''>OT 2</div>
              <div className=''>{away_period_scores[5]}</div>
              <div className=''>{home_period_scores[5]}</div>
            </div>
          )}
        </div>
        <Tab
          tabs={[away_team.first_name, home_team.first_name]}
          selectedTab={selectedTeamTab}
          onTabSelect={(tab) => setSelectedTeamTab(tab)}
        />
        <div className={styles.players_details}>
          {away_stats.map((player) => (
            <Player player={player} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NbaScoreboard;
