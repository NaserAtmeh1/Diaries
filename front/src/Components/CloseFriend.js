import React from 'react'

export default function CloseFriend({user}) {
  return (
    <div className='CloseFriend'>  
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
  </div>
  )
}
