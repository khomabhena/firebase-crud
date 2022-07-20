
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import SignInPage from './pages/signin-page';
import SignUpPage from './pages/signup-page';
import ForgotPasswordPage from './pages/forgot-password-page';
import { AuthContext } from './components/Context/AuthContext';
import { useContext } from 'react';
import ProfilePage from './pages/profile-page';

function App() {
  const { currentUser } = useContext(AuthContext);

  const IsAuthorized = ({children}) => {
    return currentUser ? children : <Navigate to="/" />
  }

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<SignInPage />} />
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/forgot-password' element={<IsAuthorized><ForgotPasswordPage /></IsAuthorized>} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
