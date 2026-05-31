import { Button, Modal } from '../../atoms';

type ConfirmDialogProps = {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  loading?: boolean;
};

const ConfirmDialog = ({ title, message, onConfirm, onCancel, loading }: ConfirmDialogProps) => {
  return (
    <Modal title={title} onClose={onCancel}>
      <p className="text-gray-600 mb-6">{message}</p>
      <div className="flex justify-end gap-2">
        <Button variant="secondary" onClick={onCancel} disabled={loading}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={onConfirm} disabled={loading}>
          {loading ? 'Excluindo…' : 'Excluir'}
        </Button>
      </div>
    </Modal>
  );
};

export { ConfirmDialog };
