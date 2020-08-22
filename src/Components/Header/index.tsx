import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles'

interface HeaderProps {
    logo : string
}

const Header: React.FC<HeaderProps> = ({logo, children}) => {
  return(
    <S.HeaderContainer>
        <div className="container">
            <h1>
                <Link to="/">
                    {children}
                    {logo}
                </Link>
            </h1>
        </div>
    </S.HeaderContainer>
  );
}

export default Header;