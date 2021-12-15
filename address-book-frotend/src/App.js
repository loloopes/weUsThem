import React, { useState, useEffect } from 'react';
import PersonCard from './components/PersonCard';
import PersonInput from './components/PersonInput';
import PersonEdit from './components/PersonEdit';
import axios from 'axios';
import postData from './service/postData';
import editData from './service/editData';
import deleteData from './service/deleteData';

function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [nameEdit, setNameEdit] = useState();
  const [emailEdit, setEmailEdit] = useState();
  const [phoneEdit, setPhoneEdit] = useState();
  const [oldName, setOldName] = useState();
  const [data, setData] = useState();
  const [deleteName, setDeleteName] = useState();
  const [filterName, setFilterName] = useState('');

  const handlersCreator = {
    setName,
    setEmail,
    setPhone
  };

  const handlersEditor = {
    setNameEdit, 
    setEmailEdit, 
    setPhoneEdit,
    setOldName
  };

  const infoCreation = {
    name,
    email,
    phone,
  };

  const infoEdition = {
    name: oldName,
    newName: nameEdit,
    newEmail: emailEdit,
    newPhone: phoneEdit,
  };
  
  useEffect(() => {
    axios.get('http://localhost:3001/person/get')
      .then(response => setData(response.data))
  }, []);

  return (
    <div>
      <h2>Filter By</h2>
      <label htmlFor='filterName'>Name</label>
      <input type='text' name='filterName' id='filterName' onChange={({target: value}) => setFilterName(value)}/>
      <button>Filter</button>
      <hr/>
      {data 
      ? data.map((person) => <PersonCard key={person.email} data={person}/>)
      : <p>Fetching data...</p>}
      <hr/>
      <h2>Create contact</h2>
      <PersonInput data={handlersCreator}/>
      <button type='button' onClick={() => postData(infoCreation)}>Create</button>
      <hr/>
      <h2>Edit contact</h2>
      <PersonEdit data={handlersEditor}/>
      <button type='button' onClick={() => editData(infoEdition)}>Edit</button>
      <hr/>
      <h2>Delete Contact</h2>
      <label htmlFor='deleteInput'>Enter name to delete</label> 
      <input name='deleteInput' id='deleteInput' type='text' onChange={({target: {value}}) => setDeleteName(value)}/>
      <button type='button' onClick={() => deleteData(deleteName)}>Delete</button>

    </div>
  );
};

export default App;
