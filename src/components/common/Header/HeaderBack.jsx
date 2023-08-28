import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const HeaderBack = (props) => {
    const navigate = useNavigate();
    return (
        <HeaderBackStyle>
            <button onClick={() => {navigate(-1)}}>뒤로</button>
            <h1>{props.text}</h1>
            <button>검색</button>
        </HeaderBackStyle>
    )
}

export default HeaderBack;

const HeaderBackStyle = styled.header`
  display: flex;
  
  width: 100%;
  padding: 20px 0;
  background: #539408;

  position: absolute;
  top: 0;
`