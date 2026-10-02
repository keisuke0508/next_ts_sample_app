import type { toast } from '@/lib/toast';
import type { confirmModal } from '@/lib/confirmModal';

declare global {
  var $toast: typeof toast;
  var $confirmModal; typeof confirmModal;
};

export {};