import { Button } from '../../atoms';
import type { User } from '../../../lib/users';
import { Pencil, Trash2 } from 'lucide-react';

type UsersTableProps = {
  users: User[];
  loading: boolean;
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
};

const UsersTable = ({ users, loading, onEdit, onDelete }: UsersTableProps) => {
  if (loading) {
    return <p className="text-center text-gray-500 py-8">Carregando…</p>;
  }

  if (users.length === 0) {
    return <p className="text-center text-gray-500 py-8">Nenhum usuário encontrado.</p>;
  }

  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="border-b">
          <th className="py-2 px-3 font-semibold ">ID</th>
          <th className="py-2 px-3 font-semibold ">Nome</th>
          <th className="py-2 px-3 font-semibold ">E-mail</th>
          <th className="py-2 px-3" />
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} className="border-b hover:bg-gray-50/50">
            <td className="py-2 px-3 text-gray-400 text-sm">{user.id}</td>
            <td className="py-2 px-3">{user.name}</td>
            <td className="py-2 px-3">{user.email}</td>
            <td className="py-2 px-3">
              <div className="flex gap-1 justify-end">
                <Button size="icon" variant="ghost" onClick={() => onEdit(user)}>
                  <Pencil />
                </Button>
                <Button size="icon" variant="ghost" onClick={() => onDelete(user)}>
                  <Trash2 className='stroke-red-500' />
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { UsersTable };
