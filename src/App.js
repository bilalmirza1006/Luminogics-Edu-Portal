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
import UserrProfile from './screens/UserrProfile';
import EditProfile from './screens/EditProfile';
import ResetPassword from './screens/ResetPassword';
import PrivateRouts from './routs/PrivateRouts';
import { AppRoutes } from './routs/RoutConstant';
import ForgetPassword from './screens/ForgetPassword';
import Otp from './screens/Otp';

function App() {
  return (
    <div className="App">
      <Header />
      <ToastContainer />
      <Routes>
        <Route element={<PrivateRouts />}>
          <Route path={AppRoutes.HOME} element={<Home />} />
          <Route path={AppRoutes.WEEK} element={<Week />} />
          <Route path={AppRoutes.ADD_WEEK} element={<AddWeeks />} />
          <Route path={AppRoutes.EDIT_WEEK} element={<EditWeek />} />
          <Route path={AppRoutes.USER_PROFILE} element={<UserrProfile />} />
          <Route path={AppRoutes.EDIT_PROFILE} element={<EditProfile />} />
          <Route path={AppRoutes.RESET_PASSWORD} element={<ResetPassword />} />
        </Route>

        <Route path={AppRoutes.SIGNIN} element={<SignIn />} />
        <Route path={AppRoutes.SIGNUP} element={<SignUp />} />
        {/* <Route path="/domy-screen" element={<DomyScreen />} /> */}
        <Route path={AppRoutes.FORGET_PASSWORD} element={<ForgetPassword />} />
        <Route path={AppRoutes.OTP} element={<Otp />} />



      </Routes>
    </div>
  );
}

export default App;
