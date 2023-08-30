import ProductDetail from "../components/Product/ProductDetail";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const ProductDetailPage = () => {
    const { id } = useParams();
    const [productDetailData, setProductDetailData] = useState(null);

    useEffect(() => {
        getProductDetailData(id);
    }, [id]);

    const getProductDetailData = async (productId) => {
        try {
            const response = await fetch(`http://localhost:8080/products/${productId}`, {
                method: 'GET',
                // headers: {
                //     Authorization: `Bearer ${token}`,
                // },
            });
            const responseData = await response.json();
            setProductDetailData(responseData);
        } catch (error) {
            console.log('API 응답에 실패했습니다.', error);
        }
    };
    console.log(productDetailData)
    return (

        <ProductDetail productDetailData={productDetailData}/>
    )
}

export default ProductDetailPage;