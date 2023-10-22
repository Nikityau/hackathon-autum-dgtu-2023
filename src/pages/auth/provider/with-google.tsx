import React, {useEffect} from 'react';
import {GOOGLE_CLIENT_ID} from "../../../shared/api/googl.vars";
import axios from "axios";
import {useLocation} from "react-router-dom";

const WithGoogle = () => {



    useEffect(() => {
        /*const _onInit = auth2 => {
            console.log('init OK', auth2)
        }
        const _onError = err => {
            console.log('error', err)
        }

        window['gapi'].load('auth2', function() {
            window['gapi'].auth2
                .init({ // не забудьте указать ваш ключ в .env
                    client_id: GOOGLE_CLIENT_ID,
                })
                .then(_onInit, _onError)
        })*/
    }, [])

    const signIn = async () => {
        const signupWithGoogle = async () => {
            try {
                const url = `http://185.244.51.249:8080/api/v1/auth/o/google-oauth2/?redirect_uri=http://185.244.51.249:8080`
                const res = await axios.get(url)
                console.log(res.data)

               /* const auth_url = res.data['authorization_url']
                const auth = await axios.get(auth_url)
                console.log(auth.data)*/

                window.location.replace(res.data.authorization_url)

            } catch (err) {
                console.log("Error logging in")
            }
        }


        await signupWithGoogle()
       /* const config = {
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            }
        };

        const details = {
            'state': '',
            'code': ''
        }

        const formBody = Object.keys(details).map(key=> encodeURIComponent(key)+'='+encodeURIComponent(details[key])).join('&')

        try{
            const res = await axios.post(`http://localhost:3000/auth/o/google-oauth2/?${formBody}`, config);
            console.log(res.data)
        }catch(err){
            console.log(err)
        }*/

        /*const auth2 = window['gapi'].auth2.getAuthInstance()
        auth2.signIn().then(googleUser => {

            // метод возвращает объект пользователя
            // где есть все необходимые нам поля
            const profile = googleUser.getBasicProfile()
            console.log('ID: ' + profile.getId()) // не посылайте подобную информацию напрямую, на ваш сервер!
            console.log('Full Name: ' + profile.getName())
            console.log('Given Name: ' + profile.getGivenName())
            console.log('Family Name: ' + profile.getFamilyName())
            console.log('Image URL: ' + profile.getImageUrl())
            console.log('Email: ' + profile.getEmail())

            // токен
            const id_token = googleUser.getAuthResponse().id_token
            console.log('ID Token: ' + id_token)
        })*/
    }

    const signOut = () => {
        const auth2 = window['gapi'].auth2.getAuthInstance()
        auth2.signOut().then(function() {
            console.log('User signed out.')
        })
    }


    return (
        <div>
            <button onClick={() => signIn()}>
                Google Log in
            </button>
        </div>
    );
};

export default WithGoogle;