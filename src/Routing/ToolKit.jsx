import React from 'react'
import FirstComp from "../Toolkits/FirstComp" 
import SecComp from '../Toolkits/SecComp'
import Answer from '../Toolkits/Answer'
import ThirdComp from '../Toolkits/ThirdComp'
import { Support } from '../Toolkits/Support'
import Reach from '../Toolkits/Reach'
import Budget from '../Calculator/Budget'
const ToolKit = () => {
  return (
    <div className="mt-2">
      <FirstComp/>
      <div className='mt-3'>
      <SecComp/>
      </div>
      <ThirdComp/>
      <Answer/>
      <Reach/>
      <div className='mt-3 mb-2'>
      <Support/>
      </div>
    </div>
  )
}

export default ToolKit