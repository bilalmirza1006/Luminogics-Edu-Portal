import './App.css';
import Domy from './screens/Domy';
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
        {/* <Route path="/" element={<Domy />} /> */}
        <Route path="/week/:id" element={<Week />} />
      </Routes>
    </div>
  );
}

export default App;
