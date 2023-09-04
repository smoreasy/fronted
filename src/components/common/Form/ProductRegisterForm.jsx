// import Input from "./Input";
// import FormSubmitButton from "../Button/FormSubmitButton";
//
// const ProductRegisterForm = () => {
//     return (
//         <form onSubmit={handleProductRegisterFormSubmit}>
//             <Input
//                 label="상품명"
//                 htmlFor="product-name"
//                 id="product-name"
//                 placeholder="상품 이름을 입력해주세요."
//                 value={nameValue}
//                 onChange={e => setNameValue(e.target.value)}
//             />
//
//             <Input
//                 label="재고"
//                 type="number"
//                 htmlFor="product-left"
//                 id="product-left"
//                 placeholder="재고 개수를 입력해주세요."
//                 value={stockValue}
//                 onChange={e => setStockValue(e.target.value)}
//             />
//
//             <Input
//                 label="누적 판매 개수"
//                 type="number"
//                 htmlFor="product-price"
//                 id="product-price"
//                 placeholder="누적 판매 개수를 입력해주세요."
//                 value={totalSaleValue}
//                 onChange={e => setTotalSaleValue(e.target.value)}
//             />
//
//             <Input
//                 label="원가"
//                 type="number"
//                 htmlFor="cost"
//                 id="cost"
//                 placeholder="원가를 입력해주세요."
//                 value={costValue}
//                 onChange={e => setCostValue(e.target.value)}
//             />
//
//             <Input
//                 label="판매가"
//                 type="number"
//                 htmlFor="selling-price"
//                 id="selling-price"
//                 placeholder="판매금액을 입력해주세요."
//                 value={sellingPriceValue}
//                 onChange={e => setSellingPriceValue(e.target.value)}
//             />
//
//             <select onChange={handleProductStatus}>
//                 {productStatusOption.map((option) => (
//                     <option value={option.value}>{option.label}</option>
//                 ))}
//             </select>
//
//             <select onChange={handleSellingPrice}>
//                 <option>스티커</option>
//                 <option>다이어리</option>
//                 <option>키링</option>
//             </select>
//
//             {/*<Input*/}
//             {/*    label="대표 이미지"*/}
//             {/*    type="file"*/}
//             {/*    for="product-image"*/}
//             {/*    id="product-image"*/}
//             {/*    onChange={handleImageUpload}*/}
//             {/*/>*/}
//             {/*{uploadImage.length > 0 && <img src={uploadImage} alt="" />}*/}
//
//             <FormSubmitButton type="submit" text="등록하기" />
//         </form>
//     )
// }import Input from "./Input";
// import FormSubmitButton from "../Button/FormSubmitButton";
//
// const ProductRegisterForm = () => {
//     return (
//         <form onSubmit={handleProductRegisterFormSubmit}>
//             <Input
//                 label="상품명"
//                 htmlFor="product-name"
//                 id="product-name"
//                 placeholder="상품 이름을 입력해주세요."
//                 value={nameValue}
//                 onChange={e => setNameValue(e.target.value)}
//             />
//
//             <Input
//                 label="재고"
//                 type="number"
//                 htmlFor="product-left"
//                 id="product-left"
//                 placeholder="재고 개수를 입력해주세요."
//                 value={stockValue}
//                 onChange={e => setStockValue(e.target.value)}
//             />
//
//             <Input
//                 label="누적 판매 개수"
//                 type="number"
//                 htmlFor="product-price"
//                 id="product-price"
//                 placeholder="누적 판매 개수를 입력해주세요."
//                 value={totalSaleValue}
//                 onChange={e => setTotalSaleValue(e.target.value)}
//             />
//
//             <Input
//                 label="원가"
//                 type="number"
//                 htmlFor="cost"
//                 id="cost"
//                 placeholder="원가를 입력해주세요."
//                 value={costValue}
//                 onChange={e => setCostValue(e.target.value)}
//             />
//
//             <Input
//                 label="판매가"
//                 type="number"
//                 htmlFor="selling-price"
//                 id="selling-price"
//                 placeholder="판매금액을 입력해주세요."
//                 value={sellingPriceValue}
//                 onChange={e => setSellingPriceValue(e.target.value)}
//             />
//
//             <select onChange={handleProductStatus}>
//                 {productStatusOption.map((option) => (
//                     <option value={option.value}>{option.label}</option>
//                 ))}
//             </select>
//
//             <select onChange={handleSellingPrice}>
//                 <option>스티커</option>
//                 <option>다이어리</option>
//                 <option>키링</option>
//             </select>
//
//             {/*<Input*/}
//             {/*    label="대표 이미지"*/}
//             {/*    type="file"*/}
//             {/*    for="product-image"*/}
//             {/*    id="product-image"*/}
//             {/*    onChange={handleImageUpload}*/}
//             {/*/>*/}
//             {/*{uploadImage.length > 0 && <img src={uploadImage} alt="" />}*/}
//
//             <FormSubmitButton type="submit" text="등록하기" />
//         </form>
//     )
// }