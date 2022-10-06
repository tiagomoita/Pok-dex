import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Styles from "./Home.styled";
import * as api from './../services/api';
import Card from '../components/Card';
import Pagination from '../components/Pagination';
import Header from '../components/Header';
import { Context as MainContext } from '../context/MainContext';

const Home = () => {
    let navigate = useNavigate();
    const { saveLocalData, saveCurrentPage, state: { localData, page } } = useContext(MainContext);
    const favourites: any[] = [];
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(10);
    const [indexOfLastPage, setIndexOfLastPage] = useState(10);
    const [indexOfFirstPage, setIndexOfFirstPage] = useState(0);
    const [currentPokemons, setCurrentPokemons] = useState<any[]>([]);
    
    const getAllPokemons = useQuery(['getAllPokemons'], () => api.getAllPokemons({ limit: 151 }),
        {   
            enabled: false,
            onSuccess: data => { 
                saveLocalData(data?.results)
                setCurrentPokemons(data?.results?.slice(indexOfFirstPage, indexOfLastPage));
            },
            onError: (error: any) => {
                console.log(error); 
            },
        },
    );
      
    useEffect(() => {
        if(localData.length !== 151){
            getAllPokemons.refetch();
        }
        if(window.localStorage.getItem('favourites') === null){
            window.localStorage.setItem('favourites', JSON.stringify(favourites));
        } 

        //When going to Home, stay in same page
        setCurrentPage(page);
        const aux = page * cardsPerPage
        setIndexOfLastPage(aux);
        setIndexOfFirstPage(aux - cardsPerPage);

    },[]);

    useEffect(() => {
        setCurrentPokemons(localData.slice(indexOfFirstPage, indexOfLastPage));
    },[currentPage]);

    
 
    const onClick = (name: string) => navigate('/details', { state: { name }});

    const paginate = (pageNumber: number) => {
        saveCurrentPage(pageNumber);
        setCurrentPage(pageNumber);
        const aux = pageNumber * cardsPerPage
        setIndexOfLastPage(aux);
        setIndexOfFirstPage(aux - cardsPerPage);
    }
  
    return (
        <>  
            <Header />
            <Styles>
                {getAllPokemons.isLoading ? <p>LOADING ...</p> :
                <div className='card-section'>  
                    {!getAllPokemons.isLoading && currentPokemons.map((elem, i) => {
                        const id = elem?.url?.split('/');
                        return <Card key={i} name={elem.name} image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id[6]}.png`} onClick={() => onClick(elem.name)} />
                    })
                    }

                </div>
                }
            </Styles>
            <Pagination cardsPerPage={cardsPerPage} totalCards={151} paginate={paginate} />
        </>
    )
};

export default Home;