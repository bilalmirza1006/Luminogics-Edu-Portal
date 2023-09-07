import './App.css';
import Header from './screens/Header';
import Home from './screens/Home';
import Week from './screens/Week';
import { Route, Routes } from 'react-router-dom';
// import ho

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/week" element={<Week />} />
      </Routes>
    </div>
  );
}

export default App;
