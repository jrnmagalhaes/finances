import { useState, useMemo } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../../atoms';
import { InputForm } from '../inputForm';
import type { UserPayload } from '../../../lib/users';

const baseSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('E-mail inválido'),
  password: z.string().optional(),
});

const createSchema = baseSchema.extend({
  password: z.string().min(6, 'Senha deve ter ao menos 6 caracteres'),
});

type FormValues = z.infer<typeof baseSchema> & { password?: string };

type UserFormProps = {
  initial?: { name: string; email: string };
  onSubmit: (payload: UserPayload) => Promise<void>;
  onCancel: () => void;
  isEdit?: boolean;
};

const UserForm = ({ initial, onSubmit, onCancel, isEdit = false }: UserFormProps) => {
  const [serverError, setServerError] = useState('');

  const schema = useMemo(() => (isEdit ? baseSchema : createSchema), [isEdit]);

  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: initial?.name ?? '', email: initial?.email ?? '', password: '' },
  });

  const { handleSubmit, formState: { isSubmitting } } = methods;

  const onValid = async (data: FormValues) => {
    setServerError('');
    try {
      const payload: UserPayload = { name: data.name, email: data.email };
      if (data.password) payload.password = data.password;
      await onSubmit(payload);
    } catch (err) {
      setServerError(err instanceof Error ? err.message : 'Erro inesperado.');
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onValid)} className="flex flex-col gap-4">
        <InputForm {...methods.register('name')} label="Nome" placeholder="Nome completo" />
        <InputForm {...methods.register('email')} type="email" label="E-mail" placeholder="email@exemplo.com" />
        <InputForm
          {...methods.register('password')}
          type="password"
          label={isEdit ? 'Nova senha (opcional)' : 'Senha'}
          placeholder={isEdit ? 'Deixe em branco para não alterar' : '••••••••'}
        />
        {serverError && <p className="text-red-500 text-sm">{serverError}</p>}
        <div className="flex justify-end gap-2 mt-2">
          <Button variant="secondary" onClick={onCancel} type="button">
            Cancelar
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Salvando…' : isEdit ? 'Salvar' : 'Criar'}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export { UserForm };
