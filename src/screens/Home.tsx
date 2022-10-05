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
    const { saveLocalData } = useContext(MainContext);
    const [localData, setLocalData] = useState<any[]>([]);
    const favourites: any[] = [];
    let [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(10);
    const [indexOfLastPage, setIndexOfLastPage] = useState(10);
    const [indexOfFirstPage, setIndexOfFirstPage] = useState(0);
    const [currentPokemons, setCurrentPokemons] = useState<any[]>([]);
    
    const getAllPokemons = useQuery(['getAllPokemons'], () => api.getAllPokemons({ limit: 151 }),
        {   
            enabled: false,
            onSuccess: data => { 
                setLocalData(data?.results);
                saveLocalData(data?.results)
                setCurrentPokemons(data?.results?.slice(indexOfFirstPage, indexOfLastPage));
            },
            onError: (error: any) => {
                console.log(error); 
            },
        },
    );
      
    useEffect(() => {
        getAllPokemons.refetch();
        if(window.localStorage.getItem('favourites') === null){
            window.localStorage.setItem('favourites', JSON.stringify(favourites));
        } 
    },[])
 
    const onClick = (name: string) => {
        navigate('/details', { state: { name }});
    }

    useEffect(() => {
        setCurrentPokemons(localData.slice(indexOfFirstPage, indexOfLastPage));
    },[currentPage])
   

    const paginate = (pageNumber: number) => {
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