import React from 'react';

const Form = (props) => {

    return (
        <div>
            {props.employee.map((i, index) => {
                return (
                    <div key={index}>
                        <h2>{i.name}</h2>
                        <p>{i.position}</p>
                        <p>{i.specialty}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Form;