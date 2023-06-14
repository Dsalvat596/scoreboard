import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LogoMLB from './assets/img/mlb-logo.png';
import LogoNBA from './assets/img/nba-logo.png';
import './App.css';
import useFetch from './hooks/useFetch';
import { MlbGame, NbaGame } from './types';

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

  return (
    <div className='container'>
      {loading && <div> "PLEASE WAIT....."</div>}
      {!loading && (
        <>
          <div className='baseball' onClick={() => setSelectedLeague('mlb')}>
            <img src={LogoMLB} alt='MLB' />
          </div>
          <div className='divider'></div>
          <div className='basketball' onClick={() => setSelectedLeague('nba')}>
            <img src={LogoNBA} alt='NBA' />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
