import React, {useEffect, useState} from "react";
import firebase from 'firebase'
import "./home.css"
import {Button, Table} from "react-bootstrap";


const Home = () => {

    const [users, setUsers] = useState()
    const db = firebase.database()
    useEffect(() => {
        db.ref('users').on('value', el => setUsers(el.val()))
    }, []);

    return (
        <div className="container-fluid text-right">
                <Button className="badge-pill btn-success m-2 ">ADD USER</Button>
            <div className="row">
                <Table className="table" striped bordered hover responsive>
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Lastname</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Career</th>
                        <th scope="col">DateOfCreate</th>
                        <th scope="col">DateOfChange</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {(users !== undefined) && users.map(user => (
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.lastname}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.career}</td>
                            <td>{user.dateOfCreate}</td>
                            <td>{user.dateOfChange}</td>
                            <td className="container-fluid text-right">
                                <Button className="badge-pill btn-primary m-2">EDIT</Button>
                                <Button className="badge-pill btn-danger m-2">DELETE</Button>
                            </td>
                        </tr>
                    ))
                    }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Home