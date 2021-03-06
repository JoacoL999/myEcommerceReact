import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GameDetail from './pages/GameDetail';
import NavBar from './components/NavBar/NavBar'
import HomePage from './pages/Popular';
import GameList from './pages/GameList';
import Tax from './pages/Tax';
import Payment from './pages/Payment';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Genre from './pages/Genre';
import Finished from './pages/finished'
import { CartProvider } from './context/cartContext'

function App() {


  return (
    <CartProvider>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/'>
            <Route index element={<HomePage />} />
            <Route path=":gameid" element={<GameDetail />} />
          </Route>
          <Route path='GameList'>
            <Route index element={<GameList />}/>
            <Route path=":gameid" element={<GameDetail />} />
          </Route>
          <Route path='GameGenres'>
            <Route path=":gameGenre" element={<Genre />} />
            <Route path=":gameGenre/:gameid" element={<GameDetail />} />
          </Route>
          <Route path='Tax'>
            <Route index element={<Tax />}/>
          </Route>
          <Route path='Payment'>
            <Route index element={<Payment />} />
          </Route>
          <Route path='Contact'>
            <Route index element={<Contact />} />
          </Route>
          <Route path='Cart'>
            <Route index element={<Cart />} />
            <Route path='finished/:orderId' element={<Finished/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      </CartProvider>
  );
}

export default App;
