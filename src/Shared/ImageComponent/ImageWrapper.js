import React from 'react'

const ImageWrapper = (props) => {
    const { image, description } = props.image;

  return <img src={image}  alt={description}/>
}

export default ImageWrapper