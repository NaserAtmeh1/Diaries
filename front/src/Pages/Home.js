import React from 'react'
import LeftSide from "../Components/LeftSide"
import RightSide from "../Components/RightSide"
import MiddleSide from "../Components/MiddleSide"

export default function Feed() {
  return (
    <div className='Home'>
      <LeftSide />
      <MiddleSide />
      <RightSide />
    </div>
  )
}
