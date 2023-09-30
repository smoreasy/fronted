import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_REDIRECT_URL,
    timeout: 2000,
});

// 요청 인터셉터
instance.interceptors.request.use(
    (config) => {
        // 모든 request에 auth token headers를 넣는다.
        const token = localStorage.getItem('token');
        if(token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        // const accessToken = getCookie('accessToken');
        //
        // if(accessToken && refreshToken) {
        //     config.headers['Content-Type'] = 'application/json';
        //     config.headers['Authorization'] = `Bearer ${accessToken}`
        // }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 응답 인터셉터
instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if(error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
            console.log('timeout 에러가 발생했습니다.')
        }        return Promise.reject(error);
    }
);

export default instance;