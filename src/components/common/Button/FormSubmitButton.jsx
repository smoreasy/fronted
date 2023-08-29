import styled from "styled-components";

const FormSubmitButton = (props) => {
    return (
        <FormSubmitButtonStyle>{props.text}</FormSubmitButtonStyle>
    );
}

export default FormSubmitButton;

const FormSubmitButtonStyle = styled.button`
  width: 100%;
  padding: 10px 0;
  
  background-color: cadetblue;
  border-radius: 8px;
  
  text-align: center;
`