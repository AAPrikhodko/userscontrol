import React from "react";
import './App.css';
import firebase from 'firebase'


function App() {

    const db = firebase.database()
    console.log(db)

  return (
    <div>
     Soon you will find here webApp "UsersControl"
    </div>
  );
}

export default App;
