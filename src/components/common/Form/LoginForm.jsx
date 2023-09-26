import Input from "./Input";
import SubmitButton from "../Button/FormSubmitButton";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {recoilPersist} from "recoil-persist";
import {useRecoilValue} from "recoil";
import isLogin from "../../../recoil/atom/isLogin";
const LoginForm = () => {
    const navigate = useNavigate();

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const handleLoginFormSubmit = (e) => {
        e.preventDefault();

        try {
            fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    email: `${emailValue}`,
                    password: `${passwordValue}`,
                }),
            }).then((response) => {
                const responseJson = response.json();
                console.log(responseJson);
                if(responseJson.token) {
                    localStorage.setItem('token', responseJson);
                    navigate('/main');
                }
            })
        } catch (error) {
            console.log('error: ', error);
        }
    }
    return (
        <form onSubmit={handleLoginFormSubmit}>
            <Input
                placeholder="아이디를 입력해주세요."
                onChange={e => setEmailValue(e.target.value)}
                autoFocus
            />
            <Input
                type="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={e => setPasswordValue(e.target.value)}
            />

            <SubmitButton
                text="로그인"
                backgroundColor="#fff"
                color="#222"
                border="1px solid #444"
                margin="10px 0 0 0"
            />

        </form>
    )
}

export default LoginForm;

