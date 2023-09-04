import {Link} from "react-router-dom";
import styled from "styled-components";
import FormSubmitButton from "../common/Button/FormSubmitButton";
const ProductInit = () => {
    return (
        <ProductInitStyle>
            <h1>등록된 상품이 없습니다.</h1>
            <Link to={'/product/product-register'}>
                <FormSubmitButton text="상품 등록하기"></FormSubmitButton>
            </Link>
        </ProductInitStyle>
    )
}

export default ProductInit;

const ProductInitStyle = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  
  button {
    margin-top: 14px; 
  }
`