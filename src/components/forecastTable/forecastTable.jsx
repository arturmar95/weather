import { useSelector } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import { ForecastBlock } from '../forecastBlock'
import styles from './forecastTable.module.css'

export const ForecastTable = () => {
  const { forecast, coords } = useSelector(s => s)
  return !isEmpty(forecast)
    ? (
      <div className={styles.container}>

        <h2 className={styles.header}>
          {`Weather forecast for the next ${forecast.length} days`}
        </h2>

        <div className={styles.table}>
          {forecast.map((item, idx) => (
            <ForecastBlock
              item={item}
              key={`block-${idx}`}
            />
          ))}
        </div>

      </div>
    )
    : (
      <h2>
        {coords
          ? 'Something went wrong...'
          : 'Allow access to your geolocation or enter coordinates'
        }
      </h2>
    )
}