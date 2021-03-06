/* eslint-disable camelcase */
import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

interface User {
  id: string;
  nome: string;
  email: string;
  avatar_url: string;
}

interface AuthState {
  token: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  usuario: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  // eslint-disable-next-line @typescript-eslint/ban-types
  usuario: User;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
// esse as AuthContext é só para tipar, porque de inicio na autenticacao ele nao tem nenhum valor
// abaixo sera o data recebido la no signin
const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState); // toda essa logica só será inicializada quando o usuario atualizar a página
  const [loading, setLoading] = useState(true);
  // loading para nao dar um flash no redirecionamento de autenticaçao ou não la do index routes

  // no if foi necessario colocar o [1] devido ser um requisito di asyncStorage
  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@GoBarber:token',
        '@Gobarber:user',
      ]);

      if (token[1] && user[1]) {
        api.defaults.headers.authorization = `Bearer ${token[1]}`;

        setData({ token: token[1], usuario: JSON.parse(user[1]) });
      }
      setLoading(false);
    }
    loadStorageData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });
    const { token, usuario } = response.data;
    console.log(response.data);

    await AsyncStorage.setItem('@GoBarber:token', token);
    await AsyncStorage.setItem('@GoBarber:usuario', JSON.stringify(usuario));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, usuario });
  }, []);
  // @GoBarber é um prefixo

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem('@Gobarber:token');
    await AsyncStorage.removeItem('@GoBarber:user');

    setData({} as AuthState);
  }, []);
  const updateUser = useCallback(
    async (usuario: User) => {
      await AsyncStorage.setItem('@GoBarber:usuario', JSON.stringify(usuario));
      setData({
        token: data.token,
        usuario,
      });
    },
    [setData, data.token],
  );

  return (
    <AuthContext.Provider
      value={{ usuario: data.usuario, loading, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
    // ao invé de passar todo o data do do useState, ele passou apenas o user do data onde ele apelidou de user
  ); // o children é tudo o que o AuthContext receber como filho irá aparecer no contexto
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth precisa ser usado com o AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
