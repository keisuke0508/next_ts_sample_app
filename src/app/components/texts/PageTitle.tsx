import styles from '@/app/components/texts/PageTitle.module.scss'

type Props = {
  title: string;
}

export default function PageTitle({ title }: Props) {
  return <h2 className={styles.title}>{title}</h2>
}