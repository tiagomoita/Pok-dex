import React from 'react';
import Styles from "./Header.styled";
import Button from './button';
import { useNavigate } from 'react-router-dom';
import { Text } from './../components/Text'


const Header = () => {
    let navigate = useNavigate();

    return (    
        <Styles className='header-wrapper'>
            <div className='title'>
                <Text text={'Pokédex'} bold color='red'/>
            </div>
            <div className='button-wrapper'>
                <Button onClick={() => navigate('/favourites')} text="My Favourites" textBold textSize='20px' />
            </div>
        </Styles>
    );

}

export default Header;