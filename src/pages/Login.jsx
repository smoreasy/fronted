import LoginForm from "../components/common/Form/LoginForm";
import KAKAO_AUTH_URL from "../api/OAuth";
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

const Login = () => {
    return (
        <div>
            <LoginForm>
                {loginData.map((ele, idx) => (
                    <Link to={ele.link}>
                        {/* LoginButton 따로 컴포넌트화 필요성 */}
                        <LoginButtonStyle>
                            <img src={ele.logo} width="25" height="25"/>
                            {ele.method}로 로그인
                        </LoginButtonStyle>
                    </Link>

                ))}
            </LoginForm>
        </div>
    )
}
export default Login;

const LoginButtonStyle = styled.button`
  width: calc(100% - 60px);
  margin: 0 auto;

  display: flex;
  align-items: center;
  
  padding: 10px 0;
  border-radius: 8px;
  background-color: #222;
  color: #fff;
`