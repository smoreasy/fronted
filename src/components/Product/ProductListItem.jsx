import styled from "styled-components";

const ProductListItem = (props) => {
    return (
        <ProductListItemStyle>
            <img src={props.image} />
            <div>
                <h3>{props.text}</h3>
                <p>{props.number}개</p>
            </div>
        </ProductListItemStyle>
    )
}

export default ProductListItem;

const ProductListItemStyle = styled.button`
  width: 100%;
  
  img {
    width: 100%;
    height: 140px;
    background-color: cadetblue;
    border-radius: 10px;
  }
  div {
    padding: 8px 10px 14px 10px;
  }
  div h3 {
    margin: 8px 0 6px 0;
  }
  div p {
    color: var(--basic-color);
    font-weight: bold;
  }
`