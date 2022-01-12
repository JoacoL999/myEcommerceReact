import './App.css';
import NavBar from './components/NavBar/NavBar'
import MainBody from './components/MainBody/MainBody'

function App() {
  return (
    <div className="App">
      <header className="">
        <NavBar />
      </header>
      <main>
        <MainBody />
      </main>
    </div>
  );
}

export default App;
