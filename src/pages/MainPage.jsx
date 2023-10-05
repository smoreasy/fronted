import styled from "styled-components";
import MainBanner from "../components/MainBanner";
import MainCategoryButtons from "../components/MainCategoryButtons";
const MainPage = () => {

    const categoryData = [
        {
            background: "https://cdn.pixabay.com/photo/2016/09/16/19/19/online-store-1674907_1280.png",
            title: "입점처 관리",
            content: "손쉽게 입점처를 관리해요.",
            link: '/product/all-products'
        },
        {
            background: "https://cdn.pixabay.com/photo/2015/11/10/14/26/box-1036976_1280.png",
            title: "상품 관리",
            content: "손쉽게 모든 상품을 관리해요.",
            link: '/product/all-products'
        },
        {
            background: "https://cdn.pixabay.com/photo/2012/04/15/18/54/buildings-34906_1280.png",
            title: "공장 관리",
            content: "지금까지 주문했던 공장을 관리해요.",
            link: '/product/all-products'
        },
        {
            background: "https://cdn.pixabay.com/photo/2017/05/14/03/45/data-2311261_1280.png",
            title: "통계 정리",
            content: "상품에 대한 통계를 알아보세요.",
            link: '/product/all-products'
        },
        {
            background: "https://cdn.pixabay.com/photo/2016/02/07/14/45/smartphone-1184883_1280.png",
            title: "채팅하기",
            content: "입점처와 소통할 수 있어요.",
            link: '/product/all-products'
        },


    ];

    return (
        <>
            <MainBanner />
            <MainCategoryButtons categoryData={categoryData} />
        </>
    )
}

export default MainPage;
