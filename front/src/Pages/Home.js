import React from 'react'
import LeftSide from "../Components/LeftSide"
import RightSide from "../Components/RightSide"
import MiddleSide from "../Components/MiddleSide"
import Navbar from '../Components/Navbar'

export default function Feed() {
  return (
    <div>
      <Navbar />
      <div className='Home'>
      <LeftSide />
      <MiddleSide />
      <RightSide />
    </div>

    </div>
  )
}
