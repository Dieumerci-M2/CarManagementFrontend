
import './App.css'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Presentation from './pages/Presentation';
import SuperUserDocument from './pages/SuperUserDocument';
import SuperUserLogin from './pages/SuperUserLogin';
import SuperUserSingup from './pages/SuperUserSingup';
import UserDocument from './pages/UserDocument';
import UserSingUp from './pages/UserSingUp';
import UserLogin from './pages/UserLogin';

function App() {
  

  return (
  
    <Router>
      <Routes>
          <Route path='/' element={ <Presentation />} />
          <Route path='/user-login' element={<UserLogin />} />
          <Route path='/super-user-login' element={<SuperUserLogin />} />
          <Route path='/user-signUp' element={<UserSingUp />} />
          <Route path='/super-user-signUp' element={<SuperUserSingup />} />
          <Route path='/user-document' element={<UserDocument />} />
          <Route path='/super-user-document' element={<SuperUserDocument />} />
      </Routes>
    </Router>
    
  )
}

export default App
