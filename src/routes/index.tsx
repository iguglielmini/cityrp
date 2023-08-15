import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {useAuth} from '@/hooks';
import {AppRoutes} from './app.routes';
import { Login } from '@/pages';

const Routes: React.FC<React.PropsWithChildren> = () => {
  const {logged} = useAuth();
  
  return (
    <NavigationContainer>
      {logged && <AppRoutes />}
      {!logged && <Login />}
    </NavigationContainer>
  );
};

export default Routes;