import { useSelector } from 'react-redux'
import styles from './location.module.css'

export const Location = () => {
  const { location } = useSelector(s => s)
  return (
    <div className={styles.location}>
      <div className={styles.country}>
        <span>Country:</span>
        {' '}
        {location?.country || 'Unknown'}
      </div>
      <div className={styles.city}>
        <span>City:</span>
        {' '}
        {location?.name || 'Unknown'}
      </div>
    </div>
  )
}