import {Route, Routes} from "react-router-dom";
import Splash from "../pages/Splash";
import Login from "../pages/Login";
import LoginLoading from "../pages/LoginLoading";
import ContentLayout from "./ContentLayout";
import ProductPage from "../pages/ProductPage";
import ProductRegister from "../pages/ProductRegister";
import MyStore from '../pages/MyStore';
import MyPage from "../pages/MyPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/login" element={<Login />} />
            <Route path="/loginLoading" element={<LoginLoading />} />

            <Route path="/" element={<ContentLayout />}>
                <Route path="product/all-products" element={<ProductPage />} />
                <Route path="product/product-register" element={<ProductRegister/>} />
                {/*<Route path="/product/productDetail" element={<ProductDetail/>} />*/}
                {/*<Route path="/product/productOrderRegister" element={<ProductOrderRegister/>} />*/}
                {/*<Route path="/product/allProductOrder" element={<AllProductOrder/>} />*/}
                <Route path="store" element={<MyStore />} />
                {/*<Route path="/store/storeRegister" element={<StoreRegister/>} />*/}
                {/*<Route path="/store/storeProductOrder" element={<StoreProductOrderRegister/>} />*/}
                {/*<Route path="/store/allStore" element={<AllStore />} />*/}
                {/*<Route path="/store/storeDetail" element={<StoreDetail />} />*/}
                <Route path="/mypage" element={<MyPage />} />
            </Route>
            {/*<Route path="*" element={<NotFound />}/>*/}
        </Routes>
    )
}

export default AppRouter;