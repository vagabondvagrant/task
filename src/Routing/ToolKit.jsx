import React from 'react'
import SecComp from '../Toolkit/SecCom'
import FirstComp from "../ToolKit/FirstComp" 
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