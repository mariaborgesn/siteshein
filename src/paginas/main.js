import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Produtos from "./produtos";
import Contato from "./contato";
import Usuario from "./usuario";
import Camisa1 from "./camisa1";
import Camisa3 from "./camisa3";


const Main = () => (
    <Routes>
        <Route exact path="/" element={<Home/> } />
        <Route exact path="/produtos" element={<Produtos/>} />  
        <Route exact path='/contato' element={<Contato/>} />
        <Route exact path='/usuario' element={<Usuario/>} />
        <Route exact path='/camisa1' element={<Camisa1/>} />
        <Route exact path='/camisa3' element={<Camisa3/>} />
    </Routes>
)

export default Main;