import React, { useEffect, useState } from 'react';
import Box from './box';
import Styled from './Card.styled';
import { Text } from './Text';

type cardProps = {
    onClick?: Function,
    image?: string,
    name: string,
}

const Card = (props: cardProps) => {
    const { onClick, image, name } = props;

    return (
        <Styled>
            <Box  width='375.7px' heigth='250px' boxRadius='21px' padding='16px'>
            <div className='image-container' onClick={() => onClick && onClick()}>
                    <img className='image-container' src={image} alt="img"/> 
                    <div className='card-information-title'>
                        <Text text={name} color={'black'} bold size='20px'></Text>
                    </div>
                </div>
            </Box>
        </Styled>
    )
}

export default Card;