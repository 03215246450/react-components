import React from 'react'

function Card(props) {
  return (
    <div>
      <p>name:{props.name}</p>
  <p>institute:{props.institute}</p>
  <p>isApproved:{props.isApproved}</p>
  <p>age:{props.age}</p>
    </div>
  )
}

export default Card
