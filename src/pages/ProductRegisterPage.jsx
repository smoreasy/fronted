import styled from "styled-components";
import FormSubmitButton from "../components/common/Button/FormSubmitButton";
import Input from "../components/common/Form/Input";
import {useEffect, useState} from "react";
import axios from "axios";
import {resolvePath, useNavigate} from "react-router-dom";
const ProductRegisterPage = () => {
    const navigate = useNavigate();

    const [nameValue, setNameValue] = useState('');
    const [stockValue, setStockValue] = useState(0);
    const [totalSaleValue, setTotalSaleValue] = useState(0);
    const [costValue, setCostValue] = useState(0);
    const [sellingPriceValue, setSellingPriceValue] = useState(0);
    const [productStatusValue, setProductStatusValue] = useState('selling');
    const [categoryIdValue, setCategoryIdValue] = useState(1);

    // const [uploadImage, setUploadImage] = useState('');
    const productStatusOption = [
        {
            label: '판매 중',
            value: 'selling',
        },
        {
            label: '판매 중지',
            value: 'selling',
        },
        {
            label: '품절',
            value: 'selling',
        },
    ]
    const handleProductStatus = e => {
        setProductStatusValue(e.target.value);
    }
    const handleSellingPrice = e => {
        setSellingPriceValue(e.target.value);
    }
    // const handleImageUpload = e => {
    //     const file = e.target.files[0];
    //     const formData = new FormData();
    //     formData.append('image', file);
    //
    //     axios({
    //         method: 'POST',
    //         url: '이미지 저장할 서버 주소',
    //         data: formData,
    //     }).then(result => {
    //         // console.log('요청성공');
    //         setUploadImage('저장된 이미지 주소');
    //     });
    // };

    const handleProductRegisterFormSubmit = e => {
        e.preventDefault();
        try {
            fetch('http://43.200.49.69:8080/products', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    name: `${nameValue}`,
                    stock: `${stockValue}`,
                    totalSale: `${totalSaleValue}`,
                    cost: `${costValue}`,
                    sellingPrice: `${sellingPriceValue}`,
                    productStatus: `${productStatusValue}`,
                    categoryId: 1,
                })
            }).then((response) => {
                const responseBody = response.json();
                console.log(responseBody);
                navigate('/product/all-products');
            })
        } catch (error) {
            console.log('error: ', error);
        }
    }

    return (
        <form onSubmit={handleProductRegisterFormSubmit}>
            <Input
                label="상품명"
                htmlFor="product-name"
                id="product-name"
                placeholder="상품 이름을 입력해주세요."
                value={nameValue}
                onChange={e => setNameValue(e.target.value)}
            />

            <Input
                label="재고"
                type="number"
                htmlFor="product-left"
                id="product-left"
                placeholder="재고 개수를 입력해주세요."
                value={stockValue}
                onChange={e => setStockValue(e.target.value)}
            />

            <Input
                label="누적 판매 개수"
                type="number"
                htmlFor="product-price"
                id="product-price"
                placeholder="누적 판매 개수를 입력해주세요."
                value={totalSaleValue}
                onChange={e => setTotalSaleValue(e.target.value)}
            />

            <Input
                label="원가"
                type="number"
                htmlFor="cost"
                id="cost"
                placeholder="원가를 입력해주세요."
                value={costValue}
                onChange={e => setCostValue(e.target.value)}
            />

            <Input
                label="판매가"
                type="number"
                htmlFor="selling-price"
                id="selling-price"
                placeholder="판매금액을 입력해주세요."
                value={sellingPriceValue}
                onChange={e => setSellingPriceValue(e.target.value)}
            />

            <select onChange={handleProductStatus}>
                {productStatusOption.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>

            <select onChange={handleSellingPrice}>
                <option>스티커</option>
                <option>다이어리</option>
                <option>키링</option>
            </select>

            {/*<Input*/}
            {/*    label="대표 이미지"*/}
            {/*    type="file"*/}
            {/*    for="product-image"*/}
            {/*    id="product-image"*/}
            {/*    onChange={handleImageUpload}*/}
            {/*/>*/}
            {/*{uploadImage.length > 0 && <img src={uploadImage} alt="" />}*/}

            <FormSubmitButton type="submit" text="등록하기" />
        </form>
    )
}

export default ProductRegisterPage;
