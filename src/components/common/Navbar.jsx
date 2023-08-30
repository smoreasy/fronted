import styled from "styled-components";
import IconHome from "../../assets/images/icon-home.svg";
import IconUser from "../../assets/images/icon-user.svg";
import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        {text: '홈', image: IconHome, path: ['product/all-products']},
        {text: '상품등록', image: IconHome, path: ['/product/product-register']},
        {text: '입점처', image: IconUser, path: ['/store']},
        {text: '마이', image: IconUser, path: ['/mypage']},
    ];

    useEffect(() => {
        const path = location.pathname;
    }, [location]);
    return (
        <NavbarStyle>
            <ul>
                {navItems.map((ele, idx) =>(
                    <li onClick={() => {navigate((ele.path[0]))}}>
                        <button>
                            {/* 컴포넌트 넣는 법 */}
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