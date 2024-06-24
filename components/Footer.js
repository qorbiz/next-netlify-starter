import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/qorbizlogo.png" alt="QORBIZ Logo" className={styles.logo} />
      </footer>
    </>
  )
}
