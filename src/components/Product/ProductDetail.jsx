import styled from "styled-components";

const ProductDetail = (props) => {
    return (
        <ProductDetailStyle>
            <img src="https://cdn.pixabay.com/photo/2015/10/10/04/19/totoro-980324_1280.jpg" alt="" />
            <ul>
                <li>
                    <h3>{props.productDetailData.name}</h3>
                </li>
                <li>
                    <p>{props.productDetailData.stock}</p>
                </li>
                <li>
                    <p>{props.productDetailData.totalSale}</p>
                </li>
                <li>
                    <p>{props.productDetailData.cost}</p>
                </li>
                <li>
                    <p>{props.productDetailData.productStatus}</p>
                </li>
            </ul>
        </ProductDetailStyle>
    )
}

export default ProductDetail;

const ProductDetailStyle = styled.article`
  img {
    width: 100%;
  }
`