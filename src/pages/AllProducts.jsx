import styled from "styled-components";
import ProductList from "../components/Product/ProductList";
import allProductAPI from "../api/AllProductAPI";
const AllProducts = () => {
    return (
        <AllProductStyle>
            <ProductList props={allProductAPI}/>
        </AllProductStyle>
    )
}

export default AllProducts;

const AllProductStyle = styled.div`
`