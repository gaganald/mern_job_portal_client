import React from 'react'
import InputField from '../components/InputField'

const EmploymentType = ({handleChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Type of Employment</h4>

        <div>
            <label className='sidebar-label-container'>
                <input type="radio" name='test' id='test' value="" onChange={handleChange} />
                <span className='checkmark'></span>Any Type
            </label>
             
            <InputField handleChange={handleChange} value="Full-time" title="Full-Time" name="text" />
            <InputField handleChange={handleChange} value="Temporary" title="Temporary" name="text" />
            <InputField handleChange={handleChange} value="Part-time" title="Part-Time" name="text" />

        </div>
    </div>    
  )
}

export default EmploymentType