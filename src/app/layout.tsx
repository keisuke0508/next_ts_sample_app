import type { Metadata } from "next";
import './globals.css';
import '@/extensions/Number'
import { authFetchCurrentUser } from '@/actions/auth'
import styles from '@/app/layout.module.scss';
import AppPlugin from '@/components/layouts/AppPlugin';
import AppHeader from '@/components/layouts/AppHeader';
import AppFooter from '@/components/layouts/AppFooter';
import Toast from '@/components/toasts/Toast';
import ConfirmModal from '@/components/modals/ConfirmModal';

export const metadata: Metadata = {
  title: "Sample Next App",
  description: "sample next app.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const { user } = await authFetchCurrentUser();
  return (
    <html lang="ja">
      <body>
        <AppPlugin />
        <AppHeader user={user} />
        <div className={styles.root}>{children}</div>
        <AppFooter />
        <Toast />
        <ConfirmModal />
      </body>
    </html>
  );
}
