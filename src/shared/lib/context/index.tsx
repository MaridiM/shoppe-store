'use client';

import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext<any>(undefined);

export const useAppContext = () => {
    return useContext(AppContext);
};

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState([]);
    const [favorited, setFavorited] = useState([]);

    return (
        <AppContext.Provider value={{ cart, setCart, favorited, setFavorited }}>
            {children}
        </AppContext.Provider>
    );
};
