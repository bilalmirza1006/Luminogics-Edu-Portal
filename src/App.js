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
          {/* <Route path={AppRoutes.LUNCH_ROUTE} element={<LunchForm />} />
          <Route
            path={AppRoutes.MORNING_TEA_ROUTE}
            element={<MorningTeaForm />}
          />
          <Route
            path={AppRoutes.EVENING_TEA_ROUTE}
            element={<EveningTeaForm />}
          />
          <Route path={AppRoutes.SUMMARY_ROUTE} element={<Summary />} />
          <Route
            path={AppRoutes.UPDATE_PROFILE_ROUTE}
            element={<UpdatePassword />}
          /> */}
        </Route>











        <Route path="/home" element={<Home />} />

        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/domy-screen" element={<DomyScreen />} />
        {/* <Route path="/week" element={<Week />} />
        <Route path="/add-week" element={<AddWeeks />} />
        <Route path="/edit-week" element={<EditWeek />} />
        <Route path="/user-profile" element={<UserrProfile />} />
        <Route path="/eidt-profile" element={<EditProfile />} /> */}
        {/* <Route path="/Reset-Password" element={<ResetPassword />} /> */}


      </Routes>
    </div>
  );
}

export default App;
