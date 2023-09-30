import styled from "styled-components";

const SocialLoginButton = (props) => {
    return (
        <LoginButtonStyle type="button" url={props.props.logo}>
            {/*<img key={props.props.id} src={props.props.logo} width="25" height="25" />*/}
            {props.props.method}로 로그인
        </LoginButtonStyle>
    )
}

export default SocialLoginButton;

const LoginButtonStyle = styled.button`
  position: relative;
  width: 100%;
  
  background-color: var(--basic-color);
  color: #fff;
  border-radius: 10px;
  padding: 14px 0;

  text-align: center;
  align-items: center;
  
  &:before {
    content: "";
    width: 25px;
    height: 25px;
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    background: url(${props => props.url});
  }
`
