import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
import { Chip } from '@mui/material'

export const CourseOverView = ({ title, description, imageURL, courseId, premium }) => {
  return (

        <Grid item sx={{ m: 4, boxShadow: 3 }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="imgCourse"
                height="150"
                image={imageURL}/>

            <CardContent>
                <Typography variant="h6" sx={{ textAlign: 'center' }}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>

            <CardActions>

                <Button component={RouterLink} to={`/professor/courses/${courseId}`} sx={{ mx: 'auto' }} size="small" >
                    Edit Course
                </Button>

                <Chip label={premium ? 'Premium' : 'Free'} variant="outlined" />

            </CardActions>
            </Card>
        </Grid>
  )
}

CourseOverView.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired
}
