import {Link} from "react-router-dom";
import SocialLoginButton from "../Button/SocialLoginButton";
import styled from "styled-components";

const SocialLoginForm = (loginData) => {
    return (
        <SocialLoginFormStyle>
            <p>SNS로 로그인하기</p>
            <form>
                {loginData.loginData.map((ele, idx) =>
                    <Link to={ele.link} key={idx}>
                        <SocialLoginButton props={ele}/>
                    </Link>
                )}
            </form>
        </SocialLoginFormStyle>
    )
}

export default SocialLoginForm;

const SocialLoginFormStyle = styled.div`
  p {
    text-align: center;
    margin: 40px 8px 20px 8px;
    
    &:before, &:after {
      content: "";
      display: inline-block;
      width: 60px;
      height: 1px;
      background-color: #ccc;
      margin: 0 8px 4px 8px;
    }

  }
`

