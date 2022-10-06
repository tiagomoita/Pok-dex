const BASE_URL = 'https://pokeapi.co/api/v2';

interface optionsInterface {
 
}


//Get Method to return the list of all pokemons
export const getAllPokemons = async (options?: optionsInterface ) => {
  let params = '';
  if(options){
    if (Object.keys(options).length !== 0) {
      params = '?' + new URLSearchParams({ ...options });
    }
  }
  
  const res = await fetch(BASE_URL + '/pokemon' + params, {
    method: 'GET',
  });

  return res.json();
};


//Get Method to return the details of each pokemon
export const getPokemonDetails = async (name: string) => {
 
  const res = await fetch(BASE_URL + `/pokemon/${name}` , {
    method: 'GET',
  });

  return res.json();
};





