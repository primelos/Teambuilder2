import React from 'react';

const Form = (props) => {

    return (
        <div className='formParent'>
            {props.employee.map((i, index) => {
                return (
                    <div className='form' key={index}>
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