import React, { useState} from 'react';

const TeamForm = (props) => {

    const [newMember, setNewMember] = useState({
        Name: "",
        Age: "",
        Color: ""
    });

    const changeHandler = (e) => {
        setNewMember ({
            ...newMember,
            [e.target.name]: e.target.value
        });
    };

    const submitForm = (e) => {
        e.preventDefault();
        props.addNewMember(newMember);
        setNewMember({name: "", age: "", color: ""});
    };


    return (
            <form onSubmit={submitForm}>
                <label htmlFor="inputName">Name</label>
                <input 
                    placeholder="Type Your Name"
                    id = "inputName"
                    maxLength = "20"
                    value={newMember.name}
                ></input><br></br>
                {/* <input type='range' step='1' min='0' max='100' list='tickmarks'></input><br></br> */}
                <label htmlFor="inputAge" value={newMember.age}>Age</label>
                    <select id="inputAge">
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                        <option>40</option>
                    </select>
                    <br></br>
                <input placeholder="Favorite Color" value={newMember.color}></input>
                <br></br>
                <input type='submit'></input>
            </form>
    )
}

export default TeamForm;