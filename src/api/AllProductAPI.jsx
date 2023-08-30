const AllProductAPI = () => {
    // const token = useRecoilValue(userToken);

    const allProductList = async () => {
        try {
            const response = await fetch('http://localhost:8080/products', {
                method: 'GET',
                // headers: {
                //     Authorization: `Bearer ${token}`,
                // },
            });

            const data = await response.json();
            return data;
        } catch (error) {
            console.log('API 응답에 실패했습니다.', error);
        }
    }
    // 최종적으로 출력하는 것
    return { allProductList }
}

export default AllProductAPI;