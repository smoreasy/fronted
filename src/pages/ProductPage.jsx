// import allProductAPI from "../api/ProductAPI";
import Product from "../components/Product/Product";
import ProductInit from "../components/Product/ProductInit";
import {useState, useEffect} from "react";
const ProductPage = () => {
    const [productData, setProductData] = useState(null); // State를 사용하여 data 상태를 관리

    useEffect(() => {
        getProductData();
    }, []);

    const getProductData = async () => {
        try {
            const response = await fetch('http://localhost:8080/products', {
                method: 'GET',
                // headers: {
                //     Authorization: `Bearer ${token}`,
                // },
            });

            const responseData = await response.json();
            setProductData(responseData); // 데이터를 state에 설정
        } catch (error) {
            console.log('API 응답에 실패했습니다.', error);
        }
    };

    return (
        <>
            {productData ? <Product productData={productData}/> : <ProductInit />}
        </>
    )
}

export default ProductPage;
