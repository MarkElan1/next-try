import Link from "next/link";
import styles from '../styles/A.module.css'

export default function A({text, href}) {
  return (
    <Link href={href} style={{textDecoration: 'none'}}>
      <span className={styles.link}>{text}</span>
    </Link>
  )
}