import React from 'react'
import Sidebar from '../components/Sidebar'
import { AlumnoRoutes } from '../../alumno/routes/AlumnoRoutes'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'

import { RegisterAlumnoForm } from '../../alumno/views/RegisterAlumnoForm'
import { Navbar } from '../../navigation/views/Navbar'
import { AuthLayout } from '../../alumno/layout/AuthLayout'

const validations = Yup.object({
  name: Yup.string()
    .required('The name is required')
    .trim('The name must be trimmed'),
  username: Yup.string()
    .required('The username is required')
    .trim('The username must be trimmed')
    .lowercase('The username must be lowercase')
    .matches(/^[a-zA-Z0-9]+$/, 'The username cannot contain white space and special character'),
  password: Yup.string()
    .required('Password is required')
})

const AdminAddStudent = () => {
  /*return (
    <Sidebar body={
        <>
         <h2>Agregar Estudiante</h2>
         <p> sustituir este parrafo por la pagina para agregar estudiante</p>
        </>
    }/>
  )*/
  const dispatch = useDispatch()

  const authForm = useFormik({
    initialValues: {
      name: '',
      username: '',
      password: ''
    }
  })
  return (
    <>
      <Navbar />
      <AuthLayout>
        <RegisterAlumnoForm authForm={authForm}/>
      </AuthLayout>
    </>
  )
}

export default AdminAddStudent