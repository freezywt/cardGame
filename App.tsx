import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes/index';
import {AuthProvider} from './src/contexts/AuthContext';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
