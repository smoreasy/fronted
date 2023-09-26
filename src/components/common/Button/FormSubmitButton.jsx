import styled from "styled-components";
const SubmitButton = (props) => {
    return (
        <SubmitButtonStyle {...props}>
            {props.text}
        </SubmitButtonStyle>
    );
}

export default SubmitButton;

const SubmitButtonStyle = styled.button`
  width: 100%;
  padding: 10px 0;
  margin: ${(props) => props.margin || "0px"};
  
  background-color: ${(props) => props.backgroundColor || "var(--basic-color)"};
  color: ${(props) => props.color || "var(--basic-font-color)"};
  border: ${(props) => props.border || "none"};
  
  border-radius: 8px;
  
  text-align: center;
`