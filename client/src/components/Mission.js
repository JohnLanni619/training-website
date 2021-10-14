import React from "react";
import { LoremIpsum } from 'react-lorem-ipsum';

const Mission = () => {
    return(
        <section id='mission'>
            <div className='mission-col1'>
                <h2>Start Building Habits</h2>
                <LoremIpsum p={1}/>
            </div>
            <div className='mission-col2'>
                <h2>Get Started Today</h2>
                <p>Fill out the form and John will reach out to you to schedule a free consultation!</p>
                <form className='col'>
                    <label> Name: </label>
                    <input type='text' name='name'/>
                    <label> Email Address: </label>
                    <input type='email' name='email'/>
                    <label> Phone Number: </label>
                    <input type='tel' name='phone'/>
                    <input className='button' type='submit' value='Submit'/>
                </form>
            </div>
        </section>
    )
};

export default Mission;