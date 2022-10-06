import React, { useContext, useEffect, useState } from 'react';
import Styles from "./Favourites.styled";
import { Text } from './../components/Text';
import { Context as MainContext } from '../context/MainContext';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';

const Favourites = () => {
    let navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const { state: { localData } } = useContext(MainContext);
    const [currentFavourites, setCurrentFavourites] = useState<any[]>([]);


    //Check if we have any favourites and if not return a message to screen, 
    //or else filter from localData array only the ones who are marked as favourite, 
    //by comparing the name with array that we create and store in localStorage.
    
    useEffect(() => {
        if(localStorage.getItem('favourites') === null || localStorage.getItem('favourites') === '[]'){
            setErrorMessage(`You don't have any pokemons marked as favourite ! `)
        } else {
            const favourites = JSON.parse(window.localStorage.getItem('favourites') || '{}');
            setCurrentFavourites(localData.filter((e) => {
                for(let i=0; i<favourites.length;i++){
                    if(e.name === favourites[i]){
                        return true;
                    }
                }
             }))
        }
    },[]);

    const onClick = (name: string) => {
        navigate('/details', { state: { name }});
    }

    return(
        <Styles>
            {errorMessage !== '' ?
             <div className='text'><Text text={errorMessage} size="40px" bold color='white' /></div> :
             <div className='card-section'>  
                    {currentFavourites.map((elem, i) => {
                        const id = elem?.url?.split('/');
                        return <Card key={i} name={elem.name} image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id[6]}.png`} onClick={() => onClick(elem.name)} />
                    })
                    }

                </div>
                
            
            }
        </Styles>
    )
}

export default Favourites;