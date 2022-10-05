import { BASE_URL, checkRedirect } from './http-common';
import { searchParamsInterface } from './interfaces';

export const getAllPokemons = async (options?: searchParamsInterface ) => {
  let params = '';
  if(options){
    if (Object.keys(options).length !== 0) {
      params = '?' + new URLSearchParams({ ...options });
    }
  }
  
  const res = await fetch(BASE_URL + '/pokemon' + params, {
    method: 'GET',
    //redirect: 'manual',
    //credentials: 'include',
  });

  return checkRedirect(res);
};

export const getPokemonDetails = async (name: string, options?: searchParamsInterface ) => {
  let params = '';
  if(options){
    if (Object.keys(options).length !== 0) {
      params = '?' + new URLSearchParams({ ...options });
    }
  }
  
  const res = await fetch(BASE_URL + `/pokemon/${name}` + params, {
    method: 'GET',
    //redirect: 'manual',
    //credentials: 'include',
  });

  return checkRedirect(res);
};





