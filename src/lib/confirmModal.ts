import { Subject } from 'rxjs';

type ConfirmModal = {
  message: string;
  okText: string;
  cancelText: string;
  onClick?: () => Promise<void>;
};

const confirmModalSubject = new Subject<ConfirmModal>();

export const confirmModal = {
  show: (
    message: string,
    okText: string = 'OK',
    cancelText: string = 'キャンセル',
    onClick: () => Promise<void> = async () => {},
  ) => {
    confirmModalSubject.next({ message, okText, cancelText, onClick });
  },
};

export { confirmModalSubject };
