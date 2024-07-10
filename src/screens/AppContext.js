import React, { createContext, useState } from 'react';

export const AppContext = createContext();
export const AppProvider = (props) => {
    const { children } = props;
    const [isLogin, setIsLogin] = useState(true);
    return (
        <AppContext.Provider
            value={{
                isLogin, setIsLogin,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
