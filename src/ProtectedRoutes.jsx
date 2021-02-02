import React, { useState,useEffect} from 'react'
import { Redirect } from 'react-router-dom'

function ProtectedRoutes(props) {
    const [user, setUser] = useState({})
    const [token, setToken] = useState(null)
    const[isLoading, setLoading]= useState(true)
    const Component = props.component

    useEffect(() => {
        //
            const getUser = async () => {
        
                //Retreive Token
                const sessionToken = await sessionStorage.getItem('token')
                setToken(sessionToken)

                //Fetch User    
                const response = await fetch(`${process.env.REACT_APP_URL}api/users/me`, {
                    method: 'get',
                    headers: new Headers({
                        "x-auth-token": `${sessionToken}`
                    })
                })
                const result = await response.json();
                setUser(result)
                setLoading(false)
       }
        getUser()
       
    }, [])
    
    
    if (isLoading) {
        return null
    }
    //Token
    if (!token || Object.keys(user).length !== 2) {
        return <Redirect to={{ pathname: '/connexion' }} />
    }
    return <Component/>

}

export default ProtectedRoutes
