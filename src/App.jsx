import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import DetallesContainer from "./components/detalles/DetallesContainer";
import Footer from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { useState } from "react";
import { CartContext } from "./context/cartContext";

function App() {

    const [carrito, setCarrito] = useState([]);

    return (
        <>
            <CartContext.Provider value={ {carrito, setCarrito} }>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/item/:id" element={<DetallesContainer />} />
                        <Route path="/productos/" element={<ItemListContainer />} />
                        <Route path="/productos/:categoria" element={<ItemListContainer />} />
                    </Routes>
                </BrowserRouter>
                <Footer />
            </CartContext.Provider>
        </>
    );
}

export default App;