import React, { useState, useEffect } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import api from '../../config/axios';
import 'dotenv/config';

import './styles.css';

export default function MenuLogin({ toggle, setToggle }) {
    const [login, setLogin] = useState(null);
    const [modifyUser, setModifyUser] = useState();

    const responseFacebook = response => {
        const { name, email, userID, graphDomain } = response;
        const { url } = response.picture.data;
        setLogin({ name, email, userID, urlImg: url, graphDomain })
    }
    const responseGoogle = response => {
       const {name, email, googleId, imageUrl} = response.profileObj;
       console.log('print profileObj')
       console.log(response);
       setLogin({name, email, userID: googleId, urlImg: imageUrl, graphDomain: 'google'})
    }

    function showMenuLogin() {
        if (toggle.menu) {
            return 'flex'
        } else {
            return 'none'
        }
    }

    useEffect(() => {
        if (login !== null) {
            recordUser(login)
        }
    }, [login])

    async function recordUser() {
        const response = await api.post('/setUser', login)
        console.log('verifica se gravou os dados no banco corretamente')
        console.log('retorno => ', response.data)
    }

    return (
        <div className="containerMenuLogin" style={{ display: showMenuLogin(), transition: `display 3s` }}>
            <div className="MenuLoginHeader">
                <label>Escolha a rede social que mais gosta!</label>
            </div>
            <div className="containerOptionsLogin">
                <div className="itemOptionsLogin">
                    <FacebookLogin
                        appId={process.env.REACT_APP_API_ID_FACEBOOK}
                        autoLoad={false}
                        fields="name, email, picture"
                        scope="public_profile, email, user_birthday"
                        callback={responseFacebook}
                        cssClass="btnLoginFacebook"
                        textButton="facebook"
                    />
                </div>
                <div className="itemOptionsLogin">
                    <GoogleLogin
                        clientId={process.env.REACT_APP_API_ID_GOOGLE}
                        render={renderProps => (
                            <button className="btnLoginGoogle" onClick={renderProps.onClick} disabled={renderProps.disabled}>Gmail</button>
                        )}
                        buttonText="LOGIN WITH GOOGLE"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        autoLoad={false}
                    />
                </div>
                <div className="itemOptionsLogin">
                    <button className="btnLoginGithub">Github</button>
                </div>
                <div className="itemOptionsLogin">
                    <button className="btnLoginTwitter">Twitter</button>
                </div>
            </div>
        </div>
    );
}
