import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import PropTypes from 'prop-types'

import { CourseOverView } from '../components/CourseOverView'

export const CoursesList = ({ courses }) => {
  return (
    <>
      <Grid container spacing={1} justifyContent="center" >
        {courses.map((course) =>
          <Box key={course.id}>
            <CourseOverView premium={course.premium} title={course.title} description={course.description} imageURL={course.cover_image} courseId={course.id} />
          </Box>)}
      </Grid>
    </>
  )
}
