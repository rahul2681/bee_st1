import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './pages/home/home';
import About from './pages/about/about.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Contact from './pages/contact/contact';
import Write from './pages/write/write';
import SinglePost from './components/singlepost/singlepost';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/write' element={<Write/>}/>
        <Route path='/post/:postId' element={<SinglePost/>}/>
      </Routes>
    </Router>
  );
}

export default App;
