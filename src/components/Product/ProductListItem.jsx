import styled from "styled-components";

const ProductListItem = (props) => {
    return (
        <ProductListItemStyle>
            <img src={props.image} />
            <h3>{props.text}</h3>
            <p>{props.number}개</p>
        </ProductListItemStyle>
    )
}

export default ProductListItem;

const ProductListItemStyle = styled.button`
  width: calc((100% - 20px) / 2);
  
  img {
    width: 100%;
  }
  h3 {
    margin: 8px 0 6px 0;
  }
`