import StoreList from "../components/store/StoreList";

const MyStore = () => {
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
    return (
        <>
            <StoreList props={data} />
        </>
    )
}

export default MyStore;