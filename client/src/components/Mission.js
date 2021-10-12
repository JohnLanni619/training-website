import React from "react";
import { LoremIpsum } from 'react-lorem-ipsum';

const Mission = () => {
    return(
        <section id='mission-container'>
            <div className='col'>
                <h2>Start Building Habits</h2>
                <p><LoremIpsum p={2}/></p>
            </div>
            <form className='col'>
                <label> Name: </label>
                <input type='text' name='name'/>
                <label> Email Address: </label>
                <input type='email' name='email'/>
                <label> Phone Number: </label>
                <input type='tel' name='phone'/>
                <input type='submit' value='Submit'/>
            </form>
        </section>
    )
};

export default Mission;