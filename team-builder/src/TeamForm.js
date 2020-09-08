import React, { useState} from 'react';

const TeamForm = (props) => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        job: ""
    });

    const changeHandler = (e) => {
        console.log(e.target.value);
        console.log('member:', member);
        setMember({
            ...member,
            [e.target.name]: e.target.value
        });
    };

    const submitForm = (e) => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({id: Date.now(), name: "", email: "", job: ""});
    }

    console.log(member)

    return (
            <form onSubmit={submitForm}>

                <label htmlFor='name'>Name</label>
                <input 
                    placeholder="Type Your Name"
                    id = "inputName"
                    name = 'name'
                    value={member.name}
                    maxLength = "20"
                    onChange={changeHandler}
                ></input>
                
                <br></br>

                <label htmlFor='email'>Email</label>
                    <input name='email' value={member.email} onChange={changeHandler}></input>

                <br></br>
                
                <label htmlFor='job'>Title</label>
                <input name='job' onChange={changeHandler} value={member.job}></input>

                <br></br>

                <input type='submit'></input>

            </form>
    )
}

export default TeamForm;