import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../../Firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app);

const EmailSignUp = (email , password) =>{
    return createUserWithEmailAndPassword(auth , email , password)
}
const EmailSignIn = (email , password) =>{
    return signInWithEmailAndPassword(auth ,email , password)
}

const Context = ({children}) => {
    const [user , setUser] = useState(null)



    const obj = {
        EmailSignUp , user , EmailSignIn 

    }
    return (
        <AuthContext.Provider value={obj} >
            {children}
        </AuthContext.Provider>
    )
};

export default Context;