import styled from "styled-components";

const LoginForm = (props) => {
    return (
        <LoginFormStyle>
            <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Bubbles.png" alt="Bubbles" width="200" height="200" />
            {props.children}
        </LoginFormStyle>
    )
}

export default LoginForm;

const LoginFormStyle = styled.div`
  padding-top: 200px;
  
  button {
    margin-bottom: 10px;
  }
`