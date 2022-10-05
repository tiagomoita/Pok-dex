import React, { useEffect, useState } from 'react';
import Styles from './Details.styled';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import * as api from './../services/api';
import Box from '../components/box';
import { Text } from './../components/Text';
import Button from '../components/button';
import pokeball from './../assets/images/pokeball.svg';

const Details = () => {
    let location = useLocation();
    const [name, setName] = useState('');
    const [favourite, setFavourite] = useState(false);

    const getPokemonDetails = useQuery(['PokemonDetails', name], () => api.getPokemonDetails(name),
        {   
            enabled: false,
            onSuccess: data => { 
                //console.log(data)
            },
            onError: (error: any) => {
                console.log(error); 
            },
        },
    );

   
    useEffect(() => {
        setName(location?.state?.name);
        if(name !== ''){
            getPokemonDetails.refetch();
        }
        return () => { 
            setName('');
        }
    },[name])

    useEffect(() => {
        const array = JSON.parse(window.localStorage.getItem('favourites')|| '{}'); 
        if(array.includes(location?.state?.name)){
            setFavourite(true);
        } else {
            setFavourite(false)
        }
    },[])

    const saveAsFavourite = () => setFavourite(!favourite);

    useEffect(() => {
        const array = JSON.parse(window.localStorage.getItem('favourites')|| '{}');

        if(favourite && !array.includes(location?.state?.name)){
            array.push(name);
            window.localStorage.setItem("favourites", JSON.stringify(array));
        }

        if(!favourite && array.includes(location?.state?.name)){
            const newArray = array.filter((e: string) => e !== name)
            window.localStorage.setItem("favourites", JSON.stringify(newArray));
        }

    },[favourite])

    return (
        <Styles>
            <div className='main-container'>
                <Box boxRadius='30px'>
                    {!getPokemonDetails.isLoading && 
                        <>
                            <div className='image-container'>
                                <img className='mainLogo' src={getPokemonDetails.data?.sprites?.other?.['dream_world']?.['front_default']} alt="mainLogo"/> 
                            </div>
                        
                            <Text text={name} bold size={'100px'}/>
                            <Text text={"Height: " + getPokemonDetails.data?.height } bold/>
                            <Text text={"Weight: " + getPokemonDetails.data?.weight } bold/>
                            <Text text={'Types: ' + getPokemonDetails.data?.types.map((elem: { type: { name: string; }; }) => { return elem.type.name })} bold />
                            <Text text={'Abilities: ' + getPokemonDetails.data?.abilities.map((elem: { ability: { name: string; }; }) => { return elem.ability.name })} bold/>
                            <Text text={'Species: ' + getPokemonDetails.data?.species.name } bold/>
                            <Text text={'Moves: ' + getPokemonDetails.data?.moves.slice(0,20).map((elem: { move: { name: string; }; }) => { return elem.move.name })} bold/>
                            <div className='button'>
                                <Button image={pokeball} onClick={saveAsFavourite} text={'Save As Favourite'} favourite={favourite}/>
                            </div>
                            
                    
                     
                        </>
                    }
                </Box>
            </div>
        </Styles>
    )
};

export default Details;