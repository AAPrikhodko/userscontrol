import React from "react";
import './App.css';
import firebase from 'firebase'
import {Alert} from "react-bootstrap";


function App() {

    const db = firebase.database()
    console.log(db)

  return (
      <Alert variant={'success'}>
     Soon you will find here webApp "UsersControl"
    </Alert>
  );
}

export default App;
