import { toast } from '@/lib/toast';
import { confirmModal } from '@/lib/confirmModal';

export function installAppPlugin() {
  globalThis.$toast = toast;
  globalThis.$confirmModal = confirmModal;
}
