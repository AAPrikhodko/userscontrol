import React, {useEffect, useState} from "react";
import firebase from 'firebase'


const Home = () => {

    const [users, setUsers] = useState()
    const db = firebase.database()
    useEffect(() => {
        db.ref('users').on('value', el => setUsers(el.val()))
    }, []);

    return (
            <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Lastname</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Career</th>
                        <th scope="col">DateOfCreate</th>
                        <th scope="col">DateOfChange</th>
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
                    </tr>
                ))
                }
                </tbody>
            </table>
        )
}

export default Home