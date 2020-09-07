import React from 'react';

const TeamForm = () => {
    return (
        <div>
            <form>
                <input placeholder="Name"></input><br></br>
                {/* <input type='range' step='1' min='0' max='100' list='tickmarks'></input><br></br> */}
                <label>
                    Age
                    <select>
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                        <option>40</option>
                    </select>
                    <br></br>
                </label>
                <input placeholder="Favorite Color"></input>
                <br></br>
                <input type='submit'></input>
            </form>
        </div>
    )
}

export default TeamForm;