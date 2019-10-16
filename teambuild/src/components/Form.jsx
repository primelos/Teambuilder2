import React from 'react';
import './Form.css'

const Form = (props) => {

    return (
        <div className='formParent'>
            {props.employee.map((i, index) => {
                return (
                    <div className='form' key={index}>
                        <h3>Name: {i.name}</h3>
                        <p>Position: {i.position}</p>
                        <p>Specialty: {i.specialty}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Form;