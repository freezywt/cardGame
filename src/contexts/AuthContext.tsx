/* eslint-disable react-hooks/exhaustive-deps */
import React, {createContext, useState, ReactNode, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextType = {
  nickname: any | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (nickname: any) => void;
  logout: () => void;
  isLogged: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType>({
  nickname: null,
  isAuthenticated: false,
  loading: false,
  login: () => {},
  logout: () => {},
  isLogged: false,
});

export function AuthProvider({children}: AuthProviderProps) {
  const [nickname, setNickname] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const asyncstoragekey = '@pokemonx';

  const isAuthenticated = !!nickname;

  useEffect(() => {
    async function getUser() {
      if (nickname === null) {
        const item = await AsyncStorage.getItem(asyncstoragekey);
        setNickname(item);
      }
    }
    getUser();
  }, []);

  const login = async (nickname: any) => {
    setLoading(true);
    setNickname(nickname);
    await AsyncStorage.setItem(asyncstoragekey, nickname.nickname);
    setLoading(false);
  };

  const logout = () => {
    setNickname(null);
  };

  const isLogged = !!nickname;

  return (
    <AuthContext.Provider
      value={{nickname, login, logout, isLogged, loading, isAuthenticated}}>
      {children}
    </AuthContext.Provider>
  );
}
