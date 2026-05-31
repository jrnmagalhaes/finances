import { useEffect, useState } from 'react';
import { Button, Modal } from '../../atoms';
import { ConfirmDialog, UserForm } from '../../molecules';
import { UsersTable } from '../../organisms';
import { usersApi, type User, type UserPayload } from '../../../lib/users';

type ModalState =
  | { type: 'create' }
  | { type: 'edit'; user: User }
  | { type: 'delete'; user: User }
  | null;

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState<ModalState>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      setUsers(await usersApi.list());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const handleCreate = async (payload: UserPayload) => {
    await usersApi.create(payload);
    setModal(null);
    load();
  };

  const handleEdit = async (payload: UserPayload) => {
    if (modal?.type !== 'edit') return;
    await usersApi.update(modal.user.id, payload);
    setModal(null);
    load();
  };

  const handleDelete = async () => {
    if (modal?.type !== 'delete') return;
    setDeleteLoading(true);
    try {
      await usersApi.delete(modal.user.id);
      setModal(null);
      load();
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Usuários</h1>
        <Button onClick={() => setModal({ type: 'create' })}>Novo usuário</Button>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <UsersTable
          users={users}
          loading={loading}
          onEdit={(user) => setModal({ type: 'edit', user })}
          onDelete={(user) => setModal({ type: 'delete', user })}
        />
      </div>

      {modal?.type === 'create' && (
        <Modal title="Novo usuário" onClose={() => setModal(null)}>
          <UserForm onSubmit={handleCreate} onCancel={() => setModal(null)} />
        </Modal>
      )}

      {modal?.type === 'edit' && (
        <Modal title="Editar usuário" onClose={() => setModal(null)}>
          <UserForm
            initial={{ name: modal.user.name, email: modal.user.email }}
            onSubmit={handleEdit}
            onCancel={() => setModal(null)}
            isEdit
          />
        </Modal>
      )}

      {modal?.type === 'delete' && (
        <ConfirmDialog
          title="Excluir usuário"
          message={`Tem certeza que deseja excluir "${modal.user.name}"? Esta ação não pode ser desfeita.`}
          onConfirm={handleDelete}
          onCancel={() => setModal(null)}
          loading={deleteLoading}
        />
      )}
    </div>
  );
};

export { Users };
