import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamList from './TeamList';
import TeamMember from './TeamMember';
import TeamForm from './TeamForm';

function App() {
 const [ team, setTeam ] = useState(TeamList);
 console.log(team);

 const addNewMember = (data) => {
   const newMember = {
     Name: data.name,
     Age: data.age,
     Color: data.color
   };

   setTeam([...team, newMember]);
 }

  return (

    <div className="App">
      <h1>My Team</h1>
          <TeamForm/>
          <TeamMember team={team} />
    </div>
  );
}

export default App;
