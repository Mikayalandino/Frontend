import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Components/Main';
import Search from './Components/Search';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main / >}></Route>
        <Route path="/busqueda" element={<Search / >}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
