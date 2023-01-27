import './App.css';

import {Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import Login from './pages/auth/login';
import SignUp from './pages/auth/signup';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<SignUp/>} /> 
      </Routes>

      
    </div>
  );
}

export default App;
