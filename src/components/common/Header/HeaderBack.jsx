import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import { ReactComponent as IconArrowBasic } from "../../../assets/images/icon-arrow-basic.svg";
import { ReactComponent as IconShowModal } from "../../../assets/images/icon-show-modal.svg";

const HeaderBack = (props) => {
    const navigate = useNavigate();
    return (
        <HeaderBackStyle>
            <button onClick={() => {navigate(-1)}}>
                <IconArrowBasic width="24" height="24" />
            </button>
            <h1>{props.text}</h1>
            <button>
                <IconShowModal width="24" height="24" stroke="#222" fill="#222"/>
            </button>
        </HeaderBackStyle>
    )
}

export default HeaderBack;

const HeaderBackStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  width: 100%;
  background: #539408;

  position: absolute;
  top: 0;
  
  button {
    padding: 10px 0;
  }
`