import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamList from './TeamList';
import TeamMember from './TeamMember';
import TeamForm from './TeamForm';

function App() {
 const [ team, setTeam ] = useState(TeamList);

  const addNewMember = (memberData) => {
    const newMember = {
      name: memberData.name,
      email: memberData.email,
      job: memberData.job
    }

    setTeam([...team, newMember]);
  };
 
  return (

    <div className="App">
      <h1>My Team</h1>
          <TeamForm addNewMember={addNewMember}/>
          <TeamMember team={team} />
    </div>
  );
}

export default App;
