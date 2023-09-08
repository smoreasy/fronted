import styled from "styled-components";

const SubmitButton = (props) => {
    return (
        <SubmitButtonStyle>{props.text}</SubmitButtonStyle>
    );
}

export default SubmitButton;

const SubmitButtonStyle = styled.button`
  width: 100%;
  padding: 10px 0;
  
  background-color: var(--basic-color);
  color: var(--basic-font-color);
  
  border-radius: 8px;
  
  text-align: center;
`