import StoreListItem from "./StoreListItem";
import styled from "styled-components";

const StoreList = (data) => {
    return (
        <StoreListStyle>
            {data.props.map((ele, idx) => (
                <StoreListItem image={ele.image} text={ele.상품명} number={ele.number}/>
            ))}
        </StoreListStyle>
    )
}
export default StoreList;

const StoreListStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px 20px;
`

