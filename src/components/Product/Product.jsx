import ProductList from "./ProductList";

const Product = (props) => {
    return (
        <ProductList props={props.productData}/>
    )
}

export default Product;