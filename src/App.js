

import './App.css';

import { Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import Home from './components/Home';




function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="add" element={<Add/>}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Routes>


    </div>
  );
}

export default App;
