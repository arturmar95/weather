import { useSelector, useDispatch } from 'react-redux'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { getCustomLocationForecast } from '../../redux/reducer'
import styles from './locationForm.module.css'

export const LocationForm = () => {
  const dispatch = useDispatch()
  const { coords } = useSelector(s => s)

  const yupShape = (num) => {
    return Yup.number()
      .typeError('You must specify a number')
      .required()
      .min(-num)
      .max(num)
  }

  const ValidateSchema = Yup.object().shape({
    latitude: yupShape(90),
    longitude: yupShape(180),
  })

  const handleSubmit = async (values) => {
    const { latitude, longitude } = values
    dispatch(getCustomLocationForecast(latitude, longitude))
  }

  return (
    <div>
      <h3>Enter location</h3>
      <Formik
        initialValues={{
          latitude: coords?.latitude || '',
          longitude: coords?.longitude || '',
        }}
        onSubmit={handleSubmit}
        validationSchema={ValidateSchema}
      >
        <Form>
          <div>
            <label htmlFor='latitude'>Latitude:</label>
            <Field id='latitude' name='latitude' placeholder='0.000000' />
            <ErrorMessage className={styles.error} name='latitude' component='span' />
          </div>

          <div>
            <label htmlFor='longitude'>Longitude:</label>
            <Field id='longitude' name='longitude' placeholder='0.000000' />
            <ErrorMessage className={styles.error} name='longitude' component='span' />
          </div>

          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  )
}