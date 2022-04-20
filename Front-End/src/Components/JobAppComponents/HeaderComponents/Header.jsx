import React from 'react';
import { CustomHeader } from '../Styles/HeaderStyles/Header.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSuitcase } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  return (
    <CustomHeader>
        <h1>Job App</h1>
        <div className='button'>
            <button>Account <FontAwesomeIcon icon={faUser} /></button>
            <button className='postBtn'>Post Job  <FontAwesomeIcon icon={faSuitcase}/>  </button>
        </div>
    </CustomHeader>
  )
}

export default Header;
