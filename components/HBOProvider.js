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
    const [sideNavOpen, setSideNavOpenAction] = useState(false)
    const [accountModalOpen, setAccountModalOpenAction] = useState(false)
    const [searchModalOpen, setSearchModalOpenAction] = useState(false)

    return(
        <StateContext.Provider
        value={{ 
            user, 
            createUserAction,
            defaultUserImg,
            sideNavOpen,
            setSideNavOpenAction,
            accountModalOpen,
            setAccountModalOpenAction,
            searchModalOpen,
            setSearchModalOpenAction
         }}>
             {children}
         </StateContext.Provider>
    )
}