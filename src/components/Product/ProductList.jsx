import ProductListItem from "./ProductListItem";
import styled from "styled-components";
import {Link} from "react-router-dom";

const ProductList = (props) => {
    return (
        <ProductListStyle>
            {props.props.map((ele, idx) => (
                <Link key={idx} to={`/product/product-detail/${ele.id}`}>
                    <ProductListItem image={ele.image} text={ele.name} number={ele.stock}/>
                </Link>
            ))}
        </ProductListStyle>
    )
}
export default ProductList;

const ProductListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`