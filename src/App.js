import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GameDetail from './pages/GameDetail';
import NavBar from './components/NavBar/NavBar'
import HomePage from './pages/Popular';
import GameList from './pages/GameList';



function App() {


  return (
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='myEcommerceReact'>
          <Route index element={<HomePage />} />
          <Route path=":gameid" element={<GameDetail />} />
        </Route>
        <Route path='GameList'>
          <Route index element={<GameList />}/>
          <Route path=":gameid" element={<GameDetail />} />
        </Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
