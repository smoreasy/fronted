import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import LoginLoading from "./pages/LoginLoading";
import {useEffect} from "react";

function App() {
    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
    useEffect(() => {
        setScreenSize();
    });

  return (
    <Routes>
        {/* <Route path="/" element={<Splash />} */}
        <Route path="/login" element={<Login />} />
        <Route path="/loginLoding" element={<LoginLoading />} />
        {/*<Route>*/}
        {/*    <Route Path="/allProducts" element={<AllProduct/>} />*/}
        {/*    <Route Path="/product/productRegister" element={<ProductRegister/>} />*/}
        {/*    <Route Path="/product/productDetail" element={<ProductDetail/>} />*/}
        {/*    <Route Path="/product/productOrderRegister" element={<ProductOrderRegister/>} />*/}
        {/*    <Route Path="/product/allProductOrder" element={<AllProductOrder/>} />*/}
        {/*    <Route Path="/store/storeRegister" element={<StoreRegister/>} />*/}
        {/*    <Route Path="/store/storeProductOrder" element={<StoreProductOrderRegister/>} />*/}
        {/*    <Route Path="/store/allStore" element={<AllStore />} />*/}
        {/*    <Route Path="/store/storeDetail" element={<StoreDetail />} />*/}
        {/*    <Route Path="/mypage" element={<MyPage />} />*/}
        {/*</Route>*/}
        {/*<Route path="*" element={<NotFound />}/>*/}
    </Routes>
  );
}

export default App;
