import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Navbar } from '../../navigation/views/Navbar'
import { AuthLayout } from '../layout/AuthLayout'
import { LoginForm } from '../views/LoginForm'

const validations = Yup.object({
  sponsor: Yup.string()
    .lowercase('The sponsor must be lowercase')
    .trim('The sponsor must be trimmed')
    .matches(/^[a-zA-Z0-9]+$/, 'The sponsor cannot contain white space and special character'),
  username: Yup.string()
    .required('The username is required')
    .trim('The username must be trimmed')
    .lowercase('The username must be lowercase')
    .matches(/^[a-zA-Z0-9]+$/, 'The sponsor cannot contain white space and special character'),
  password: Yup.string()
    .required('The password is required')
})

export const LoginPage = () => {
  const authForm = useFormik({
    initialValues: {
      sponsor: '',
      username: '',
      password: ''
    },
    validationSchema: validations,
    onSubmit: values => {

    }
  })
  return (
    <>
      <Navbar />
      <AuthLayout>
        <LoginForm authForm={authForm} />
      </AuthLayout>
    </>
  )
}