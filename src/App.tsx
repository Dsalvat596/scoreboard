import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LogoMLB from './assets/img/mlb-logo.png';
import LogoNBA from './assets/img/nba-logo.png';
import styles from './App.module.css';
import useFetch from './hooks/useFetch';
import { MlbGame, NbaGame } from './types';
import NbaScoreboard from './components/scoreboard/NBA-scoreboard';

function App() {
  const [selectedLeague, setSelectedLeague] = useState('');
  const [nbaData, setNbaData] = useState<NbaGame>();
  const [mlbData, setMlbData] = useState<MlbGame>();

  const { data, loading, error } = useFetch(selectedLeague);

  useEffect(() => {
    if (data) {
      if (selectedLeague === 'nba' && data.league === 'NBA') {
        setNbaData(data);
      }
      if (selectedLeague === 'mlb' && data.league === 'MLB') {
        setMlbData(data);
      }
    }
  }, [data, selectedLeague]);

  // console.log('MLB DOITA', mlbData);
  // console.log('NBA DOITA', nbaData);

  return (
    <>
      <div className={styles.container}>
        {loading && <div> "PLEASE WAIT....."</div>}
        {!loading && (
          <>
            <div
              className={styles.baseball}
              onClick={() => setSelectedLeague('mlb')}
            >
              <img src={LogoMLB} alt='MLB' />
            </div>
            <div className={styles.divider}></div>
            <div
              className={styles.basketball}
              onClick={() => setSelectedLeague('nba')}
            >
              <img src={LogoNBA} alt='NBA' />
            </div>
          </>
        )}
      </div>
      {selectedLeague === 'nba' && nbaData && (
        <div>
          <NbaScoreboard data={nbaData} />
        </div>
      )}
    </>
  );
}

export default App;
