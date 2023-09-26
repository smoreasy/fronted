import {useNavigate} from "react-router-dom";
import {useState} from "react";
import JoinAPI from "../apis/api/JoinAPI";
import JoinForm from "../components/common/Form/JoinForm";

const useJoin = () => {
    const navigate = useNavigate();

    // userInfo
    const [userInfo, setUserInfo] = useState({
        email: '',
        name: '',
        password: '',
    });

    // input에 값을 입력하면 userInfo를 업데이트 한다.
    const handleJoinInputValue = (e) => {
        const { name, value } = e.target;
        setUserInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleJoinFormSubmit = async (e) => {
        e.preventDefault();
        console.log(userInfo);
        // const response = await JoinAPI(userInfo);
        //
        // if(response) {
        //     navigate('/login');
        // } else {
        //     navigate('/product/all-products')
        // }


    }

    return {
        userInfo,
        setUserInfo,
        handleJoinInputValue,
        handleJoinFormSubmit,
    }
}

export default useJoin;