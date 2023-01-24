import React, { useState } from 'react';
import './Vacation.styles.css';

//Images.
import HohRainforest from '../../../../../Shared/ImageComponent/Images/Nature/HohRainforest.jpg';
import LakeAtNight from '../../../../../Shared/ImageComponent/Images/Nature/lakeAtNight.jpg';
import NightView from '../../../../../Shared/ImageComponent/Images/Nature/nightview.jpg';

//Components.
import ImageWrapper from '../../../../../Shared/ImageComponent/ImageWrapper';

//Dependencies.
import { motion } from 'framer-motion';
import { Container } from 'reactstrap';

const VacationComponent = () => {
    const [images, setimages] = useState([HohRainforest, LakeAtNight, NightView])
    console.log({ images })
  return (
      <Container fluid style={{display: 'flex', flexWrap: 'wrap'}}>
        {
            images.map((val, ind) => {
                return (
                    <motion.div key={ind} className='mx-5' initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 3.5}}>
                        <ImageWrapper image={val} description="Image." />
                    </motion.div>
                )
            })
        }
      </Container>
  )
}

export default VacationComponent