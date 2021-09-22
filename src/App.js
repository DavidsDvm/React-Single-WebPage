import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Charactes from './components/Characters';

function App() {
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = 'https://breakingbadapi.com/api/characters';
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setAppState({ loading: false, repos: allRepos });
    });
  }, [setAppState]);

  return (
    <> 
      <Header />
      <Charactes isLoading={appState.loading} repos={appState.repos}/>
      <Footer />
    </>
  );
}

export default App;
