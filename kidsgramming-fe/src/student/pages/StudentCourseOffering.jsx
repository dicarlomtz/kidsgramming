import * as React from 'react'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid  from '@mui/material/Grid'
import Sidebar from '../components/Sidebar'

import logo1 from '../../../public/course_offering/img/sql.png'
import logo2 from '../../../public/course_offering/img/java.jpg'
import logo3 from '../../../public/course_offering/img/cplusplus.png'
import logo4 from '../../../public/course_offering/img/robotica.jpeg'
import logo5 from '../../../public/course_offering/img/net.jpeg'
import logo6 from '../../../public/course_offering/img/python.png'

const posts = [
  {id: 1, title: 'SQL', content: 'Bienvenidos al curso para aprender SQL para manejo de datos en BD!', 
  img: logo1},
  {id: 2, title: 'JAVA', content: 'Bienvenidos al curso para aprender el lenguaje Java!',
  img: logo2},
  {id: 3, title: 'C++', content: 'Bienvenidos al curso para aprender el lenguaje C++!',
  img: logo3},
  {id: 4, title: 'ROBOTICA', content: 'Bienvenidos al curso para aprender de lenguajes de Robotica!', 
  img: logo4},
  {id: 5, title: '.NET', content: 'Bienvenidos al curso para aprender el lenguaje .NET!',
  img: logo5},
  {id: 6, title: 'PYTHON', content: 'Bienvenidos al curso para aprender el lenguaje PYTHON!', 
  img: logo6}

];

const content = posts.map((post) =>
    <div key={post.id}>
      <Grid item sx={{ m: 3, boxShadow: 3 }}>  
            <Card sx={{ maxWidth: 290 }}>
                <CardMedia
                    component="img"
                    alt="imgcourse"
                    height="150"
                    image={post.img}/>
               
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {post.content}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className="mx-auto p-2" size="small">
                      Matricular
                    </Button>
        
                </CardActions>
              </Card>
        </Grid>
    </div>
);

export const StudentCourseOffering = () => {

    return (
        <>
            <Sidebar body={
                <>
                    <Grid container spacing={1} justifyContent="center" >
                        {content}
                    </Grid> 
                </>
            }/>
             
        </>
    )
}
