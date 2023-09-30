import JoinForm from "../components/common/Form/JoinForm";
import JoinAPI from "../apis/api/JoinAPI";
import styled from "styled-components";

const JoinPage = () => {
    return (
        <JoinPageStyle>
            <h1>회원가입</h1>

            <JoinForm />
        </JoinPageStyle>
    )
}

export default JoinPage;

const JoinPageStyle = styled.div`
  width: calc(100% - 60px);
  margin: 0 auto;

  h1 {
    font-size: 1.4rem;
    font-weight: bold;

    padding: 20px 0;
  }
  
  input {
    margin: 8px 0 14px 0;
  }

`