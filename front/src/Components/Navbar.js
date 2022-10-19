import React from 'react'
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import {DatabaseNetworkPoint} from '@icon-park/react';
export default function Navbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
      <DatabaseNetworkPoint className='iri' theme="outline" size="25" fill="#F5F5F5"/>
        <span className="logo icooo">WonderHit</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink icooo">Homepage</span>
          <span className="topbarLink icooo" >Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person className='icooo' />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat className='icooo' />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications className='icooo' />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
      </div>
    </div>
  )
}
