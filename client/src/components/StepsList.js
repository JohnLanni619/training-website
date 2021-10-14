import React from "react";

import { RiNumber1, RiNumber2, RiNumber3, RiNumber4} from "react-icons/ri"

const steps = [
    {
        number: <RiNumber1/>,
        title: 'Fill Out Contact Form',
        description: 'We will reach out to you to schedule a consultation'
    },
    {
        number: <RiNumber2/>,
        title: 'The Consultation',
        description: "During your consultation, our certified personal trainers will talk to you about your goals and get a real understanding of what you want to accomplish. We will also do a movement assesment to ensure that the program we're writing for you will maximize your results."
    },
    {
        number: <RiNumber3/>,
        title: 'The Plan',
        description: "After the consultation, you and your trainer will determine which path will maximize your results. Your roadmap will be broken down into a weekly routine to take the guesswork out of fitness."
    },
    {
        number: <RiNumber4/>,
        title: 'The Journey',
        description: "You'll be following your plan and will be receiving support from your coach every step of the way. Our coaches will check in with you weekly or even daily depending on your needs, and will be there to help you problem solve and be a source of encouragement along the way."
    }
];

const StepsList = () => {
    return(
        <section id='steps'>
            <h2>The Process</h2>
            {steps.map((step) => {
                return(
                    <div key={step.title}>
                        <span>{step.number}</span>
                        <h3 style={{display: 'inline'}}>| {step.title}</h3>
                        <p>{step.description}</p>
                    </div>
                )
            })}
        </section>
    )
};

export default StepsList;