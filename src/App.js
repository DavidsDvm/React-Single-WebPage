import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Charactes from './components/Characters';
import Index from './components/Index';

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
    <Router>
      <> 
        <Header />
        <Route path="/" exact>
          <Index></Index>
        </Route>
        <Route path="/characters">
          <Charactes isLoading={appState.loading} repos={appState.repos}/>
        </Route>
        <Footer />
      </>
    </Router>
  );
}

export default App;
