import './styles.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Result from './pages/Result';
import { useState, useEffect} from 'react';


function App() {

  const storedQuantidades = JSON.parse(localStorage.getItem('churrascoQuantidades'));
  const [churrascoQuantidades, setQuantidades] = useState(storedQuantidades || { women: 0, men: 0, kid: 0 });

  useEffect(() => {
    localStorage.setItem('churrascoQuantidades', JSON.stringify(churrascoQuantidades));
  }, [churrascoQuantidades]);

  console.log(churrascoQuantidades["women"])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home churrascoQuantidades={churrascoQuantidades} setQuantidades={setQuantidades}/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/result" element={<Result churrascoQuantidades={churrascoQuantidades}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
