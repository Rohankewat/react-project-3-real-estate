import Home from "./Components/Home/Home";
import Company from "./Components/Company/Company";
import Services from "./Components/Services/Services";
import Properties from "./Properies/Properties";
import Contacts from "./Components/Contacts/Contacts";
import Header from "./Components/Header/Header";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Details from "./Components/Details/Details";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="company/:type" element={<Company />}></Route>
          <Route path="Services/:id" element={<Services />}></Route>
          <Route path="Properites/:id" element={<Properties />}></Route>
          <Route path="Contacts/:id" element={<Contacts />}></Route>
          <Route path="detail/:id" element={<Details />}></Route>
          <Route path="Properites/Properties/detail/:id" element={<Details />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;