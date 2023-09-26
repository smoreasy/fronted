import SocialLoginForm from "../components/common/Form/SocialLoginForm";
import { GOOGLE_AUTH_URL, KAKAO_AUTH_URL } from "../apis/services/OAuth";

import { isLogin } from "../recoil/atom/IsLogin";

import IconFacebook from "../assets/images/sns-facebook.svg"
import IconKakao from "../assets/images/sns-kakao.svg";
import IconGoogle from "../assets/images/sns-google.svg";
import styled from "styled-components";
import LoginForm from "../components/common/Form/LoginForm";
import {useRecoilValue} from "recoil";
import { useEffect } from "react";
import {Link} from "react-router-dom";

const loginData = [
    {
        method: '카카오',
        link: KAKAO_AUTH_URL,
        logo: IconKakao,
    },
    {
        method: '네이버',
        link: KAKAO_AUTH_URL,
        logo: IconFacebook,
    },
    {
        method: '구글',
        link: GOOGLE_AUTH_URL,
        logo: IconGoogle,
    }
];

const LoginPage = () => {
    // const [isLoginData, setIsLoginData] = useRecoilValue(isLogin);
    // const token = window.location.href.split('?token=')[1];
    //
    // useEffect(() => {
    //     if(token) {
    //         localStorage.setItem('loginToken', token);
    //     }
    //
    //     if(localStorage.getItem('loginToken')) {
    //         setIsLoginData(true);
    //     }
    // });

    return (
        <LoginPageStyle>
            <h1>로그인</h1>

            <LoginForm />

            <Link to={'/join'}>
                <button className="joinButton">이메일로 회원가입</button>
            </Link>

            <SocialLoginForm loginData={loginData} />
        </LoginPageStyle>
    )
}
export default LoginPage;

const LoginPageStyle = styled.div`
  width: calc(100% - 60px);
  margin: 0 auto;
  text-align: center;
  
  h1 {
    font-size: 1.4rem;
    font-weight: bold;
    
    padding: 120px 0 10px 0;
  }
  .joinButton {
    margin-top: 20px;
  }
`
