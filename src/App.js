import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar'
import Popular from './pages/Popular';



function App() {


  return (
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/'>
          <Route index element={<Popular />} />

          <Route path=":gameId" element={<ItemDetailContainer />} />

        </Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
