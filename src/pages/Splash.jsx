import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import styled from "styled-components";

const Splash = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const waitTime = setTimeout(() => {
            navigate('/main');
        }, 2000);
    }, [])
    return (
        <SplashStyle>
            <h1>SMORAGE</h1>
            <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Articulated%20Lorry.png" alt="Articulated Lorry" />
            <h3>우리 가게<br />
                손 쉬운 재고관리</h3>
        </SplashStyle>
    );
}

export default Splash;

const SplashStyle = styled.div`
  width: 200px;
  margin: 0 auto;
  padding: 140px 0;
  
  h1, h3 {
    text-align: center;
  }
  
  h1 {
    font-size: 3rem;
  }
  
  img {
    display: block;
    width: 100%;
    margin: 10px 0 30px 0;
  } 
  
  h3 {
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
`