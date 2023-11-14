import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import DetallesContainer from "./components/detalles/DetallesContainer";
import Footer from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import Carrito from "./components/carrito/Carrito";
import { CartProvider } from "./context/CartContext";
import Checkout from "./components/checkout/Checkout";

function App() {

    return (
        <>
            <CartProvider >
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/item/:id" element={<DetallesContainer />} />
                        <Route path="/productos/" element={<ItemListContainer />} />
                        <Route path="/productos/:categoria" element={<ItemListContainer />} />
                        <Route path="/carrito" element={<Carrito />} />
                        <Route path="/checkout" element={<Checkout />} />
                    </Routes>
                </BrowserRouter>
                <Footer />
            </CartProvider>
        </>
    );
}

export default App;