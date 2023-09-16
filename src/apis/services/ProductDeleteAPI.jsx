import {useNavigate, useParams} from "react-router-dom";
const ProductDeleteAPI = ( productId ) => {
    const navigate = useNavigate();
    const handleProductDelete = async () => {
        try {
            await fetch(`http://43.200.49.69:8080/products/${productId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then ((response) => {
                if(response.ok) {
                    console.log('성공');
                    navigate('/product/all-products');
                } else {
                    console.log('실패')
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    return handleProductDelete;
}

export default ProductDeleteAPI;
