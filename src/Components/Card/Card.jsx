import React from 'react'
import profilePic from './images/4c37871eaf15ecea45874bfc730e978d.jpg'

export default function Card() {
  return (
    <div className="card">
        <img className="card-image" src={profilePic} alt="profile Pic"/>
        <h2 className="card-title">Luan code</h2>
        <p className="card-text"> I studying code and play video games </p>
    </div>
  )
}
