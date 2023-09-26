// import {useState} from "react";
//
// const useLogin = () => {
//     const [userInput, setUserInput] = useState({
//         user: {
//             email: 'smorage@stock.com',
//             password: '123123'
//         }
//     });
//     const handleLoginInputValue = (e) => {
//         const { name, value } = e.target;
//         setUserInput((prevState) => ({
//             ...prevState,
//             user: {
//                 ...prevState.user,
//                 [name]: value,
//             },
//         }));
//     }
//
//     const handleLogin = () => {
//         const response = await LoginAPI(userInput);
//     }
//
//     return {
//         handleLoginInputValue,
//         handleLogin,
//     }
// }
//
// export default useLogin;