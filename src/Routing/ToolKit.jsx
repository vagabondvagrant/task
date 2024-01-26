import React from 'react'
import FirstComp from "../Toolkits/FirstComp" 
import SecComp from '../Toolkits/SecComp'
const ToolKit = () => {
  return (
    <div className="mt-2">
      <FirstComp/>
      <div className='mt-3'>
      <SecComp/>
      </div>
    </div>
  )
}

export default ToolKit