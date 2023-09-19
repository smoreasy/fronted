import {Link} from "react-router-dom";
import LoginButton from "../Button/LoginButton";
import styled from "styled-components";

const LoginForm = (loginData) => {

    return (
        <LoginFormStyle>
            {loginData.loginData.map((ele, idx) =>
                <Link to={ele.link} key={idx}>
                    <LoginButton props={ele}/>
                </Link>
            )}
        </LoginFormStyle>
    )
}

export default LoginForm;

const LoginFormStyle = styled.form`
  margin-top: 20px;
  
  button {
    margin-bottom: 4px;
  }
`

