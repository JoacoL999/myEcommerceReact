import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import GoWimg from './components/ItemListContainer/assets/GodOfWar.jpg'
import HZD from './components/ItemListContainer/assets/HorizonZD.jpg'

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main className='container-fluid'>
         <h2 className='TitleIndex text-light py-5 fs-1'>Destacados</h2>
         <div className='row justify-content-around'>
          <ItemListContainer Name='Horizon Zero Dawn' 
          Price='2100' 
          Descrip='Vive la misión legendaria de Aloy para desvelar los secretos de una futura Tierra dominada por máquinas. ¡Usa devastadores ataques contra tus depredadores y explora un majestuoso mundo abierto en este galardonado RPG de acción!' 
          Img={HZD} 
          stock='5'/>
          
          <ItemListContainer 
          Name='God Of War' 
          Price='2500' 
          Descrip='Vive la misión legendaria de Aloy para desvelar los secretos de una futura Tierra dominada por máquinas. ¡Usa devastadores ataques contra tus depredadores y explora un majestuoso mundo abierto en este galardonado RPG de acción!' 
          Img={GoWimg}
          stock='10' />

          </div>
      </main>
    </div>
  );
}

export default App;
