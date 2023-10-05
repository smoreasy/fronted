import styled from "styled-components";
import { Link } from "react-router-dom";
const MainCategoryButton = ({props, isWide, isMargin}) => {

    return (
        <MainCategoryButtonStyle background={props.background} isWide={isWide} isMargin={isMargin}>
            <Link to={props.link}>
                <button>
                    <div className="category-img"></div>
                    <h3>{props.title}</h3>
                    <p>{props.content}</p>
                </button>
            </Link>
        </MainCategoryButtonStyle>
    )
}

export default MainCategoryButton;

const MainCategoryButtonStyle = styled.section`
  width: ${({isWide}) => (isWide ? isWide : '100%')};
  margin: ${({isMargin}) => (isMargin ? isMargin : '0')};
  
  button {
    width: 100%;
  }
  
  .category-img {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 10px;
    background: url(${props => props.background}) center no-repeat;
    background-size: contain;
  }
  
  h3 {
    font-size: 1rem;
    font-weight: bold;
    
    margin: 10px 0 8px 0;
  }
  
  p {
    color: rgb(204, 204, 204);
    font-size: 0.8rem;
  }
`