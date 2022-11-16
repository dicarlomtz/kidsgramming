import React from 'react'
import Sidebar from '../components/Sidebar'

import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'

import { Navbar } from '../../navigation/views/Navbar'
import { startCreatingUserWithUsernamePassword, startLogout } from '../../store/auth/authThunks'
import { AuthLayout } from '../../curso/layout/AuthLayout'
import { AddCourse } from '../../curso/views/AddCourse'

const validations = Yup.object({
  name: Yup.string()
    .required('The name is required')
    .trim('The name must be trimmed'),
  description: Yup.string()
    .required('The description is required')
    .trim('The description must be trimmed'),
  video: Yup.string()
    .required('The video is required')
    .trim('The video must be trimmed')
})

const AdminAddCourse = () => {
  /*return (
    <Sidebar body={
        <>
         <h2>Agregar Curso</h2>
         <p> sustituir este parrafo por la pagina para agregar curso</p>
        </>
    }/>
  )*/

  const dispatch = useDispatch()

  const authForm = useFormik({
    initialValues: {
      name: '',
      description: '',
      video: ''
    }/*,
    validationSchema: validations,
    onSubmit: values => {
      dispatch(startCreatingUserWithUsernamePassword(values))
    }*/
  })
  return (
    <>
      <Navbar />
      <AuthLayout>
        <AddCourse authForm={authForm} />
      </AuthLayout>
    </>
  )
}

export default AdminAddCourse