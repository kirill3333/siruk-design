import React from 'react'

import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

import styles from './styles.module.css'

import slide1 from '../../images/sl_06.jpg'
import slide2 from '../../images/sl_07.jpg'
import slide3 from '../../images/sl_11.jpg'
import slide4 from '../../images/sl_12.jpg'

const ImageSlider = () => {
    return (
      <AwesomeSlider cssModule={AwesomeSliderStyles} bullets={false} fillParent={true}>
          <div className={styles.overlay} data-src={slide1}>
              <div/>
          </div>
          <div className={styles.overlay} data-src={slide2}>
              <div />
          </div>
          <div className={styles.overlay} data-src={slide3}>
              <div />
          </div>
          <div className={styles.overlay} data-src={slide4}>
              <div />
          </div>
      </AwesomeSlider>
    )
}

export default ImageSlider

