import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import styled from "styled-components";
import Input from "../components/common/Form/Input";
import FormSubmitButton from "../components/common/Button/FormSubmitButton";

const ProductDetailModifyPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [nameValue, setNameValue] = useState('');
    const [stockValue, setStockValue] = useState(0);
    const [totalSaleValue, setTotalSaleValue] = useState(0);
    const [costValue, setCostValue] = useState(0);
    const [sellingPriceValue, setSellingPriceValue] = useState(0);
    const [productStatusValue, setProductStatusValue] = useState('판매 중');
    const [categoryIdValue, setCategoryIdValue] = useState(1);

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
    useEffect(() => {
        try {
            fetch(`http://43.200.49.69:8080/products/${id}`, {
                method: 'GET'
            }).then((response) => {
                return response.json();
            }).then((data) => {
                setNameValue(data.name);
                setStockValue(data.stock);
                setTotalSaleValue(data.totalSale);
                setCostValue(data.cost);
                setSellingPriceValue(data.sellingPrice);
                setProductStatusValue(data.productStatus);
                setCategoryIdValue(data.categoryId);
            })
        } catch(error) {
            console.log(error)
        }
    }, [id]);

    const handleUpdate = e => {
        e.preventDefault();

        try {
            fetch(`http://43.200.49.69:8080/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    stock: `${stockValue}`,
                    totalSale: `${totalSaleValue}`,
                })
            }).then((response) => {
                response.json();
            }).then((data) => {
                console.log(data);
                navigate('/product/all-products');
            })
        } catch(error) {
            console.log('error: ', error);
        }
    }



    return (
        <ProductDetailModifyFormStyle onSubmit={handleUpdate}>
            <ul>
                <li>
                    <Input
                        label="상품명"
                        htmlFor="product-name"
                        id="product-name"
                        placeholder="상품 이름을 입력해주세요."
                        value={nameValue}
                        readOnly
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
                        readOnly
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
                        readOnly
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
                    {/*<Input*/}
                    {/*    label="대표 이미지"*/}
                    {/*    type="file"*/}
                    {/*    for="product-image"*/}
                    {/*    id="product-image"*/}
                    {/*    onChange={handleImageUpload}*/}
                    {/*/>*/}
                    {/*{uploadImage.length > 0 && <img src={uploadImage} alt="" />}*/}
                </li>
            </ul>
            <FormSubmitButton type="submit" text="수정하기" />
        </ProductDetailModifyFormStyle>
    )
}
export default ProductDetailModifyPage;

const ProductDetailModifyFormStyle = styled.form`
  ul li {
    margin: 20px 0;
  }
  ul li select {
    width: 100%;
    padding: 10px 0;
  }
`

