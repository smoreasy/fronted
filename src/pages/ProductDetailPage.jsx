import ProductDetail from "../components/Product/ProductDetail";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const ProductDetailPage = () => {
    const { id } = useParams();
    const [productDetailData, setProductDetailData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getProductDetailData(id);
    }, [id]);

    const getProductDetailData = async (productId) => {
        try {
            const response = await fetch(`http://43.200.49.69:8080/products/${productId}`, {
                method: 'GET',
                // headers: {
                //     Authorization: `Bearer ${token}`,
                // },
            });
            const responseData = await response.json();
            // console.log(responseData)
            setProductDetailData(responseData);
            setIsLoading(false)
        } catch (error) {
            console.log('API 응답에 실패했습니다.', error);
        }
    };
    return (
        <>
            { isLoading ? <p>'로딩 중입니다'</p> : <ProductDetail productDetailData={productDetailData}/>}
        </>
    )
}

export default ProductDetailPage;