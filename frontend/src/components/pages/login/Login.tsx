import { useState } from "react";
import { Card } from "../../atoms";
import { useNavigate } from "react-router-dom";
import { LoginForm, type LoginFormData } from "../../organisms";
import { useAuth } from "../../../context";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleFormSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setErrorMsg(null);
    try {
      const res = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email: data.email, password: data.password }),
        headers: { 'Content-Type': 'application/json' }
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Credenciais inválidas");
      }

      const resData = await res.json();
      login(resData.token);
      navigate('/');
    } catch (err: any) {
      setErrorMsg(err.message || "Erro ao realizar o login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-dvh flex items-center justify-center">
      <Card className="min-w-2xs max-w-sm w-full p-6">
        <h1 className="text-center mb-6">Login</h1>
        {errorMsg && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded text-red-500 text-sm text-center">
            {errorMsg}
          </div>
        )}
        <LoginForm onSubmit={handleFormSubmit} isLoading={isLoading} />
      </Card>
    </div>
  );
};

export { Login };

