//trayendo la funcion del id del character para usar
import getData from '../utils/getData';



const Home = async () => { //Construyendo template
  //llamado a la API estandar con todos los personajes
  const characters = await getData();
  const view = `
    <div class="Characters">
      ${characters.results.map(character => `
        <article class="Characters-item">
          <a href="#/${character.id}/">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
          </a>
        </article>
      `).join('')}
    </div>
    `;
    return view;
}

export default Home;