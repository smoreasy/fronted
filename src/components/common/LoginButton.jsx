import styled from "styled-components";

const LoginButton = ({text}) => {
    return (
        <>
            <LoginButtonStyle>
            {text  == "카카오" ? <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Baby%20Chick.png" alt="Baby Chick" width="25" height="25" /> :
                (text == "네이버" ? <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Badger.png" alt="Badger" width="25" height="25" /> :
                    <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Beaver.png" alt="Beaver" width="25" height="25" />)
            }
            <button>{text}로 로그인</button>
            </LoginButtonStyle>
        </>
    )
}

export default LoginButton;

const LoginButtonStyle = styled.button`
  background: #ffffff;
  display: block;

  border-radius: 8px;
  width: 100%;

  
  padding: 10px 0;
`
