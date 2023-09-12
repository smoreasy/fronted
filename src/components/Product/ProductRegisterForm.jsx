import React from 'react';
import Input from "../common/Form/Input";
import FormSubmitButton from "../common/Button/FormSubmitButton";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import styled from "styled-components";
import axios from "axios";


const ProductRegisterForm = () => {
    const navigate = useNavigate();

    const [nameValue, setNameValue] = useState('');
    const [stockValue, setStockValue] = useState(0);
    const [totalSaleValue, setTotalSaleValue] = useState(0);
    const [costValue, setCostValue] = useState(0);
    const [sellingPriceValue, setSellingPriceValue] = useState(0);
    const [productStatusValue, setProductStatusValue] = useState('selling');
    const [categoryIdValue, setCategoryIdValue] = useState(1);

    const [uploadImageValue, setUploadImageValue] = useState('');
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
    const handleImageUpload = e => {
        e.preventDefault();

        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);

        axios({
            method: 'POST',
            url: 'http://43.200.49.69:8080/products',
            data: formData,
        }).then(result => {
            console.log(result)
        });
    };

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
                    file: `${uploadImageValue}`,
                    categoryId: 1,
                })
            }).then((response) => {
                const responseBody = response.json();
                navigate('/product/all-products');
            })
        } catch (error) {
            console.log('error: ', error);
        }
    }

    return (
        <ProductRegisterFormStyle onSubmit={handleProductRegisterFormSubmit}>
            <ul>
                <li>
                    <Input
                        label="상품명"
                        htmlFor="product-name"
                        id="product-name"
                        placeholder="상품 이름을 입력해주세요."
                        value={nameValue}
                        onChange={e => setNameValue(e.target.value)}
                    />
                </li>
                <li>
                    <Input
                        label="재고"
                        type="number"
                        htmlFor="product-left"
                        id="product-left"
                        placeholder="재고 개수를 입력해주세요."
                        value={stockValue}
                        onChange={e => setStockValue(e.target.value)}
                    />
                </li>
                <li>
                    <Input
                        label="누적 판매 개수"
                        type="number"
                        htmlFor="product-price"
                        id="product-price"
                        placeholder="누적 판매 개수를 입력해주세요."
                        value={totalSaleValue}
                        onChange={e => setTotalSaleValue(e.target.value)}
                    />
                </li>
                <li>
                    <Input
                        label="원가"
                        type="number"
                        htmlFor="cost"
                        id="cost"
                        placeholder="원가를 입력해주세요."
                        value={costValue}
                        onChange={e => setCostValue(e.target.value)}
                    />
                </li>
                <li>
                    <Input
                        label="판매가"
                        type="number"
                        htmlFor="selling-price"
                        id="selling-price"
                        placeholder="판매금액을 입력해주세요."
                        value={sellingPriceValue}
                        onChange={e => setSellingPriceValue(e.target.value)}
                    />
                </li>
                <li>
                    <select onChange={handleProductStatus}>
                        {productStatusOption.map((option) => (
                            <option value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </li>
                <li>
                    <select>
                        <option>스티커</option>
                        <option>다이어리</option>
                        <option>키링</option>
                    </select>
                </li>
                <li>
                    <Input
                        label="대표 이미지"
                        type="file"
                        htmlFor="product-image"
                        id="product-image"
                        onChange={handleImageUpload}
                        value={uploadImageValue}
                    />
                    {uploadImageValue.length > 0 && <img className="image-place" src={uploadImageValue} alt="" />}
                </li>
            </ul>

            <FormSubmitButton type="submit" text="등록하기" />
        </ProductRegisterFormStyle>
    );
}
export default ProductRegisterForm;


const ProductRegisterFormStyle = styled.form`
  ul li {
    margin: 20px 0;
  }
  
  ul li select {
    width: 100%;
    padding: 10px 0;
  }
  
  .image-place {
    width: 100%;
    height: 200px;
    
    margin-top: 10px;
    border-radius: 10px;
    background-color: burlywood;
  }
`
