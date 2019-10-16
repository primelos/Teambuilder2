import React,{ useState } from 'react';
import './App.css';
import data from './data'
import Form from './components/Form'
import FormList from './components/FormList'


function App() {
  const [newEmp, setNewEmp] = useState(data)

  const addNewEmployee = newTeam => {
    setNewEmp([...newEmp, newTeam])
  }

  return (
    <div className="App">

      <h1>The Team</h1>
      <FormList addNewEmployee={addNewEmployee} />
      <Form  employee={newEmp}/>

    </div>
  );
}
export default App;
