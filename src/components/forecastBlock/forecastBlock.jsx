import styles from './forecastBlock.module.css'
import format from 'date-fns/format'

export const ForecastBlock = ({ item }) => {
  const temp = Math.round(item?.main?.temp)
  const weather = item?.weather[0]?.main
  const date = new Date(item?.dt_txt)
  const formattedDate = format(date, 'MMMM dd, yyyy');
  return (
    <div className={styles.block}>
      <div>
        {weather}
      </div>
      <div className={styles.temp}>
        {temp >= 0 ? `+${temp}` : temp}
      </div>
      <div className={styles.date}>
        {formattedDate}
      </div>
    </div>
  )
}