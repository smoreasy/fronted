import MainCategoryButton from "./common/Button/MainCategoryButton";
import styled from "styled-components";

const MainCategoryButtons = ({categoryData}) => {
    console.log({categoryData});
    return (
        <MainCategoryButtonsStyle>
            {categoryData.map((ele, idx) => (
                <MainCategoryButton
                    props={ele}
                    isWide="48%"
                    isMargin="0 0 20px 0"
                />
            ))}
        </MainCategoryButtonsStyle>
    )
}

export default MainCategoryButtons;

const MainCategoryButtonsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  
  margin: 40px 14px 0 14px;
`