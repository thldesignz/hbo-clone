import React, {useContext, useState } from 'react';

export  const StateContext = React.createContext();

export function useStateContext(){
    return useContext(StateContext)
}

export function HBOProvider({children}){
    const [user, setUser] = useState('')
    const defaultUserImg = 'https://uifaces.co/our-content/donated/VUMBKh1U.jpg'
    const createUserAction = (e) => {
        setUser(e.target.value)
    }

    return(
        <StateContext.Provider
        value={{ 
            user, 
            createUserAction,
            defaultUserImg
         }}>
             {children}
         </StateContext.Provider>
    )
}