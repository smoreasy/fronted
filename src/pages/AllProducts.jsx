import styled from "styled-components";
import ProductList from "../components/Product/ProductList";
const AllProducts = () => {
    return (
        <AllProductStyle>
            <ProductList />
        </AllProductStyle>
    )
}

export default AllProducts;

const AllProductStyle = styled.div`
`