import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {

    const [currentUser, setCurrentUser] = useState(localStorage.getItem('currentUser') || null);
    const [userEmail, setUserEmail] = useState(localStorage.getItem('userEmail') || '');
    const [userUid, setUserUid] = useState(localStorage.getItem('userUid') || '');

    
    const logOutCurrentUser = () => {
      setCurrentUser(null)
      setUserEmail('')
      setUserUid('')
      localStorage.clear();
    }

    const setAuthCredentials = (email, uid) => {
        localStorage.setItem('userUid', uid)
        localStorage.setItem('userEmail', email)
        setUserUid(uid);
        setUserEmail(email)
    }

  return (
    <AuthContext.Provider value={{currentUser, setCurrentUser, logOutCurrentUser, 
                                  setAuthCredentials, userEmail, userUid}}>
        {props.children}
    </AuthContext.Provider>
  )
}
