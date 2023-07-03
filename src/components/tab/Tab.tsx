import React, { FC } from 'react';
import styles from './Tab.module.css';
import cx from 'classnames';
import { SelectedTeam } from '../scoreboard/NBA-scoreboard';

interface TabProps {
  tabs: Array<string>;
  selectedTab: string;
  onTabSelect: (tab: SelectedTeam) => void;
}

const Tab: FC<TabProps> = (props) => {
  const { tabs, onTabSelect, selectedTab } = props;
  const handleTabClick = (tab: SelectedTeam) => {
    onTabSelect(tab);
  };

  const [team1, team2] = tabs;
  return (
    <div className={cx(styles.Tabs)}>
      {/* Tab nav */}
      <ul className={cx(styles.nav)}>
        <li
          onClick={() => handleTabClick(SelectedTeam.away)}
          className={selectedTab === SelectedTeam.away ? styles.active : ''}
        >
          {team1}
        </li>
        <li
          className={selectedTab === SelectedTeam.home ? styles.active : ''}
          onClick={() => handleTabClick(SelectedTeam.home)}
        >
          {team2}
        </li>
      </ul>
    </div>
  );
};

export default Tab;
