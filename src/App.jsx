//Componentes
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

//Estilo
import './App.css'
//Importacion de estilos bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
      <div className='NavBarStyles'>
        <NavBarComponent />
        <ItemListContainer greeting="¡Bienvenido a Kinetoscope!" />
      </div>
  )
}

export default App
