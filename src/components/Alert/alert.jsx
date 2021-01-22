import React from "react";

const Alert = () =>{
    return (
    <div className="alert alert-success alert-dismissible fade show" role="alert">
        Welcome to the Users App!
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
)

}