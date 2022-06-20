import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from "./screen/Main";
import Flower from "./screen/Flower";

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/flowers/:id' element={<Flower />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
