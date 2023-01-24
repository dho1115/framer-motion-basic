import React from 'react'
import './ImageWrapper.styles.css';

const ImageWrapper = ({ image, description }) => {

  return <img src={image}  alt={description}/>
}

export default ImageWrapper