import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState();
  const [nbaData, setNbaData] = useState();

  useEffect(() => {
    axios
      .get('/api')
      .then((res) => res.data)
      .then((data) => setData(data.message));

    axios.get('/api/bs/nba').then((res) => {
      console.log('rizzy', res);
      setNbaData(res.data);
    });
  }, []);

  console.log('dater', nbaData);

  return (
    <div className='App'>
      <header className='App-header'>
        <p>{!data ? 'Loading...' : data}</p>
      </header>
    </div>
  );
}

export default App;
