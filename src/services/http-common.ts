export async function checkRedirect(response: Response ) {
  if (response.type === 'opaqueredirect') {
    // redirect to login page
    window.location.href = response.url;
    throw new Error('Redirected to login page');
  }

  return await response.json();
}

//export const BASE_URL = window.location.origin + '/subscriptions';
export const BASE_URL = 'https://pokeapi.co/api/v2';