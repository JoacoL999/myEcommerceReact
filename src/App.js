import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  return (
    <div className="App">
      <header className="">
        <NavBar />
      </header>
      <main className='container-fluid'>
         <h2 className='TitleIndex text-light py-5 fs-1'>Destacados</h2>
         <div className='row justify-content-around'>
          <ItemListContainer />
          <ItemListContainer />
          <ItemListContainer />
          </div>
      </main>
    </div>
  );
}

export default App;
