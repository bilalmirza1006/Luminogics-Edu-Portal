import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './screens/Auth/SignIn';
import SignUp from './screens/Auth/SignUp';
import AddWeeks from './screens/AddWeeks';
import EditWeek from './screens/EditWeek';
import Header from './screens/Header';
import Home from './screens/Home';
import Week from './screens/Week';
import DomyScreen from './screens/DomyScreen';

function App() {
  return (
    <div className="App">
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/domy-screen" element={<DomyScreen />} />
        <Route path="/week" element={<Week />} />
        <Route path="/add-week" element={<AddWeeks />} />
        <Route path="/edit-week" element={<EditWeek />} />

      </Routes>
    </div>
  );
}

export default App;
