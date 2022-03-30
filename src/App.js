import { Routes ,Route} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import { Ordersummary } from "./components/Ordersummary";
import { Nomatch } from "./components/Nomatch";
import { Products } from "./components/Products";
import { Fetureproducts } from "./components/Fetureproducts";
import { Newproducts } from "./components/Newproducts";
import {Users} from "./components/Users"
import { Userdetails } from "./components/Userdetails";
import { Admin } from "./components/Admin";
import { Profile } from "./components/Profile";
import { AuthProvider } from "./components/Auth";
import { Login } from "./components/Login";
import { Requireauth } from "./components/Requireauth";


function App() {
  return (
   
  
  <AuthProvider>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="order-summary" element={<Ordersummary/>} />
    <Route path="*" element={<Nomatch/>}/>
    <Route path="products" element={<Products/>}>
    <Route index element={<Fetureproducts/>} />
    <Route path="fetured" element={<Fetureproducts/>}/>
    <Route path="new" element={<Newproducts/>} />
    </Route>
    <Route path="users" element={<Users/>}>
   <Route path=":userId" element={<Userdetails/>} />
   <Route path= "admin" element={<Admin/>} />
   </Route>
   <Route path="profile" element={<Requireauth><Profile/></Requireauth>} />
   <Route path="login" element={<Login/>} />

    </Routes>
  </AuthProvider>
  )
}

export default App;
