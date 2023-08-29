import LoginButton from "../components/common/Button/LoginButton";
import {Link} from "react-router-dom";
import KAKAO_AUTH_URL from "../api/OAuth";

const Login = () => {
    return (
        <>
            <Link to={KAKAO_AUTH_URL}>
                <LoginButton text="카카오" />
            </Link>
            <LoginButton text="네이버" />
            <LoginButton text="구글" />
        </>
    )
}
export default Login;