import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'

import { Navbar } from '../../navigation/views/Navbar'
import { startCreatingUserWithUsernamePassword } from '../../store/auth/authThunks'
import { AuthLayout } from '../layout/AuthLayout'
import { RegisterForm } from '../views/RegisterForm'

const validations = Yup.object({
  name: Yup.string()
    .required('The name is required')
    .trim('The name must be trimmed'),
  email: Yup.string()
    .required('The email is required')
    .email('Invalid email format')
    .trim('The email must be trimmed'),
  username: Yup.string()
    .required('The username is required')
    .trim('The username must be trimmed')
    .lowercase('The username must be lowercase')
    .matches(/^[a-zA-Z0-9]+$/, 'The username cannot contain white space and special character'),
  password: Yup.string()
    .required('Password is required')
})

export const RegisterPage = () => {
  const dispatch = useDispatch()

  const authForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      username: '',
      password: ''
    },
    validationSchema: validations,
    onSubmit: values => {
      dispatch(startCreatingUserWithUsernamePassword(values))
    }
  })
  return (
    <>
      <Navbar />
      <AuthLayout>
        <RegisterForm authForm={authForm} />
      </AuthLayout>
    </>
  )
}
