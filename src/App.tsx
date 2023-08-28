
import './App.css'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Presentation from './pages/Presentation';
import SuperUserDocument from './pages/SuperUserDocument';
import SuperUserLogin from './pages/SuperUserLogin';
import SuperUserSingup from './pages/SuperUserSingup';
import UserDocument from './pages/UserDocument';
import UserSingUp from './pages/UserSingUp';
import UserLogin from './pages/UserLogin';
import NavBar from './components/NavBar';
import UserOneDocument from './pages/UserOneDocument';
import SuperUserOneDoc from './pages/SuperUserOneDoc';

function App() {
  

  return (
  <div className=''>
      <Router>
        <NavBar/>
      <Routes>
          <Route path='/' element={ <Presentation />} />
          <Route path='/user-login' element={<UserLogin />} />
          <Route path='/super-user-login' element={<SuperUserLogin />} />
          <Route path='/user-signUp' element={<UserSingUp />} />
          <Route path='/super-user-signUp' element={<SuperUserSingup />} />
          <Route path='/user-document' element={<UserDocument />} />
          <Route path='/super-user-document' element={<SuperUserDocument />} />
          <Route path='/one-document' element={<UserOneDocument />} />
          <Route path='/one-document&change' element={ <SuperUserOneDoc /> } />
      </Routes>
    </Router> 
  </div>
    
    
  )
}

export default App
