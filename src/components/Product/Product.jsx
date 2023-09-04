import ProductList from "./ProductList";
import Navbar from "../common/Navbar";
import HeaderBack from "../common/Header/HeaderBack";

const Product = (props) => {
    return (
        <>
            <ProductList props={props.productData}/>
        </>
    )
}

export default Product;