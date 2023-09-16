import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_REDIRECT_URL,
});

// 요청 인터셉터
instance.interceptors.request.use(
    (config) => {
        //모든 request에 auth token headers를 넣는다.
        const accessToken = process.env.REACT_APP_TOKEN

        config.headers['Content-Type'] = 'application/json';
        config.headers['Authorization'] = `Bearer ${accessToken}`;

        // 위 코드는 아래와 같이 수정할 예정이다.
        // const accessToken = getCookie('accessToken');
        //
        // if(accessToken && refreshToken) {
        //     config.headers['Content-Type'] = 'application/json';
        //     config.headers['Authorization'] = `Bearer ${accessToken}`
        // }

        return config;
    },
    (error) => {
        // console.log(error);
        return Promise.reject(error);
    }
);

// 응답 인터셉터
instance.interceptors.response.use(
    (response) => {
    },
    (error) => {
        // console.log(error);
        return Promise.reject(error);
    }
);

export default instance;