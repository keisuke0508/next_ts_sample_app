import { Subject } from 'rxjs';

type Toast = {
  type: 'success' | 'error';
  message: string;
}

const toastSubject = new Subject<Toast>();

export const toast = {
  success: (message: string) => {
    toastSubject.next({ type: 'success', message });
  },
  error: (message: string) => {
    toastSubject.next({ type: 'error', message });
  }
}

export { toastSubject };