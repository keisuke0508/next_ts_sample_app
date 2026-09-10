import type { Metadata } from "next";
import './globals.css';
import '@/extensions/Number'
import { authFetchCurrentUser } from '@/actions/auth'
import styles from '@/app/layout.module.scss';
import AppHeader from '@/app/components/layouts/AppHeader';
import AppFooter from '@/app/components/layouts/AppFooter';

export const metadata: Metadata = {
  title: "Sample Next App",
  description: "sample next app.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const { user } = await authFetchCurrentUser();
  return (
    <html lang="ja">
      <body>
        <AppHeader user={user} />
        <div className={styles.root}>{children}</div>
        <AppFooter />
      </body>
    </html>
  );
}
