import React from 'react'
import FirstComp from "../ToolKit/FirstComp" 
import SecComp from '../Toolkit/SecCom'
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