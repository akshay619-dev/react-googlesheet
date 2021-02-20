import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './components/Loader';
import ListResults from './components/ListResults';
import Success from './components/Success';
import Error from './components/Error';

import env from 'react-dotenv';
import dotenv from 'dotenv'
import './App.css';
import { Button, Form, Container, Header } from 'semantic-ui-react';


const App = () => {

  const [userData, setUserData] = useState([]);
  const [responsemessage, setMessage] = useState([{
    msg: '',
    status: false
  }])

  useEffect(() => {
    // getUserData();
  }, []);

  const getUserData = async () => {
    const result = await axios.get(process.env.REACT_APP_API_URL);
    setUserData(...userData, result.data);
  }

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    salary: '',
    hobby: ''
  });

  const { name, age, salary, hobby } = formData;

  const onChangeHandler = e => setFormData({
    ...formData, [e.target.name]: e.target.value
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (name !== '' && age !== '' && salary !== '') {
      const result = await axios.post(process.env.REACT_APP_API_URL, formData);
      setUserData([...userData, formData]);
      setFormData({ name: '', age: '', salary: '', hobby: '' });
      setMessage({ msg: 'Data Saved Successfully', status: true });
    } else {
      setMessage({ msg: 'Fields cant be empty, Please fill all the fields', status: false });
    }
  }

  const removeMessageAlert = async => {

  }

  return (
    <div className="App">
      <Container fluid className="container">
        <Header as='h2' className="center aligned">React Google Sheets!</Header>
        <Form className="form" onSubmit={onSubmitHandler}>
          <Form.Field>
            <label>Name</label>
            <input name="name" placeholder='Enter your name' value={name} onChange={onChangeHandler} />
          </Form.Field>
          <Form.Field>
            <label>Age</label>
            <input name="age" type="number" placeholder='Enter your age' value={age} onChange={onChangeHandler} />
          </Form.Field>
          <Form.Field>
            <label>Salary</label>
            <input name="salary" type="number" placeholder='Enter your salary' value={salary} onChange={onChangeHandler} />
          </Form.Field>
          <Form.Field>
            <label>Hobby</label>
            <input name="hobby" placeholder='Enter your hobby' value={hobby} onChange={onChangeHandler} />
          </Form.Field>

          <Button className="center aligned" color="blue" type='submit'>Submit</Button>
        </Form>
        {responsemessage['status'] && <Success successMsg={responsemessage['msg']} />}

        {responsemessage['status'] === false && <Error errorMsg={responsemessage['msg']} />}

        {userData.length === 0 ? <Loader /> : <ListResults results={userData} />}

      </Container>
    </div>
  );
}

export default App;
