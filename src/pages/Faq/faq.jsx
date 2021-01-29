import React from "react";
import "./faq.css"
import checkboxImg from "../../img/checkbox.png"

const Faq = () => {
    return (
        <div className="wrapperFaq">
            <div className="container">
                <h1 className="text-center m-4 text-info"> FAQ</h1>
                <p className="headerName text-info">About the program</p>
                <div className="row contentItem mx-1">
                    <div>
                        <div className="text-center">User Control App allows you to manage users:</div>
                        <hr/>
                        <ul className="my_ul">
                            <li>
                                <div> Add new user <br/> App will ask you you to fill the form with required information
                                    (such as
                                    name, lastname, e-mail, phone, career)
                                </div>
                            </li>
                            <li>
                                <div> Edit any user <br/> Yoг may edit any field and save it to database</div>
                            </li>
                            <li>
                                <div> Delete any user <br/> The user wil be deleted from database</div>
                            </li>
                            <li>
                                <div>
                                    Search user <br/> You may search any user using search bar by name, by e-mail or by
                                    phone
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="headerName text-info">Used stack technology</p>
                <div className="row contentItem mx-1">
                    <ul className="my_ul">
                        <li>
                            <div>Javascript</div>
                        </li>
                        <li>
                            <div>React JS</div>
                        </li>
                        <li>
                            <div>Redux</div>
                        </li>
                        <li>
                            <div>Bootstrap</div>
                        </li>
                        <li>
                            <div>Google Realtime database</div>
                        </li>
                    </ul>
                </div>
                <p className="headerName text-info">
                    Visit our <a className="text-decoration-none" href='https://github.com/AAPrikhodko/userscontrol'
                                 target="_blank"> GitHub</a> page
                </p>
            </div>
        </div>
    )
}

export default Faq