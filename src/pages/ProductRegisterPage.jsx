import styled from "styled-components";

import FormSubmitButton from "../components/common/Button/FormSubmitButton";
import Input from "../components/common/Form/Input";
const ProductRegisterPage = () => {
    return (
        <ProductRegisterStyle>
            <Input
                for="product-name"
                id="product-name"
                text="상품명"
                placeholder="상품 이름을 입력해주세요."
            />

            <Input
                type="number"
                for="product-left"
                id="product-left"
                text="재고"
                placeholder="재고 개수를 입력해주세요."
            />

            <Input
                type="number"
                for="product-price"
                id="product-price"
                text="판매가"
                placeholder="판매금액을 입력해주세요."
            />

            <Input
                type="number"
                for="product-price"
                id="product-price"
                text="누적 판매 개수"
                placeholder="누적 판매 개수를 입력해주세요."
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

            <FormSubmitButton text="등록하기" />
        </ProductRegisterStyle>
    )
}

export default ProductRegisterPage;

const ProductRegisterStyle = styled.form`
`