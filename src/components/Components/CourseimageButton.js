import React from 'react'

import { Button } from '@mui/material';
import {Educourse} from '../../data/Data';
import './Course.css'
import { Link } from 'react-router-dom';



function CourseimageButton() {
  return (
    <div class="Educourse"  style={{justifyContent:'space-between',display:'flex', flexWrap:'wrap' , width:'100%', marginLeft:'5p%'}} > 
        {Educourse.map((course) => (
            <span class="item" style={{width:'30%', height:'30%',margin:'10px'}}>
                <Button 
                component={Link}
                to={`/education${course.CourseID}`}
                >
                
                    <div className='container'>
                    <img src={course.img} alt="course" className="courseImage" style={{width:'100%',height:'300px'}} />
                    <div className='overlay'>
                        <div className='Text'>{course.Description}</div>
                    </div>
                    </div>
                    
                
                
                
                </Button>
                <div class="item-info" style={{textAlign:'center'}}>
                    <h2>{course.Name}</h2>

                </div>
            </span>
        ))}
        </div>
  )
}

export default CourseimageButton
