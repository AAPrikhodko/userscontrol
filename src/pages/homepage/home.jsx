import React, {useEffect, useState} from "react";
import "./home.css"
import $ from 'jquery';
import {Button, Table} from "react-bootstrap";
import {connect} from "react-redux";
import {deleteUser, getUsers} from "../../contexts/reduxStore/usersReducer";
import ModalWindowAddUser from "../../components/ModalWindowAddUser/ModalWindowAddUser";
import ModalWindowEditUser from "../../components/ModalWindowEditUser/ModalWindowEditUser";


const Home = ({users, getUsers, deleteUser}) => {

    const [showAddModal, setShowAddModal] = useState(false)
    const [showEditUser, setShowEditUser] = useState(false)
    const [userEditChoosed, setUserEditChoosed] = useState({})
    const [searchValue, setSearchValue] = useState('')
    const [anyUserDidEdit, setAnyUserDidEdit] = useState(false)
    const [anyUserDidAdd, setAnyUserDidAdd] = useState(false)
    const [anyUserDidDelete, setAnyUserDidDelete] = useState(false)

    useEffect(() => getUsers(), [])

    const handleCloseAddModal = () => setShowAddModal(false)
    const handleShowAddModal = () => setShowAddModal(true)
    const handleCloseEditUser = () => setShowEditUser(false)
    const handleShowEditUser = () => setShowEditUser(true)
    const handleAnyUserDidEdit = () => setAnyUserDidEdit(true)
    const handleAnyUserDidAdd = () => setAnyUserDidAdd(true)

    const editUserClicked = (user) => {
        handleShowEditUser()
        setUserEditChoosed(user)
    }
    const deleteUserClicked = (user) => {
        deleteUser(user)
        setAnyUserDidDelete(true)
    }

    const handleChange = (e) => {
        return setSearchValue(e.target.value)
    }

    let searchType = $('input[name="searchRadio"]:checked').val()
    switch (searchType) {
        case "byName":
            users = users.filter(user => user.name.toLowerCase().match(searchValue))
            break
        case "byEmail":
            users = users.filter(user => user.email.toLowerCase().match(searchValue))
            break
        case "byPhone":
            users = users.filter(user => user.phone.toLowerCase().match(searchValue))
            break
    }

    if (anyUserDidEdit) {
        setTimeout(() => {
            window.$(".alert").alert('close')
            setAnyUserDidEdit(false)
        }, 3000)
    }

    if (anyUserDidAdd) {
        setTimeout(() => {
            window.$(".alert").alert('close')
            setAnyUserDidAdd(false)
        }, 3000)
    }
    if (anyUserDidDelete) {
        setTimeout(() => {
            window.$(".alert").alert('close')
            setAnyUserDidDelete(false)
        }, 3000)
    }


    return (
        <div className="container-fluid text-right">

            {anyUserDidEdit && <div className="container alert-container">
                <div className="alert alert-info alert-dismissible fade show" role="alert">
                    User was edited successfully!
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>}

            {anyUserDidAdd && <div className="container alert-container">
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    User was added successfully!
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>}

            {anyUserDidDelete && <div className="container alert-container">
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    User was deleted successfully!
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>}

            <div className="row">
                <div className="col">
                    <input type="text" className="form-control badge-pill m-2 col-sm-10"
                           placeholder=" Search users..."
                           value={searchValue}
                           onChange={handleChange}/>
                </div>
                <div className="col">
                    <Button className="badge-pill btn-success m-2 " onClick={handleShowAddModal}>
                        <i className="bi bi-person-plus"></i> ADD USER </Button>
                </div>
            </div>
            <div className="row ml-3">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="searchRadio" id="byName" value="byName"
                           defaultChecked/>
                    <label className="form-check-label" htmlFor="byName">by name</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="searchRadio" id="byEmail" value="byEmail"/>
                    <label className="form-check-label" htmlFor="byEmail">by Email</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="searchRadio" id="byPhone" value="byPhone"/>
                    <label className="form-check-label" htmlFor="byPhone">by phone</label>
                </div>
            </div>
            <ModalWindowAddUser show={showAddModal} handleClose={handleCloseAddModal} handleAnyUserDidAdd={handleAnyUserDidAdd}/>
            <ModalWindowEditUser show={showEditUser} handleClose={handleCloseEditUser} user={userEditChoosed}
                                 handleAnyUserDidEdit={handleAnyUserDidEdit}/>
            <div className="row">
                <Table className="table" striped bordered hover responsive>
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Lastname</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Career</th>
                        <th scope="col">Created</th>
                        <th scope="col">Changed</th>
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
                                <Button className="badge-pill btn-primary m-2" onClick={() => editUserClicked(user)}>
                                    <i className="bi bi-pencil"></i> EDIT </Button>
                                <Button className="badge-pill btn-danger m-2" onClick={() => deleteUserClicked(user)}>
                                    <i className="bi bi-trash"></i> DELETE </Button>
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

const MapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}

export default connect(MapStateToProps, {getUsers, deleteUser})(Home)
