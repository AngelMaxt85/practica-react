
import imagen1 from '../src/images/prueba1.jpg'
import imagen2 from '../src/images/prueba2.jpg'
import imagen3 from '../src/images/prueba3.jpg'
import styleApp from './App.module.scss'
import Cards from './Components/Cards'

function App() {
 const arreglo = [
  {
    id: 1,
    nombre: 'El patron papi' ,
    pais: 'Mexico',
    imagen: imagen1,
    cargo: 'Patron',
    empresa: 'Crepas el peluche',
    testimonio: 'Soy un emprendedor que se ha dedicado a proyectar jovenes promesas en cuanto a proyectos o empresas que tienen futuro',
  },
  {
    id: 2,
    nombre: 'El pepe ' ,
    pais: 'Mexico',
    imagen: imagen2,
    cargo: 'Developer',
    empresa: 'El peluche',
    testimonio: 'Todo el tiempo me atrase en la clase por andar importando cosas jsjsjsjs ya ni modo',
  },
  {
    id: 3,
    nombre: 'El pepe pero en Azul',
    pais: 'Rumania',
    imagen: imagen3 ,
    cargo: 'Disainer',
    empresa: 'Bimbo',
    testimonio: 'Yo he trabajado en bimbo y es una experiencia muy chida debido a que me dan pancitos gratis jsjsjsjs', 
  }
 ]

  return (
    <>
    <h1 className={styleApp.h1__titlemain}>Estos son los testimonios de algunos personajes importantes en Mexico</h1>
    <div className = {styleApp.general__cards}> 
    {arreglo.map(el => {
      return ( <Cards id={el.id} nombre={el.nombre} pais={el.pais} imagen={el.imagen} cargo={el.cargo} 
        empresa={el.empresa} testimonio={el.testimonio} /> )
      })}
      </div>
      </>
  )
}

export default App
