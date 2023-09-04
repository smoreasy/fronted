import styled from "styled-components";
import IconHome from "../../assets/images/icon-home.svg";
import IconUser from "../../assets/images/icon-user.svg";
import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        {text: '홈', image: IconHome, path: ['product/all-products'], id: 0},
        {text: '상품등록', image: IconHome, path: ['/product/product-register'], id: 1},
        {text: '입점처', image: IconUser, path: ['/store/all-stores'], id: 2},
        {text: '마이', image: IconUser, path: ['/mypage'], id: 3},
    ];

    useEffect(() => {
        const path = location.pathname;
    }, [location]);
    return (
        <NavbarStyle>
            <ul>
                {navItems.map((ele, idx) => (
                    <li key={ele.id} onClick={() => {navigate((ele.path[0]))}}>
                        <button>
                            <p>{ele.text}</p>
                        </button>
                    </li>
                ))}
                {/*<li onClick={() => navigate()}>*/}
                {/*    <button>*/}
                {/*        <IconHome width="24" height="24" stroke="#222"/>*/}
                {/*    </button>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <button>123</button>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <button>123</button>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <button>*/}
                {/*        <IconUser width="24" height="24" stroke="#222" />*/}
                {/*    </button>*/}
                {/*</li>*/}
            </ul>
        </NavbarStyle>
    );
}

export default Navbar;

const NavbarStyle = styled.nav`
  width: 100%;
  
  position: absolute;
  left: 0;
  bottom: 0;
  
  border-top: 1px solid #ccc;
  
  ul {
    display: flex;
    li {
      width: calc(100% / 4);
      button {
        width: 100%;
        background-color: #fff;
        padding: 14px 0;
        text-align: center;
      }
    }
  }
`