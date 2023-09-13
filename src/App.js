import './App.css';
import AddWeeks from './screens/AddWeeks';
// import Domy from './screens/Domy';
import Header from './screens/Header';
import Home from './screens/Home';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Week from './screens/Week';
import { Route, Routes } from 'react-router-dom';
// import ho

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/add-week" element={<AddWeeks />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/* <Route path="/" element={<DomyScreen />} /> */}
        <Route path="/week/:id/:item" element={<Week />} />
      </Routes>
    </div>
  );
}

export default App;
