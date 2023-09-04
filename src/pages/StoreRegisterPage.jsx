import styled from "styled-components";
import FormSubmitButton from "../components/common/Button/FormSubmitButton";
import Input from "../components/common/Form/Input";
import {useEffect, useState} from "react";
import axios from "axios";
import {resolvePath, useNavigate} from "react-router-dom";
const StoreRegisterPage = () => {
    const navigate = useNavigate();

    const [nameValue, setNameValue] = useState('');
    const [stockValue, setStockValue] = useState(0);
    const [totalSaleValue, setTotalSaleValue] = useState('');
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
            fetch('http://43.200.49.69:8080/stores', {
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
                label="입점처 이름"
                htmlFor="store-name"
                id="store-name"
                placeholder="입점처 이름을 입력해주세요."
                value={nameValue}
                onChange={e => setNameValue(e.target.value)}
            />

            <Input
                label="주소"
                type="text"
                htmlFor="store-address"
                id="store-address"
                placeholder="가게 주소를 입력해주세요."
                value={stockValue}
                onChange={e => setStockValue(e.target.value)}
            />

            <Input
                label="연락처"
                type="number"
                htmlFor="store-number"
                id="store-number"
                placeholder="연락 가능한 전화번호를 입력하세요"
                value={totalSaleValue}
                onChange={e => setTotalSaleValue(e.target.value)}
            />
            <Input
                htmlFor="store-email"
                id="store-email"
                placeholder="연락 가능한 이메일을 입력하세요"
                value={totalSaleValue}
                onChange={e => setTotalSaleValue(e.target.value)}
            />

            <Input
                label="입점료"
                type="number"
                htmlFor="store-monthly-fee"
                id="store-monthly-fee"
                placeholder="입점료를 입력해주세요."
                value={costValue}
                onChange={e => setCostValue(e.target.value)}
            />
            <Input
                label="수수료"
                type="number"
                htmlFor="store-percentage-fee"
                id="store-percentage-fee"
                placeholder="수수료를 입력해주세요."
                value={costValue}
                onChange={e => setCostValue(e.target.value)}
            />

            <Input
                label="입점기한"
                type="number"
                htmlFor="contract"
                id="contract"
                placeholder="계약기간을 입력해주세요."
                value={sellingPriceValue}
                onChange={e => setSellingPriceValue(e.target.value)}
            />

            <Input
                label="메모"
                type="text"
                htmlFor="memo"
                id="memo"
                placeholder="내용을 입력해주세요."
            />

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

export default StoreRegisterPage;
