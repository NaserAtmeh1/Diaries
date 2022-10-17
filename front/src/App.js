import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Feed from './components/Feed';
import Home from './components/Home';
import Register from './components/Register';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="feed" element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
