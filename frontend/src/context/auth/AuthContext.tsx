import { createContext, useContext, useState, type ReactNode } from 'react';
import { authStorage } from '../../lib/auth/authStorage';

interface AuthContextValue {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(() => authStorage.getToken());

  const login = (newToken: string) => {
    authStorage.setToken(newToken);
    setToken(newToken);
  };

  const logout = () => {
    authStorage.removeToken();
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated: token !== null, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextValue => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
