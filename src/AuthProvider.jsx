import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from './firebase.init';


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // create User ---

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
        
    }

    // login user

    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
        
    }

    // log out user 

    const logOut = () =>{
        return signOut(auth)
    }


    // Onauth change state -----


    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
        })

        return () =>{
            unSubscribe()
        }
    }, [])


const name = 'Omer'

    const authInfo = {
        name,
        createUser,
        loginUser,
        logOut,
        user,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;