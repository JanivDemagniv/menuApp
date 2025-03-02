import React, { createContext, useContext, useEffect, useState } from 'react'

const menuData = createContext();

export default function MenuProvider({ children }) {
    const [menu, setMenu] = useState([])


    return (
        <menuData.Provider value={{ menu, setMenu }}>{children}</menuData.Provider>
    )
}

export const useCurrentMenu = () => {
    const context = useContext(menuData);
    if (!context) {
        throw new Error('you can only call useCurrentMenu under the MenuProvider children')
    };
    return context
}