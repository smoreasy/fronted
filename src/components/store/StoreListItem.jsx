import styled from "styled-components";

const StoreListItem = (props) => {
    return (
        <ProductListItemStyle>
            <img src={props.image} />
            <ul>
                <li>
                    <h3>{props.text}</h3>
                    <p>{props.number}개</p>
                </li>
                <li>
                    <button>상세보기</button>
                </li>
            </ul>
        </ProductListItemStyle>
    )
}

export default StoreListItem;

const ProductListItemStyle = styled.button`
  width: 100%;
  height: 140px;
  overflow: hidden;
  display: flex;
  border: 1px solid #ccc;
  border-radius: 8px;
  
  img {
    width: 100px;
    height: 100%;
  }
  ul {
    padding: 20px 10px;

    li h3 {
      font-size: 1.2rem;
    }
    li p {
      margin: 10px 0 20px 0;
    }
    
    li button {
      width: 100px;
      background-color: burlywood;
      color: #fff;
      border-radius: 8px;
      text-align: center;
      padding: 10px;
    }
  }
`