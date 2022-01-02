import { getForecast } from '../api/forecast'
import isEmpty from 'lodash/isEmpty'

export const SET_FORECAST = 'SET_FORECAST'
export const SET_LOCATION = 'SET_LOCATION'
export const SET_LOADING = 'SET_LOADING'
export const SET_COORDS = 'SET_COORDS'

const initialState = {
  loading: false,
  forecast: null,
  location: null,
  coords: null,
}

export const setForecast = forecast => ({
  type: SET_FORECAST, forecast
})

export const setLocation = location => ({
  type: SET_LOCATION, location
})

export const setCoords = coords => ({
  type: SET_COORDS, coords
})

export const setLoading = loading => ({
  type: SET_LOADING, loading
})

export const getCustomLocationForecast = (latitude, longitude) => async (dispatch) => {
  dispatch(setLoading(true))
  dispatch(setCoords({ latitude, longitude }))
  const res = await getForecast(latitude, longitude)
  if (!isEmpty(res?.list)) {
    const filtredList = res.list
      .filter((_, idx) => idx % 8 === 0)
    dispatch(setLocation(res.city))
    dispatch(setForecast(filtredList))
  }
  dispatch(setLoading(false))
}

export const getUserLocationForecast = () => async (dispatch) => {
  navigator.geolocation.getCurrentPosition(async (position) => {
    const { latitude, longitude } = position.coords
    dispatch(getCustomLocationForecast(latitude, longitude))
  })
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORECAST:
      return {
        ...state,
        forecast: action.forecast,
      }
    case SET_LOCATION:
      return {
        ...state,
        location: action.location,
      }
    case SET_COORDS:
      return {
        ...state,
        coords: action.coords,
      }
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      }
    default:
      return state
  }
}