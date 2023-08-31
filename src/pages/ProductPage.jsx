import {useEffect, useState} from "react";
import Product from "../components/Product/Product";
import ProductInit from "../components/Product/ProductInit";

const ProductPage = () => {
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        getProductData();
    }, []);

    const getProductData = async () => {
        try {
            const response = await fetch('http://43.200.49.69:8080/products', {
                method: 'GET',
                // headers: {
                //     Authorization: `Bearer ${token}`,
                // },
            });
            const responseData = await response.json();
            setProductData(responseData);
        } catch (error) {
            console.log('API 응답에 실패했습니다.', error);
        }
    };
    return (
        <>
            { productData ? <Product productData={productData} /> : <ProductInit /> }
        </>
    )
}

export default ProductPage;