import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarFunction from './components/Navbar/Navbar';
import {Route,Routes} from 'react-router-dom'
import Home from './components/Home/Home';
function App() {
  return (
    <>

    <NavbarFunction/>
    <Routes>
      <Route path ="/" element={<Home/>}></Route>
    </Routes>
    </>
  );
}

export default App;
