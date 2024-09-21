import React, { useState } from 'react';
import Dash from './Components/Dashboard/Dash';
import Sidebar from './Components/Sidebar/Sidebar';
import { Settings } from 'react-feather';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RenderProject from './Components/RenderProject/RenderProject';
import Header from './Components/Header/Header';
import Login from './Components/Auth/Login/Login';
import Signup from './Components/Auth/SignIn/Signup';

function App() {
  const [toggle, setToggle] = useState(false);
  const [aside,setAside]= useState('block')
  const Toggle = () => setToggle(!toggle);

  return (
    <Router>
      <main className={`d-flex ${toggle ? "light-theme" : "dark-theme"}`}>
        <aside className={`d-${aside}`}>
          <Sidebar setAside={setAside} />
        </aside>
        <section>
          <div className="wrapper container-lg">
            <Routes>
              <Route path="/" element={<Dash />} />
              <Route path='/user/auth/login' element={<Login />} />
              <Route path='/user/auth/signup' element={<Signup />} />
              <Route path="/bookTickets" element={<RenderProject url={'https://book-tickets-six.vercel.app/'} />} />
            </Routes>
          </div>
        </section>
        <div onClick={Toggle} className="setting">
          <Settings />
        </div>
      </main>
    </Router>
  );
}

export default App;
