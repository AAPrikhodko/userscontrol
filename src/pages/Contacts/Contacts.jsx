import React from "react";
import ava from "../../img/ava.jpg"
import "./Contacts.css"


const Contacts = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <h1 className="text-center m-5 text-info"> Contacts</h1>
                <div className="row contentItem mx-1 d-flex">
                    <div className="col-6">
                        <img className="contactAva" src={ava} alt="photo"/>
                    </div>
                    <div className="col-6">
                        <p className="text-info headerName pt-3 pr-4 text-uppercase">Andrey Prikhodko</p>
                        <p className="text-info text-right">frontend web developer</p>


                        <ul className="contact_ul text-left">
                            <li className="text-primary"><i className="bi bi-telegram"/> @prand85</li>
                            <li className="text-primary"><i className="bi bi-whatsapp"/> +79508699555</li>
                            <li className="text-primary"><i className="bi bi-github"/> <a
                                href="https://github.com/AAPrikhodko/userscontrol" target="_blank">GitHub</a></li>
                            <li className="text-primary"><i className="bi bi-facebook"/> <a
                                href="https://www.facebook.com/profile.php?id=100006505813589"
                                target="_blank">Facebook</a></li>
                            <li className="text-primary"><i className="bi bi-twitter"/> <a
                                href="https://twitter.com/Andrey60845146" target="_blank">Twitter</a></li>
                            <li className="text-primary"><i className="bi bi-envelope-fill"/> prand85@yandex.ru</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contacts