import React from 'react';

import rogerio from '../../assets/images/rogeriohero.jpg'
import { HeroContainer } from './styles';

const Hero: React.FC = () => {
  return (
    <HeroContainer>
        <div className="image-container">
            <img src={rogerio} srcSet={rogerio} loading="lazy" alt=""/>
        </div>
    </HeroContainer>
  );
}

export default Hero;