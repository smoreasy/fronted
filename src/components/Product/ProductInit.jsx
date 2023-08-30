import {Link} from "react-router-dom";

const ProductInit = () => {
    return (
        <>
            <h1>등록된 상품이 없습니다.</h1>
            <Link to={'/product/product-register'}>
                <button>상품 등록하기</button>
            </Link>
        </>
    )
}

export default ProductInit;