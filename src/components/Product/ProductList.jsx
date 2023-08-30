import ProductListItem from "./ProductListItem";
import styled from "styled-components";

const data = [
    {
        상품명: '상품명이여유',
        image: "https://cdn.pixabay.com/photo/2023/08/18/16/15/stairs-8198875_1280.jpg",
        number: '3',
    },
    {
        상품명: '상품명이여유1',
        image: "https://cdn.pixabay.com/photo/2023/08/18/16/15/stairs-8198875_1280.jpg",
        number: '13',
    },
    {
        상품명: '상품명이여유1',
        image: "https://cdn.pixabay.com/photo/2023/08/18/16/15/stairs-8198875_1280.jpg",
        number: '33',
    },
    {
        상품명: '상품명이여유1',
        image: "https://cdn.pixabay.com/photo/2023/08/18/16/15/stairs-8198875_1280.jpg",
        number: '3',
    },
    {
        상품명: '상품명이여유1',
        image: "https://cdn.pixabay.com/photo/2023/08/18/16/15/stairs-8198875_1280.jpg",
        number: '3',
    },
    {
        상품명: '상품명이여유1',
        image: "https://cdn.pixabay.com/photo/2023/08/18/16/15/stairs-8198875_1280.jpg",
        number: '3',
    },
    {
        상품명: '상품명이여유1',
        image: "https://cdn.pixabay.com/photo/2023/08/18/16/15/stairs-8198875_1280.jpg",
        number: '3',
    },
    {
        상품명: '상품명이여유1',
        image: "https://cdn.pixabay.com/photo/2023/08/18/16/15/stairs-8198875_1280.jpg",
        number: '3',
    },

]
const ProductList = (props) => {
    return (
        <ProductListStyle>
            {props.data.map((ele, idx) => (
                <ProductListItem image={ele.image} text={ele.상품명} number={ele.number}/>
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

