import React from 'react';

const TeamMember = (props) => {
    return (
        <div>
            {props.team.map((team) => {
                return (
                    <div>
                        <h2>Name: {team.name}</h2>
                        <span>Age: {team.age}</span><br></br>
                        <span>Color: {team.color}</span>
                    </div>
                )
            })}
        </div>
)};

export default TeamMember;