import { Button, Card, Input } from "../../atoms";

const Login = () => {
  return (
    <div className="w-full h-dvh flex items-center justify-center">
      <Card className="space-y-4 min-w-2xs">
        <h1 className="text-center">Login</h1>
        <Input name="login" label="Login" />
        <Input name="password" label="Senha" type="password" />
        <div className="flex justify-center">
          <Button>Login</Button>
        </div>
      </Card>
    </div>
  );
};

export { Login };
