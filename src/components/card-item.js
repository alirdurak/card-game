
import React from 'react'

function CardItem({item}) {
  return (
    <div key={item.id}  style={{
      padding: "0px",
      margin: "0px",
      width: "6rem",
      border:"2px solid green",
      height: "6rem"
    }}>
      <img style={{
        width: "6rem",
        height: "6rem",
      
        margin: "0px",
        padding: "0px"
      }} alt={item.name} src={item.satus === false? item.nonRevealedImage : item.revealedImage}  />
    </div>
  )
}

export default CardItem
