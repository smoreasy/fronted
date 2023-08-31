import styled from "styled-components";

const Input = (props) => {
    const { type } = props;
    return (
        <>
            <LabelStyle htmlFor={props.for}>{props.label}</LabelStyle>
            <InputStyle id={props.id} type={type ? type : 'text'} {...props} />
        </>
    )
}

const LabelStyle = styled.label`
    display: block;
`

const InputStyle = styled.input`
  width: 100%;
  padding: 10px 4px;
  border: 1px solid #ccc;
  border-radius: 8px;
  
  &:focus {
    border: 2px solid yellow;
  }
  &::placeholder {
    color: #ccc;
  }
`

export default Input;