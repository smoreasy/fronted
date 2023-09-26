import styled from "styled-components";
import Input from "./Input";
import SubmitButton from "../Button/FormSubmitButton";
import {useState} from "react";
import useJoin from "../../../hooks/useJoin";
import {resolvePath, useNavigate} from "react-router-dom";
const JoinForm = () => {
    const [emailValue, setEmailValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const navigate = useNavigate();

    const handleJoinFormSubmit = (e) => {
        e.preventDefault();

        try {
             fetch('http://43.200.49.69:8080/members', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    name: `${nameValue}`,
                    email: `${emailValue}`,
                    password: `${passwordValue}`,
                }),
            }).then((response) => {
                console.log(response);
                navigate('/login');
            });
        } catch (error) {
            console.log('error: ', error);
        }
    }

    return (
        <form onSubmit={handleJoinFormSubmit}>
            <Input
                label="아이디"
                placeholder="이메일을 입력해주세요."
                type="email"
                value={emailValue}
                onChange={e => setEmailValue(e.target.value)}
                autoFocus
            />
            <Input
                label="이름"
                placeholder="사업장 이름을 입력해주세요."
                value={nameValue}
                onChange={e => setNameValue(e.target.value)}
            />
            <Input
                label="비밀번호"
                type="password"
                placeholder="비밀번호를 입력해주세요."
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                autocomplete="on"
            />

            <SubmitButton
                text="가입하기"
                backgroundColor="#fff"
                color="#222"
                border="1px solid #444"
                margin="10px 0 0 0"
            />

        </form>
    )
}

export default JoinForm;

