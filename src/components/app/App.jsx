import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
import DetallesContainer from "../detalles/DetallesContainer";
import Footer from "../footer/Footer";
import { Header } from "../header/Header";

function App() {

    return (
        <>
            <BrowserRouter>
                <Header />

                <Routes>

                    <Route path="/" element={<ItemListContainer greeting="Todos los equipos" />} />
                    <Route path="/item/:id" element={<DetallesContainer />} />
                    <Route path="/productos/" element={<ItemListContainer />} />
                    <Route path="/productos/:categoria" element={<ItemListContainer />} />


                </Routes>

            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;