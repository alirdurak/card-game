import './App.css';

import {Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import Login from './pages/auth/login';
import SignUp from './pages/auth/signup';
import ProfileSettings from './pages/auth/profile-settings';
import  {Toaster}  from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Toaster/>
      
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<SignUp/>} /> 
          <Route path="profile" element={<ProfileSettings/>} /> 
          
      </Routes>
      
    </div>
  );
}

export default App;
