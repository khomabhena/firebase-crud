
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import SignInPage from './pages/signin-page';
import SignUpPage from './pages/signup-page';
import ForgotPasswordPage from './pages/forgot-password-page';
import { AuthContext, AuthContextProvider } from './components/Context/AuthContext';
import { useContext } from 'react';

function App() {
  const {currentUser, setCurrentUser} = useContext(AuthContext);

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
