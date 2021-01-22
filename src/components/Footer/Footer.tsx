import React from "react";
import "./Footer.css"

const URL_PIZZA = "https://best-pizza-in-the-world.netlify.app/"
const URL_NETWORK = "https://dev-social-network.netlify.app/"


const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h5>USERS APPS INC</h5>
                        <ul className="list-unstyled">
                            <li className="colItem">Moscow</li>
                            <li className="colItem">12, Chukovskogo str.</li>
                            <li className="colItem">office 312</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>SUPPORT</h5>
                        <ul className="list-unstyled">
                            <li className="colItem"><i className="bi bi-envelope-fill"></i> hot@apps.com</li>
                            <li className="colItem"><i className="bi bi-telephone-fill"></i> 8-495-9999999</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>PRODUCTS</h5>
                        <ul className="list-unstyled">
                            <li className="colItem"><a href={URL_PIZZA} target="_blank">Pizza Online Shop</a></li>
                            <li className="colItem"><a href={URL_NETWORK} target="_blank">Developer Network</a></li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <p className="col-sm text-center">
                        &copy;{new Date().getFullYear()} All rights reserved
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer