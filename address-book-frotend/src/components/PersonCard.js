import React from 'react'

export default function PersonCard({data}) {
  return (
    <div>
      <div>
        <img src='Image1.jpeg' alt='avatar'/>
      </div>
      <div>
        <span>{data.name}</span>
        <p>{data.email}</p>
        <p>{data.phone}</p>
      </div>
    </div>
  )
}
