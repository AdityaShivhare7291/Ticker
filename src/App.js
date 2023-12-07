import Login from './Pages/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './Pages/signup';
import Forgotpassword from './Pages/forgotpassword'
import Home from './Pages/Dashboard'
import Newticket from './Pages/Newticket'
import Listticket from './Pages/ListofTickets'
function App() {
  return (
    <div className='main-container'>

<Router>
  <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Start />} />
          <Route exact path="/forgotpassword" element={< Forgotpassword/>} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Newticket" element={<Newticket />} />
          <Route exact path="/Listticket" element={<Listticket />} />
  </Routes>
</Router>
      
      
        
      
    </div>
  );
}

export default App;
