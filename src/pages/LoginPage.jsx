import LoginForm from "../components/common/Form/LoginForm";
import { GOOGLE_AUTH_URL, KAKAO_AUTH_URL } from "../apis/services/OAuth";
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
        link: 'http://43.200.49.69:8080/login/oauth2/code/google',
        logo: IconGoogle,
    }
];

const LoginPage = () => {
    return (
        <LoginPageStyle>
            <div className="intro-login">
                <h1>로그인페이지입니다.</h1>
                <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Admission%20Tickets.png" alt="Admission Tickets" width="100" height="100" />
            </div>
            <LoginForm loginData={loginData} />
        </LoginPageStyle>
    )
}
export default LoginPage;

const LoginPageStyle = styled.div`
  width: calc(100% - 60px);
  margin: 0 auto;
  .intro-login {
    padding: 240px 0 100px 0;
    text-align: center;

    h1 {
      font-size: 1.2rem;
      font-weight: bold;
    }    
  }

`
