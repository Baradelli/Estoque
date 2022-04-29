import React, { useState, createContext, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextData {
    signed: any;
    id: Number;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
    const [signed, setSigned] = useState(async () => {
        const token = await AsyncStorage.getItem('token');

        return token;
    });

    return(
        <AuthContext.Provider value={{ signed, id: 0 }}>
            { children }
        </AuthContext.Provider>
    )
}

export function useAutenticacao(): any {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAutenticacao não está no seu Provider');
    }

    return context;
}
