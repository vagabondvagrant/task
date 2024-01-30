import React from 'react'
import Organization from './Organization'
import Parag from './Parag'
import Carousal from './Carousal'
import BLOCKING from './BLOCKING'
import GamStop from './GamStop'
import DebtFin from './DebtFin'
import CarRender from './CarRender'

const HelpSup = () => {
  return (
    <div>
      <div className='mt-2'>
      <Organization/>
      </div>
      <Parag/>
      <Carousal/>
      <br/>
      <br/>
      <BLOCKING/>
      <GamStop/>
      <br/>
      <DebtFin/>
      <CarRender/>
      <p className='text-center mt-8'>
        See our `Tools` page as well for ways that can help you stop gambling
        immediately
      </p>
    </div>
  )
}

export default HelpSup