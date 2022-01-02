import { useEffect } from 'react'
import { getUserLocationForecast } from './redux/reducer'
import { useSelector, useDispatch } from 'react-redux'
import { ForecastTable } from './components/forecastTable'
import { Location } from './components/location'
import { LocationForm } from './components/locationForm'

const Main = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector(s => s)

  useEffect(() => {
    dispatch(getUserLocationForecast())
  }, [dispatch])

  return (
    <div className='wrapper'>
      <h1>Weather forecast</h1>
      <main>
        {!loading
          ? (
            <>
              <Location />
              <LocationForm />
              <ForecastTable />
            </>
          )
          : <h2>Loading...</h2>
        }
      </main>
    </div>
  )
}

export default Main