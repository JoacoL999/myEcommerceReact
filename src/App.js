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
import { CartProvider } from './context/cartContext'

function App() {


  return (
    <CartProvider>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={process.env.PUBLIC_URL}>
          <Route index element={<HomePage />} />
          <Route path=":gameid" element={<GameDetail />} />
        </Route>
        <Route path={process.env.PUBLIC_URL + 'GameList'}>
          <Route index element={<GameList />}/>
          <Route path=":gameid" element={<GameDetail />} />
        </Route>
        <Route path={process.env.PUBLIC_URL + 'GameGenres'}>
          <Route path=":gameGenre" element={<Genre />} />
          <Route path=":gameGenre/:gameid" element={<GameDetail />} />
        </Route>
        <Route path={process.env.PUBLIC_URL +  'Tax'}>
          <Route index element={<Tax />}/>
        </Route>
        <Route path={process.env.PUBLIC_URL + '/Payment'}>
          <Route index element={<Payment />} />
        </Route>
        <Route path={process.env.PUBLIC_URL + 'Contact'}>
          <Route index element={<Contact />} />
        </Route>
        <Route path={process.env.PUBLIC_URL + 'Cart'}>
          <Route index element={<Cart />} />
        </Route>
      </Routes>
      </BrowserRouter>
      </CartProvider>
  );
}

export default App;
