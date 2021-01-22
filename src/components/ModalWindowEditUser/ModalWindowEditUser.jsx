import {Modal} from "react-bootstrap";
import React from "react";
import {Formik} from "formik"
import {connect} from "react-redux";
import * as yup from 'yup'
import "./ModalWindowEditUser.css"
import {editUser} from "../../contexts/reduxStore/usersReducer";

const ModalWindowEditUser = ({show, handleClose, user, editUser, handleAnyUserDidEdit} ) => {

    const validationSchema = yup.object().shape({
        name: yup.string()
            .min(2, "Name must have at least 2 symbols")
            .max(15, "Name can't be longer than 15 symbols")
            .required("Name is required"),
        lastname: yup.string()
            .min(2, "Last Name must have at least 2 symbols")
            .max(15, "Last Name can't be longer than 15 symbols")
            .required("Last Name is required"),
        email: yup.string()
            .email("E-mail is not valid")
            .max(30, "E-mail must be less than 30 symbols")
            .required("E-mail is required"),
        phone: yup.string()
            .required("Phone is required"),
        career: yup.string()
            .required("Career is required")
    });

    return <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}

    >
        <div className="container bg-primary">
            <div className="h4 text-center my-4 text-white">Edit form for user {user.name} {user.lastname}</div>
        </div>
        <Formik initialValues={{
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            phone: user.phone,
            career: user.career,
            dateOfCreate: user.dateOfCreate,
            dateOfChange: new Date().toLocaleDateString()
        }}
                validationSchema={validationSchema}
                validationSchema={validationSchema}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    editUser(values,user.key)
                    setSubmitting(true)
                    resetForm()
                    setSubmitting(false)
                    handleClose()
                    handleAnyUserDidEdit()}}>
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit
              }) => (

                  <div className="container">
                    <div className="container mt-5">
                        <div className="text-center ">
                            <p className="lead">Please input data for adding new user to database:</p>
                        </div>
                        <div className="row mt-5">
                            <div className="col-sm-6 my-2">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input id="name" type="text" className="form-control"
                                       onChange={handleChange} onBlur={handleBlur} value={values.name}/>
                                {touched.name && errors.name && <div className='checkout_errMessage'> {errors.name}</div>}
                            </div>
                            <div className="col-sm-6 my-2">
                                <label htmlFor="lastname" className="form-label">Last Name</label>
                                <input id="lastname" type="text" className="form-control"
                                       onChange={handleChange} onBlur={handleBlur} value={values.lastname}/>
                                {touched.lastname && errors.lastname && <div className='checkout_errMessage'> {errors.lastname}</div>}
                            </div>
                        </div>
                        <hr className="mt-3"/>
                        <div className="row mt-3">
                            <div className="col-sm-5 my-2">
                                <label htmlFor="email" className="form-label">E-mail</label>
                                <input id="email" type="email" className="form-control"
                                       onChange={handleChange} onBlur={handleBlur} value={values.email}/>
                                {touched.email && errors.email && <div className='checkout_errMessage'> {errors.email}</div>}
                            </div>
                            <div className="col-sm-4 my-2">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input id="phone" type="text" className="form-control"
                                       onChange={handleChange} onBlur={handleBlur} value={values.phone}/>
                                {touched.phone && errors.phone && <div className='checkout_errMessage'> {errors.phone}</div>}
                            </div>
                            <div className="col-sm-3 my-2">
                                <label htmlFor="career" className="form-label">Career</label>
                                <select id="career" className="form-control"
                                        onChange={handleChange} onBlur={handleBlur} value={values.career}>
                                    <option value="other">Choose...</option>
                                    <option value="actor">Actor</option>
                                    <option value="singer">Singer</option>
                                    <option value="frontend developer">Frontend Developer</option>
                                </select>
                                {touched.career && errors.career && <div className='checkout_errMessage'> {errors.career}</div>}
                            </div>
                        </div>
                    </div>
                    <div className="container g-5">
                        <div className="row m-5">
                            <div className="col-sm-6 my-1">
                                <button className="btn btn-secondary btn-block" onClick={handleClose}>
                                    <i className="bi bi-arrow-left"></i>  BACK </button>
                            </div>
                            <div className="col-sm-6 my-1">
                                <button className="btn btn-success btn-block" type="submit" onClick={handleSubmit}>
                                    SAVE <i className="bi bi-save"></i></button>
                            </div>
                        </div>
                    </div>
                </div>)}
        </Formik>
    </Modal>
}

export default connect(null, {editUser})(ModalWindowEditUser)