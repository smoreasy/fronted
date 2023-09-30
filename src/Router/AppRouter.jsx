import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";
import Splash from "../pages/Splash";
import LoginPage from "../pages/LoginPage";
import LoginLoading from "../pages/LoginLoading";
import { ContentLayout, LoginLayout } from "./ContentLayout";
import ProductPage from "../pages/ProductPage";
import ProductRegisterPage from "../pages/ProductRegisterPage";
import StorePage from '../pages/StorePage';
import MyPage from "../pages/MyPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ProductDetailModifyPage from "../pages/ProductDetailModifyPage";
import StoreRegisterPage from "../pages/StoreRegisterPage";
import KakaoCallbackPage from "../pages/KakaoCallbackPage";
import JoinPage from "../pages/JoinPage";
const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/login/oauth2/callback/kakao" element={<KakaoCallbackPage />}/>
            <Route path="/loginLoading" element={<LoginLoading />} />
            <Route path="/join" element={<JoinPage />} />

            <Route path="/" element={<LoginLayout />}>
                <Route path="/main" element={<MainPage />} />
            </Route>

            <Route path="/" element={<ContentLayout />}>
                <Route path="product/all-products" element={<ProductPage />} />
                <Route path="product/product-register" element={<ProductRegisterPage/>} />
                <Route path="/product/product-detail/:id" element={<ProductDetailPage />} />
                <Route path="/product/product-detail-modify/:id" element={<ProductDetailModifyPage />} />
                {/*<Route path="/product/allProductOrder" element={<AllProductOrder/>} />*/}
                <Route path="store/all-stores" element={<StoreRegisterPage />} />
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