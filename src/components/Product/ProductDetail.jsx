import styled from "styled-components";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import HeaderBack from "../common/Header/HeaderBack";
import Navbar from "../common/Navbar";
import ProductDeleteAPI from "../../services/ProductDeleteAPI";
import FormSubmitButton from "../common/Button/FormSubmitButton";

const ProductDetail = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();


    return (
        <>
            <HeaderBack
                text="전체상품"
                firstButton="제품 삭제 하기"
                secondButton="로그아웃하기"
            />

            <ProductDetailStyle>
                <img src="https://cdn.pixabay.com/photo/2015/10/10/04/19/totoro-980324_1280.jpg" alt="" />
                <ul>
                    <li className="product-name">
                        <h3>{props.productDetailData.name}</h3>
                    </li>
                    <li>
                        <p>{props.productDetailData.stock} 개</p>
                    </li>
                    <li>
                        <p>{props.productDetailData.totalSale} 개</p>
                    </li>
                    <li>
                        <p>{props.productDetailData.cost} 원</p>
                    </li>
                    <li className="sale-condition">
                        <p>{props.productDetailData.productStatus}</p>
                    </li>
                    <li>
                        <Link to={`/product/product-detail-modify/${props.productDetailData.id}`}>
                            <FormSubmitButton text="상품 정보 수정하기"></FormSubmitButton>
                        </Link>
                    </li>
                    <li>
                        <FormSubmitButton text="상품 삭제하기"></FormSubmitButton>
                    </li>
                </ul>
            </ProductDetailStyle>

            <Navbar />
        </>

    )
}

export default ProductDetail;

const ProductDetailStyle = styled.article`
  img {
    width: 100%;
    border-radius: 10px;
  }
  ul li {
    margin: 10px 0;
  }
  .product-name {
    font-weight: bold;
  }
  .sale-condition {
    font-weight: bold;
    color: var(--basic-color);
  }
`