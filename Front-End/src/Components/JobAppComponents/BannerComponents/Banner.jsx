import React from 'react';
import { BannerStyle } from '../Styles/BannerStyles/Banner.style';

export const Banner = () => {
  return (
    <BannerStyle>
        <div className='landing-text'>
        <h1>Your one stop job factory <br /> Easy And Quick Job Hunt</h1>
        <button>Get A Job</button>
        </div>
    </BannerStyle>
  )
}

export default Banner;
