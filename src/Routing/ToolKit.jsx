import React from 'react'
import FirstComp from "../Toolkits/FirstComp" 
import SecComp from '../Toolkits/SecComp'
import Answer from '../Toolkits/Answer'
// import ThirdComp from '../Toolkits/ThirdComp'
const ToolKit = () => {
  return (
    <div className="mt-2">
      <FirstComp/>
      <div className='mt-3'>
      <SecComp/>
      </div>
      <Answer/>
      {/* <ThirdComp/> */}
    </div>
  )
}

export default ToolKit