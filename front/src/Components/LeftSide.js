import React from 'react'
import { Users } from "../dummyData";
import CloseFriend from "./CloseFriend";

export default function LeftSide() {
  return (
    <div className='LeftSide'>
         <div className="sidebarWrapper">
        <h2 className='uyi'>Your Followers</h2>
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
        
    </div>
  )
}
