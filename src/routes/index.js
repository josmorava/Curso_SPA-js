// Importar todos los teplates y manejaar todas las rutas

import Header from '../template/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404'
import getHash from '../utils/getHash';
import resolveRouts from '../utils/resolveRouts';


const routes = {
  '/' : Home,
  '/:id' : Character,
  '/contact': 'Contact',
};

const router = async () => {
  //Hacer render de los templates hacia el archivo html, enviarlos a un elemento del DOM para que se muestren
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  //Empujar el header al html
  header.innerHTML = await Header();

  let hash = getHash();
  let route = await resolveRouts(hash);
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();

};

export default router;
