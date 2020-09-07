import React from 'react';

const TeamMember = (props) => {
    return (
        <div>
            {props.team.map((team) => {
                return (
                    <div>
                        <h2>Name: {team.name}</h2>
                        <span>Email: {team.email}</span><br></br>
                        <span>Title: {team.job}</span>
                    </div>
                )
            })}
        </div>
)};

export default TeamMember;