import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Cart from "./pages/cart"
import Checkout from "./pages/checkout"
import ProdDetail from "./pages/productDetail"
import ProdList from "./pages/productList"
import OrderConfirmation from "./pages/orderConfirmation"
import {BrowserRouter,Routes , Route} from "react-router-dom"



function App() {
  return (
    <>

    <BrowserRouter>
    
      <div className="min-h-screen bg-gray-900 font-sans">
            <Navbar />
            <Routes>
            <Route path="/" element={<ProdList/>}></Route>
            <Route path="/product/:id" element={<ProdDetail/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/checkout" element={<Checkout/>}></Route>
            <Route path="/orderConfirmation" element={<OrderConfirmation/>}></Route>
            </Routes>
            <Footer />
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;