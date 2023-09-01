import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Input from "../components/common/Form/Input";
import FormSubmitButton from "../components/common/Button/FormSubmitButton";
import axios from "axios";
const ProductDetailModifyPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();


    const [nameValue, setNameValue] = useState('');
    const [stockValue, setStockValue] = useState(0);
    const [totalSaleValue, setTotalSaleValue] = useState(0);
    const [costValue, setCostValue] = useState(0);
    const [sellingPriceValue, setSellingPriceValue] = useState(0);
    const [productStatusValue, setProductStatusValue] = useState('selling');
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
        const getInputInfo = async () => {
            try {
                const { data } = await axios.get(`http://43.200.49.69:8080/products/${id}`);
                return data;
            } catch(error) {
                console.log(error)
            }
        }
        getInputInfo().then((response) => {
            setNameValue(response.name);
            setStockValue(response.stock);
            setTotalSaleValue(response.totalSale);
            setCostValue(response.cost);
            setSellingPriceValue(response.sellingPrice);
            setProductStatusValue(response.productStatus);
            setCategoryIdValue(response.categoryId);
        })
    }, [id]);

    const handleUpdate = () => {
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
                if (response.status === 200) {
                    navigate('/product/all-products');
                } else {
                    console.log('데이터 수정에 실패하였습니다.');
                }
            })
        } catch(error) {
            console.log('error: ', error);
        }
    }


    return (
        <form onSubmit={handleUpdate}>
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

            <FormSubmitButton type="submit" text="수정하기" />
        </form>
    )
}
export default ProductDetailModifyPage;