import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamList from './TeamList';

function App() {
 const [ team, setTeam ] = useState(TeamList);
 console.log(team);

  return (
    <div className="App">
      <header>My Team</header>
      {/* <TeamCard /> */}
    </div>
  );
}

export default App;
