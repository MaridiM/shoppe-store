'use client';

import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext<any>(undefined);

export const useAppContext = () => {
    return useContext(AppContext);
};

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState([]);

    return <AppContext.Provider value={{ cart, setCart }}>{children}</AppContext.Provider>;
};
