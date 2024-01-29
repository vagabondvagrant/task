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
    </div>
  )
}

export default HelpSup