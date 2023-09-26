import Input from "./Input";
import SubmitButton from "../Button/FormSubmitButton";
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import {useRecoilState} from "recoil";
import {IsLogin} from "../../../recoil/atom/IsLogin";

const LoginForm = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useRecoilState(IsLogin);

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
                console.log(response);
                if(response.status === 422) {
                    // 아이디비밀번호 잘못 입력했을 때
                } else {
                    // 로그인에 성공하면
                    // atom에 로그인된 회원정보 저장
                    setIsLogin(true);
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

