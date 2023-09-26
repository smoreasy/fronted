import instance from "../utils/instance";

const JoinAPI = (userInfo) => {

    instance.post('/', userInfo)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
}
export default JoinAPI;