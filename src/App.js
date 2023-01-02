import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Service from "./components/Service";


import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/service.scss";
import "./styles/mediaquery.scss";

function App() {
  return (
    <Router>
      <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/service" element={<Service/>}/>

   </Routes>
   <Footer/>
   </Router>
  );
}

export default App;
