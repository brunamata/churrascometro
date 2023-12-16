import './styles.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Result from './pages/Result';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/register" element={<Result/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
