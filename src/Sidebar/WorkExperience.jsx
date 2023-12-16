import React from 'react'
import InputField from '../components/InputField'

const WorkExperience = ({handleChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Work Experience</h4>

        <div>
            {/* <label className='sidebar-label-container'>
                <input type="radio" name='test' id='test' value="" onChange={handleChange} />
                <span className='checkmark'></span>All
            </label> */}
             
            <InputField handleChange={handleChange} value="Any experience" title="Any Experience" name="text" /> 
            <InputField handleChange={handleChange} value="Internship" title="Internship" name="text" />
            <InputField handleChange={handleChange} value="Work remotely" title="Work Remotely" name="text" />

        </div>
    </div>    
  )
}

export default WorkExperience