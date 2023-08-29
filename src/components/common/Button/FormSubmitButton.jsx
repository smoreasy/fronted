import styled from "styled-components";

const FormSubmitButton = (props) => {
    return (
        <FormSubmitButtonStyle>{props.text}</FormSubmitButtonStyle>
    );
}

export default FormSubmitButton;

const FormSubmitButtonStyle = styled.button`
    width: 100%;
`