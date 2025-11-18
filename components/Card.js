import styles from '../styles/Card.module.css'

export default function Card({ title, description, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}