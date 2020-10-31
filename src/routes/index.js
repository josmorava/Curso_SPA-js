// Importar todos los teplates y manejaar todas las rutas

import Header from '../template/Header'
import Home from '../pages/Home'
import Character from '../pages/Character'
import Error404 from '../pages/Error404'
import resolveRouts from '../utils/resolveRouts'
import getHash from '../utils/getHash'


const routes = {
  '/' : Home,
  '/:ide' : Character,
  '/Contact': 'Contact',
}

const router = async () => {
  //Hacer render de los templates hacia el archivo html, enviarlos a un elemento del DOM para que se muestren
  const header = null || document.getElementById('header')
  const content = null || document.getElementById('content')

  //Empujar el header al html
  header.innerHTML = await Header();

};

export default router;
