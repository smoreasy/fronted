import {useEffect, useState} from "react";
import Product from "../components/Product/Product";

const ProductPage = () => {
    const [productData, setProductData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getProductData();
    }, []);

    const getProductData = async () => {
        try {
            const response = await fetch(`http://43.200.49.69:8080/products`, {
                method: 'GET',
                // headers: {
                //     Authorization: `Bearer ${token}`,
                // },
            });
            const responseData = await response.json();
            setProductData(responseData);
            setIsLoading(false)
        } catch (error) {
            console.log('API 응답에 실패했습니다.', error);
        }
    };
    console.log(productData)
    return (
        <>
            { isLoading ? <p>'로딩 중입니다'</p> :  <Product productData={productData}/> }
        </>
    )
}

export default ProductPage;