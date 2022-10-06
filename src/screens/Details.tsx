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
                
            },
            onError: (error: any) => {
                console.log(error); 
            },
        },
    );

    //When navigatin from Home Page to the Details we are passing the name of the pokemon as the "id", 
    //so, we need to get the name in first place, and set to be able to fetch the getPokemonDetails API with the correct name.
    //after we unmount the component, we make sure that this variable is detroyed, just for precautions.
    useEffect(() => {
        setName(location?.state?.name);
        if(name !== ''){
            getPokemonDetails.refetch();
        }
        return () => { 
            setName('');
        }
    },[name])


    //Here we are setting the favourite variable just to check if that specific pokemon was set as favourite before or not
    //to make sure that when we click the "Save as favourite" button we are either saving or unsaving
    useEffect(() => {
        const array = JSON.parse(window.localStorage.getItem('favourites')|| '{}'); 
        if(array.includes(location?.state?.name)){
            setFavourite(true);
        } else {
            setFavourite(false)
        }
    },[])

    const saveAsFavourite = () => setFavourite(!favourite);


    //Here is where we save data to localStorage when clicking the "Save as favourite" button, first we retrive the array from localStorge
    useEffect(() => {
        const array = JSON.parse(window.localStorage.getItem('favourites')|| '{}');

        //ADD FAVOURITE
        if(favourite && !array.includes(location?.state?.name)){
            array.push(name);
            window.localStorage.setItem("favourites", JSON.stringify(array));
        }

        //REMOVING FAVOURITE
        if(!favourite && array.includes(location?.state?.name)){
            const newArray = array.filter((e: string) => e !== name)
            window.localStorage.setItem("favourites", JSON.stringify(newArray));
        }

    },[favourite])

    return (
        <Styles>
            <div className='main-container'>
                <Box boxRadius='30px' isDetails={true}>
                    {!getPokemonDetails.isLoading && 
                        <>
                            <div className='image-container'>
                                <img className='pokemon-image' src={getPokemonDetails.data?.sprites?.other?.['dream_world']?.['front_default']} alt="pokemonImage"/> 
                            </div>
                        
                            <Text text={name} bold size={'80px'} />
                            <Text text={"Height: " + getPokemonDetails.data?.height } bold size='16px'/>
                            <Text text={"Weight: " + getPokemonDetails.data?.weight } bold size='16px'/>
                            <Text text={'Types: ' + getPokemonDetails.data?.types.map((elem: { type: { name: string; }; }) => { return elem.type.name })} bold size='16px'/>
                            <Text text={'Abilities: ' + getPokemonDetails.data?.abilities.map((elem: { ability: { name: string; }; }) => { return elem.ability.name })} bold size='16px'/>
                            <Text text={'Species: ' + getPokemonDetails.data?.species.name } bold size='16px'/>
                            <Text text={'Moves: ' + getPokemonDetails.data?.moves.slice(0,20).map((elem: { move: { name: string; }; }) => { return elem.move.name })} bold size='16px'/>
                            <div className='button'>
                                <Button image={pokeball} onClick={saveAsFavourite} text={'Save As Favourite'} favourite={favourite} textSize='16px'/>
                            </div>
                            
                    
                     
                        </>
                    }
                </Box>
            </div>
        </Styles>
    )
};

export default Details;