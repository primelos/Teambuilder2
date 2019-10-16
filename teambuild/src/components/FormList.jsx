import React, { useState } from 'react';



const FormList = props => {
    const [newForm, setNewForm] = useState({
        name:'',
        position:'',
        specialty:'',
    })

    const newHandler  = e =>{
        setNewForm({...newForm, [e.target.name]: e.target.value})
        setNewForm({...newForm, })
    }
    const send = e => {
        e.preventDefault()
        props.addNewEmployee(newForm)
        setNewForm({name:'', position:'', specialty:''})
      }

    return(
        <div>
            <form onSubmit = {send} >
                <label htmlFor="name">Name:</label>
                <input name='name' id='name' type='text' placeholder='Enter Name' onChange={newHandler} value={newForm.name} />
                <label htmlFor="postion">Position:</label>
                <input name='position' id='position' type='text' placeholder='Enter Your Specialty' onChange={newHandler} value={newForm.position} />
                <labe htmlFor="specialty">Specialty:</labe>
                <input name='specialty' id='specialty' type='text' placeholder='Enter Your Specialty' onChange={newHandler} value={newForm.specialty} />
           
                <button type='submit'>Add Team Memmber</button>

            </form>

        </div>
    )
}
export default FormList;