
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../../atoms";
import { InputForm } from "../../molecules";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "O e-mail é obrigatório"),
  password: z
    .string()
    .min(1, "A senha é obrigatória")
});

type LoginFormData = z.infer<typeof loginSchema>;

type LoginFormProps = {
  onSubmit: (data: LoginFormData) => void | Promise<void>;
  isLoading?: boolean;
};

const LoginForm = ({ onSubmit, isLoading = false }: LoginFormProps) => {
  const methods = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="space-y-4 w-full"
        noValidate
      >
        <InputForm
          label="E-mail"
          type="text"
          {...methods.register("email")}
        />
        <InputForm
          label="Senha"
          type="password"
          {...methods.register("password")}
        />
        <div className="flex justify-center pt-2">
          <Button type="submit" disabled={isLoading} className="w-full justify-center">
            {isLoading ? "Entrando..." : "Entrar"}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export { LoginForm };
export type { LoginFormData };

