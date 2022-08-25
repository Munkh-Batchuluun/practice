import './App.css';
import Unit from './component/Unit'
import Form from './component/Form'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const data = [
    {code: 'COMP1010', title:'Fundamentals of Computer Science', offering: ['S1', 'S2']},
    {code: 'COMP1750', title:'Introduction to Business Information Systems', offering: ['S1']},
    {code: 'COMP2110', title:'Web Technology', offering: ['S1', 'S2']},
    {code: 'COMP2750', title:'Applications Modelling and Development', offering: ['S1']},
    {code: 'MMCC2045', title:'Interactive Web Design', offering: ['S2']},
    {code: 'COMP3120', title:'Advanced Web Development', offering: ['S2']},
    {code: 'COMP3130', title:'Mobile Application Development', offering: ['S1']}
  ]

  const [units, setUnits] = useState([])

  const fetchUnits = () => {
    axios.get("http://localhost:3001/api/units")
    .then((response) => {
      console.log("response: ", response)
      setUnits(response.data)
    })
  }

  const addNewUnit = (newUnit) => {
    axios.post("http://localhost:3001/api/units", newUnit)
    .then((res) => {
      setUnits([...units, res.data])
    })
  }

  const deleteUnit = (unit) => {
    console.log("delete", unit)
    axios.delete("http://localhost:3001/api/units/" + unit.id)
    .then((response) => {
      console.log("delete succeeded")
      // delete local copy
      const newUnits = units.filter(u => u.id !== unit.id)
      setUnits(newUnits)
    })
    .catch((error) => {
      console.log("ERROR!")
      // refresh the list of units from the server
      fetchUnits()
    })
  }

  useEffect(() => {
    fetchUnits()
  }, [])

  return (
    <div className="App">
      <h1>COMP3120: Advanced Wed Development</h1> 
      <Form updateFn={addNewUnit}></Form>        
      <Unit data={units} deleteFn={deleteUnit}></Unit>
    </div>
  );
}

export default App;
