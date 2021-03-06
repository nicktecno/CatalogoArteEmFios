import React from 'react';

import { AuthProvider } from './AuthContext';

// Esse componente serve para englobar todos os contextos em um só para importar no App
const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProvider;
