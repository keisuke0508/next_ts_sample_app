import type { Metadata } from "next";
import './globals.css';
import '@/extensions/Number'
import styles from '@/app/layout.module.scss';
import AppHeader from '@/app/components/layouts/AppHeader';
import AppFooter from '@/app/components/layouts/AppFooter';

export const metadata: Metadata = {
  title: "Sample Next App",
  description: "sample next app.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja">
      <body>
        <AppHeader />
        <div className={styles.root}>{children}</div>
        <AppFooter />
      </body>
    </html>
  );
}
