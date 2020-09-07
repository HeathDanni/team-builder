import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamList from './TeamList';
import TeamMember from './TeamMember';
import TeamForm from './TeamForm';

function App() {
 const [ team, setTeam ] = useState(TeamList);
 console.log(team);

  return (

    <div className="App">
      <h1>My Team</h1>
          <TeamForm/>
          <TeamMember team={team} />
    </div>
  );
}

export default App;
