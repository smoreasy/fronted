import ProductListItem from "./ProductListItem";
import styled from "styled-components";
import {Link} from "react-router-dom";

const ProductList = (props) => {
    return (
        <ProductListStyle>
            <p>상품이 있으면 나타나는 페이지</p>
            {props.props.map((ele, idx) => (
                <Link key={ele.id} to={`/product/product-detail/${ele.id}`}>
                    <ProductListItem image={ele.image} text={ele.name} number={ele.stock}/>
                </Link>
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