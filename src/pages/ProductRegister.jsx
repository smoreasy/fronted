import styled from "styled-components";
import Input from "../components/common/Input";
import FormSubmitButton from "../components/common/FormSubmitButton";
const ProductRegister = () => {
    return (
        <ProductRegisterStyle>
            <Input
                for="product-name"
                id="product-name"
                text="상품명"
            />

            <Input
                type="number"
                for="product-left"
                id="product-left"
                text="재고"
            />

            <Input
                type="number"
                for="product-price"
                id="product-price"
                text="판매가"
            />

            <Input
                type="number"
                for="product-price"
                id="product-price"
                text="누적 판매 개수"
            />

            <select>
                <option>판매 중</option>
                <option>판매 중지</option>
                <option>품절</option>
            </select>

            <Input
                type="file"
                for="product-image"
                id="product-image"
                text="대표 이미지"
            />

            <FormSubmitButton text="등록하기"></FormSubmitButton>
        </ProductRegisterStyle>
    )
}

export default ProductRegister;

const ProductRegisterStyle = styled.form`
    padding: 80px 0;
`