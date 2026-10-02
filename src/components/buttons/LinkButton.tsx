import Link from "next/link";
import styles from '@/components/buttons/LinkButton.module.scss'

type Props = {
  text: string;
  href: string;
}

export default function LinkButton({ text, href }: Props) {
  return (
    <Link href={href} className={styles.button}>{text}</Link>
  );
}