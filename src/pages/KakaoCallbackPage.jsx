import {useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const KakaoCallbackPage = () => {
    const navigate = useNavigate();
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get('code');

    axios({
       method: 'GET',
       url: `http://localhost:3000/login/oauth2/callback/kakao?code=${code}`,
        headers: {
           
        }
    }).then((result) => {
        console.log(result);

        const ACCESS_TOKEN = result.data.accessToken;
        localStorage.setItem('token', ACCESS_TOKEN);
        navigate('/product/all-products');
    });
    return (
        <>
            <p>로그인 중입니다. 잠시만 기다려주세요! </p>
        </>
    )
}

export default KakaoCallbackPage;