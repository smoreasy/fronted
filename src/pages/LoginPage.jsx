import LoginForm from "../components/common/Form/LoginForm";
import KAKAO_AUTH_URL from "../apis/services/OAuth";
import { Link } from "react-router-dom";

import IconFacebook from "../assets/images/sns-facebook.svg"
import IconKakao from "../assets/images/sns-kakao.svg";
import IconGoogle from "../assets/images/sns-google.svg";
import styled from "styled-components";

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
        link: KAKAO_AUTH_URL,
        logo: IconGoogle,
    }
];

const LoginPage = () => {
    return (
        <LoginPageStyle>
            <p>로그인페이지입니다.</p>
            <LoginForm loginData={loginData} />
        </LoginPageStyle>
    )
}
export default LoginPage;

const LoginPageStyle = styled.div`
  width: calc(100% - 60px);
  margin: 0 auto;
  
  padding-top: 360px;
`
