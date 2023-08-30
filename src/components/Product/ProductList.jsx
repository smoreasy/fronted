import ProductListItem from "./ProductListItem";
import styled from "styled-components";
const ProductList = (props) => {
    return (
        <ProductListStyle>
            <p>상품이 있으면 나타나는 페이지</p>
            {props.props.productData.map((ele, idx) => (
                <ProductListItem image={ele.image} text={ele.name} number={ele.stock}/>
            ))}
        </ProductListStyle>
    )
}
export default ProductList;

const ProductListStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px 20px;
`

