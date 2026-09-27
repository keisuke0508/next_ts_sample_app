import { toast } from '@/lib/toast';

export function installAppPlugin() {
  globalThis.$toast = toast;
}
