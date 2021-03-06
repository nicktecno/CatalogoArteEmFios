import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { useAuth } from '../hooks/AuthContext';

const Routes: React.FC = () => {
  const { usuario, loading } = useAuth();

  if (loading) {
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#999" />
    </View>;
  }
  return usuario ? <AppRoutes /> : <AuthRoutes />;

  // aqui é o coraçao do redirecionamento, ele redireciona por essa condiçao ao inves de usar o redirect na web
};
export default Routes;
