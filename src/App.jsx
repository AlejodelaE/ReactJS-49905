import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import { CartContextProvider } from "./Context/CartContext";
import CartContainer from "./componentes/CartContainer/CartContainer";
import { initFirebase } from "./firebase/config";
import "bootstrap/dist/css/bootstrap.min.css";
import Nosotros from "./componentes/Nosotros/Nosotros";
import JuegosS from "./componentes/JuegosS/JuegosS";

initFirebase();
function App() {
  const gretting = "Bienvenidos a Kinetoscope";
  const titulo = "Productos";
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer gretting={gretting} />} />
          <Route
            path="/category/:idcat"
            element={<ItemListContainer gretting={(titulo)} />}
          />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/detalle/:pid" element={<ItemDetailContainer />} />
          <Route path="/JuegosS" element={<JuegosS gretting={titulo} />} />
          <Route path="/cart" element={<CartContainer />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
