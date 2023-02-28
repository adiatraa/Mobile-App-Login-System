// App.js

import React, {useCallback, useContext, useEffect, useState} from 'react';
import {AuthContext} from './src/context/AuthContext';
import * as Keychain from 'react-native-keychain';
import Spinner from './src/components/Spinner';
import HomePage from './src/scenes/HomePage';
import LoginPage from './src/scenes/LoginPage';

const App = () => {
  const authContext = useContext(AuthContext);
  const [status, setStatus] = useState('loading');

  const loadJWT = useCallback(async () => {
    try {
      const value = await Keychain.getGenericPassword();
      const jwt = JSON.parse(value.password);

      authContext.setAuthState({
        accessToken: jwt.accessToken || null,
        refreshToken: jwt.refreshToken || null,
        authenticated: jwt.accessToken !== null,
      });
      setStatus('success');
    } catch (error) {
      setStatus('error');
      console.log(`Keychain Error: ${error.message}`);
      authContext.setAuthState({
        accessToken: null,
        refreshToken: null,
        authenticated: false,
      });
    }
  }, []);

  useEffect(() => {
    loadJWT();
  }, [loadJWT]);

  if (status === 'loading') {
    return <Spinner />;
  }

  if (authContext?.authState?.authenticated === false) {
    return <HomePage />;
  } else {
    return <LoginPage />;
  }
};

export default App;
