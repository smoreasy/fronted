import styled from "styled-components";

const LoginButton = (props) => {
    console.log(props);
    return (
        <LoginButtonStyle type="button">
            <img key={props.props.id} src={props.props.logo} width="25" height="25" />
            {props.props.method}로 로그인
        </LoginButtonStyle>
    )
}

export default LoginButton;

const LoginButtonStyle = styled.button`
  display: flex;
  width: 100%;
  
  background-color: var(--basic-color);
  color: #fff;
  border-radius: 10px;
  padding: 10px 0 10px 10px;

  align-items: center;
  
  img {
    margin-right: 8px;
  }
`
