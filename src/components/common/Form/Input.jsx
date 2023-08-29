import styled from "styled-components";

const Input = (props) => {
    const { type } = props;
    return (
        <>
            <LabelStyle htmlFor={props.for}>{props.text}</LabelStyle>
            <InputStyle id={props.id} type={type ? type : 'text'} {...props} />
        </>
    )
}

const LabelStyle = styled.label`
    display: block;
`

const InputStyle = styled.input`
  width: ${(props) => props.width || '100%'};
  
  &:focus {
    border: 2px solid yellow;
  }
  &::placeholder {
    color: #ccc;
  }
`

export default Input;