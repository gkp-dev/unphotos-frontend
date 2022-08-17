import React, { useState } from 'react';
import { Link } from "react-router-dom";
import postToken from '../helpers/postToken';





function Connexion() {

    //Set user input 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPop, setPop] = useState(false);
    const [isError, setError] = useState(false);
    
    //Set Popup
    const show = () => {
        setPop(true)
    }

    const hide = () => {
        setPop(false)
    }

    //Set Error Popup
    const showErr = () => {
        setError(true)
    }

    const hideErr = () => {
        setError(false)
    }
    
    
    
    //Set user input when he types something
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    //Send the form to the server
    const sendFormValue = async (e) => { 
        e.preventDefault();

    const data = {
        email:email.toLowerCase(),
        password
        }   
    
    //Post user info
    const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/auth`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
        const result = await response.json()

    const { token } = result;
    

        
        //ResetForm
        if (response.status === 200) {
            const resetForm = () => {
            setEmail("");
            setPassword("");
        }
            resetForm()
           postToken(token);
            //Show popup
           show()
        }else {
            //Show error message
            showErr()
        }

        
        
}

    return (
        <React.Fragment>
        <section className="grid justify-items-center items-center h-screen w-screen bg-gray-100">
            {/* */}
            <div className="container-element max-w-2xl p-4">
                {/* */}
                <div className="text-center">
                    <div className="flex justify-center">
                        <div className="h-14 w-14  bg-cover bg-logo mr-2"></div><span className="font-satisfy text-2xl relative top-4">Unphotos</span>
                    </div>
                    <h2 className="text-4xl font-bold mb-4">Connectez-vous!</h2>
                </div>
                {/* */}
                <form onSubmit={sendFormValue} className="shadow p-5 rounded-lg my-4 bg-white">
                     {/* */}
                    <label className="text-base font-semibold" for="email">Email:</label><br/>
                    <input id="email" type="email" required  minLength="3" value={email} onChange={handleEmail} maxLength="120" className=" h-10 mt-2 mb-6 w-full border border-gray-300 p-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"></input>
                    {/* */}
                    <label className="text-base font-semibold" for="password">Mot de passe:</label><br/>
                    <input id="password" type="password" required  minLength="8" value={password} onChange={handlePassword} maxLength="20" className=" h-10 mb-6 mt-2 w-full border border-gray-300 p-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"></input>
                    {/* */}
                    <button type="submit"  className="mb-4 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                    </svg>
                    </span>
                    Se connectez
                    </button>
                    {/* */}
                    <p className="underline text-base cursor-pointer text-indigo-500">Vous avez oubliez votre mot de passe! Cliquez ici</p>
                    <br/>
                    <Link to="/" className="underline text-base cursor-pointer text-indigo-300 hover:text-indigo-500"> Pas de compte? Inscrivez-vous!</Link>
              </form>
            </div>
            
            </section>
            {isPop ? <Popup hide={hide} /> : null}
            {isError ? <ErrorPopup hide={hideErr}/> : null}
        </React.Fragment>
    )
}

export default Connexion

function Popup({ hide}) {
    return (
        <div className=" fixed top-0 left-0 w-full h-full grid justify-items-center items-center z-10">
        <div id="popup" className="w-60 h-52 rounded-lg  bg-white shadow">
            <div className="w-full h-full relative grid justify-items-center p-2">
                <p className="text-center relative top-5 font-satisfy text-3xl mb-6">Vous êtes maintenant connecté sur Unphotos</p>
                <Link to="/home" className="h-8 w-14 text-center bg-green-400 rounded-xl cursor-pointer" onClick={hide}>Okay</Link>
            </div>
            
            </div>
        </div>
    )
}

function ErrorPopup({hide}) {
    return (
        <div className=" fixed top-0 left-0 w-full h-full grid justify-items-center items-center z-10">
        <div id="popup" className="w-60 h-48 rounded-lg  bg-white shadow ring-2 ring-red-400">
            <div className="w-full h-full relative grid justify-items-center p-2">
                <p className="text-center relative top-5 font-satisfy text-3xl mb-4">Email ou mot de passe invalide...</p>
                <div className="h-8 w-14 text-center bg-red-400 rounded-xl cursor-pointer" onClick={hide}>Okay</div>
            </div>
            
            </div>
        </div>
    )
}
