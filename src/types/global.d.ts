import type { toast } from '@/lib/toast';

declare global {
  var $toast: typeof toast;
}

export {};