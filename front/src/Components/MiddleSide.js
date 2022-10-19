import React from 'react'
import Share from './Share'
import Post from "../Components/Post";
import { Posts } from "../dummyData";

export default function MiddleSide() {
  return (
    <div className='MiddleSide'>
      
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>

    </div>
  )
}
