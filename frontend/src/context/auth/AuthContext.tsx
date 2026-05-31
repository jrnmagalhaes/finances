import { createContext, useContext, useState, type ReactNode } from 'react';
import { authService } from '../../services/auth/authService';

interface AuthContextValue {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(() => authService.getToken());

  const login = (newToken: string) => {
    authService.setToken(newToken);
    setToken(newToken);
  };

  const logout = () => {
    authService.removeToken();
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
