import HeaderBasic from "../components/common/Header/HeaderBasic";
import styled from "styled-components";
const AllProducts = () => {
    return (
        <AllProductStyle>
            <h1>등록된 상품이 없습니다.</h1>
            <button>상품 등록하기</button>
        </AllProductStyle>
    )
}

export default AllProducts;

const AllProductStyle = styled.div`
  padding: 80px 0;
  text-align: center;
`