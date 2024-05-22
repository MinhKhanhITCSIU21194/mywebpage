import React from 'react'
import { Educourse } from '../../data/Data'
import Header from '../Components/Header'
import Lowbar from '../Components/Lowbar'
import { Container, Typography } from '@mui/material'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Section from '../Components/Section'



function EducourseBody({ID}) {
  const course = Educourse.filter(item => item.CourseID === ID)

  return (
    <div>
      <Header/>
      <div className='Body' style={{display: 'flex',}}>
      <Container sx={{width:'30%'}}>
        <Typography sx={{fontFamily:'Playfair Display', fontWeight:'700', fontSize:'Larger'}}>All courses</Typography>
        {Educourse.map((Sideitem) => (
          <Button 
          component={Link}
          to={`/education${Sideitem.CourseID}`}
          >
          
              <div className='container' style={{width:'100%', position:'relative'}}>
              <img src={Sideitem.img} alt="course" className="courseImage" style={{display:'flex',width:'100%', height:'300px',objectFit:'cover'}} />
              <div className='overlay'>
                  <div className='Text' style={{fontSize:'10px'}}>{Sideitem.Description}</div>
              </div>
              </div>
              
          
          
          
          </Button>

        ))}

      </Container>

        <Container sx={{width:'69%'}}>
      {course.map((item) => (
        <div key={item.CourseID}>
          <Section Name={item.Name}></Section>
          <Container sx={{}}>
          <img src={item.img} alt={item.Name} style={{width:'80%',margin:'10%'}} />
          <Typography
          sx={{textAlign:'center',}}
          
          >{item.Description1}</Typography>
          </Container>
          </div>
      ))}
      </Container>



      </div>
      <Lowbar/>
    </div>
  )
}

export default EducourseBody
