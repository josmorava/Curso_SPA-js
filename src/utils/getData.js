//Trayendo la api
const API = 'https://rickandmortyapi.com/api/character/';

//Mandando a llamar explícitamente al id del character del api
const getData = async (id) => {
  const apiURL = id ? `${API}${id}` : API;
  //llamado al fetch a los elementos con try catch
  try {//si todo bien
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (error) {//si todo mal
    console.log('Fetch, Error', error);
  };
};

//para exportar el componente
export default getData;