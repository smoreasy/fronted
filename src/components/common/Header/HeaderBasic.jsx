import styled from "styled-components";

const HeaderBasic = () => {
    return (
        <HeaderBasicStyle>
            헤더에요...
        </HeaderBasicStyle>
    )
}

const HeaderBasicStyle = styled.header`
  width: 100%;
  padding: 20px 0;
  background: #539408;

  position: absolute;
  top: 0;
`
export default HeaderBasic;